---
title: About PySport
date: 2020-04-20 21:10:45
tags:
---
So.. what is *PySport* about?

# Where it all started

*Sam Allardyce walks into the video analysis room.. “Morning, I was watching the last Arsenal match and there were a few situations I saw that I thought they would hurt us on Saturday. I want you to find me all of these situations from their last 5 games and find the times in our last 5 matches that we have faced similar situations. Let me have it this afternoon. Thanks” …….“Gaffer, that is going…” Big Sam slams the door “… to take hours… of work”.*

Around Juli 2019 Joe Mulberry created an algoritm to find similar situations based on tracking data. As in most projects the first version is a [jupyter notebook](https://jupyter.org/) to prove it all work. And the code in Joe's notebook did work! But a notebook is not really end-user friendly. To get a product that is usable for end-users you need to follow some steps. Those steps aren't always obvious.
 
>I've come to the realization that notebooks (in whatever language/platform you like) create a tension that is basically impossible to resolve between the level of abstraction you should be exposing in your code, and the level of abstraction required for your prose narrative.
> &nbsp;
> -- Thom Lawrence (@lemonwatcher) [August 2019](https://twitter.com/lemonwatcher/status/1159580174062669825)  
  
Timing was right and I made contact with Joe while he was figuring out how to create a flask app around the notebook. As Thom already mentioned it's hard to get the right level of abstraction in a notebook. Split the code of the notebook into several files makes deployment harder, and refactoring the code into some separate layers for [infrastructure, domain models/services and application services](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) will probably never happen in a notebook.

Also in this case the layers were not there yet. We spend a day to go through all the notebook to understand what the code is doing and why. Then the '[refactor](https://en.wikipedia.org/wiki/Code_refactoring) fest' started. Together we added the layers, replaced [pandas](https://pandas.pydata.org/) with [dataclasses](https://docs.python.org/3/library/dataclasses.html) (don't hate me please), inserted a caching layer, added [flask](https://flask.palletsprojects.com/en/1.1.x/) and put it on a [digital ocean droplet](https://www.digitalocean.com/products/droplets/). *At a later stage we changed deployment to [heroku](https://www.heroku.com/) and replaced local storage with [S3](https://aws.amazon.com/s3/)*

We used [React](https://reactjs.org/) as frontend network and deployed it using [AWS Amplify](https://aws.amazon.com/amplify/).

The result: [SituSearch by Analyst+](https://analyst.plus). 

<img src="/images/situsearch.gif" width="100%" />


## Picking the right tool
In software development it's always hard to find our which tools are right for the job. Should we use [Spark](https://spark.apache.org/)? Or Pandas? Or regular python objects?

### Pandas for loading?
At first it looked like Pandas was the right tool. To get the right data a lot of jugling was needed and Pandas can do that. But the nested nature of [TRACAB](https://chyronhego.com/products/sports-tracking/tracab-optical-tracking/) data (Frame with Players, Positions, etc) is not a natural fit for Pandas. The [MultiIndex](https://pandas.pydata.org/pandas-docs/stable/user_guide/advanced.html) could be an option but it doesn't feel right.

In the case of SituSearch pandas wasn't the best tool for the job. Most work is done during parsing the TRACAB file. Parsing such a file in Pandas will probably look like 
```python
ball_raw = string_items[2].split(";")[0]
ball_raw = ball_raw.split(",")

frameID.append(frameID_temp)
team.append(10)
target_id.append(100)
    
....
    
    
tdat["y"] = pd.to_numeric(tdat["y"])
tdat["z"] = pd.to_numeric(tdat["z"])

if remove_officials == True:
    tdat = tdat[tdat['team'] != 4]
    tdat = tdat[tdat['team'] != -1]
```

### Pandas for matching?
Then the question remains if Pandas is needed for the matching? No. The SituSearch QueryEngine calculates the similarity between the selected frame and all other frames, sorts them and returns top N. The similarity algoritm is tweaked to use a c++ extension. Using a free Heroku dyno (VM) we were able to check 14.000 frames in 5 seconds (0,36ms/frame)

```python
def calculate_simularity(frame1: Frame, frame2: Frame) -> float:
    cost = calculate_cost(frame1, frame2)  # for scipy
    return optimize_cost(cost)  # c++ extension
```

When we load the entire tracking file it takes about 8 seconds to load it into a objects: ready to use. It takes 3 seconds to load into a pandas dataframe (without any parsing done yet). Our implementation of the TRACAB file loader also supports a `sample_rate` argument to take a sample of the file. Loading the same file with a sample rate 1/2 will take 4 seconds.

As you might noticed in the code above we use [typehinting](https://www.bernat.tech/the-state-of-type-hints-in-python/). In our case the *easier to reason about the code* was the most important argument. Everywhere in the code we know what kind of object we are passing around. In case of Pandas the only typehint we can use is `DataFrame` which doesn't tell us so much. 

```python
@dataclass
class DataSet(object):
    frame_rate: int
    pitch_size_width: int
    pitch_size_height: int
    periods: List[Period]
    frames: List[Frame]
```

The different classes makes it also possible to use [abstract classes](https://docs.python.org/3.8/library/abc.html) to define interfaces.

```python
class LoaderInterface(ABC):
    @abstractmethod
    def load(self, only_alive: bool = True, sample_rate: float = 1/12) -> DataSet:
        pass
        
class TRACABLoader(LoaderInterface):
    def __init__(self, dat_filename: str, metadata_filname: str):
        ....
        
    def load(self, only_alive: bool = True, sample_rate: float = 1/12) -> DataSet:
        ....
        

# lets add another loader
class MetricaLoader(LoaderInterface):
    def __init__(self, tracking_csv_filename: str):
        ....
        
    def load(self, only_alive: bool = True, sample_rate: float = 1/12) -> DataSet:
        ....
```

# So why PySport
I believe there are a lot people doing great things using Python (or R, or ...) in the sports domain! It's amazing to see that most people were determind to learn how to program, and get all kind of cool stuff working. 

It would be really cool if I can share knowledge and best practices in the field of software development, applied to sports. 
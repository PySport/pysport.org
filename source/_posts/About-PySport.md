---
title: About PySport
date: 2020-04-20 21:10:45
tags:
---
So.. what is *PySport* about?

# Where it all started

*Sam Allardyce walks into the video analysis room.. “Morning, I was watching the last Arsenal match and there were a few situations I saw that I thought they would hurt us on Saturday. I want you to find me all of these situations from their last 5 games and find the times in our last 5 matches that we have faced similar situations. Let me have it this afternoon. Thanks” …….“Gaffer, that is going…” Big Sam slams the door “… to take hours… of work”.*

Around Juli 2019 [Joe Mulberry](https://twitter.com/joe_mulberry) created an algoritm to find similar situations based on tracking data. As in most projects the first version is a [jupyter notebook](https://jupyter.org/) to prove it all work. And the code in Joe's notebook did work! But a notebook is not really end-user friendly. To get a product that is usable for end-users you need to follow some steps. Those steps aren't always obvious.
 
Timing was right: the new-kid on the block [Koen Vossen](https://twitter.com/mr_le_fox) met Joe while Joe was figuring out how to create a [flask](https://flask.palletsprojects.com/en/1.1.x/) app around the notebook. It seemed hard to connect flask to the notebook. 

>I've come to the realization that notebooks (in whatever language/platform you like) create a tension that is basically impossible to resolve between the level of abstraction you should be exposing in your code, and the level of abstraction required for your prose narrative.
> &nbsp;
> -- Thom Lawrence - Chief data monkey StatsBomb ([@lemonwatcher](https://twitter.com/lemonwatcher)) [August 2019](https://twitter.com/lemonwatcher/status/1159580174062669825)  
  
As Thom mentions it's hard to get the right level of abstraction in a notebook. Splitting the code of the notebook into several files makes it harder to share new versions. And refactoring the code into some separate layers for [infrastructure, domain models/services and application services](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) will probably never happen in a notebook.

Also in Joe's case the layers weren't there yet. We spend a day to go through all the notebook to understand what the code was doing and why. Then the '[refactor](https://en.wikipedia.org/wiki/Code_refactoring) fest' started. Together we added the layers, replaced [pandas](https://pandas.pydata.org/) with [dataclasses](https://docs.python.org/3/library/dataclasses.html) (don't hate me please), inserted a caching layer, added [flask-restfull](https://flask-restful.readthedocs.io/en/latest/) and put it on a [digital ocean droplet](https://www.digitalocean.com/products/droplets/). *At a later stage we changed deployment to [heroku](https://www.heroku.com/) and replaced local storage with [S3](https://aws.amazon.com/s3/)*

We used [React](https://reactjs.org/) as frontend framework and deployed it using [AWS Amplify](https://aws.amazon.com/amplify/).

The result: [SituSearch by Analyst+](https://analyst.plus). 

<img src="/images/situsearch.gif" width="100%" />


## Picking the right tool
In software development it's always hard to find out which tools are right for the job. Should we use [Spark](https://spark.apache.org/)? Or Pandas? Or regular python objects?

### Pandas for loading?
The first version of SituSearch operated on ChyronHego's [TRACAB](https://chyronhego.com/products/sports-tracking/tracab-optical-tracking/) tracking files.

At first it looked like Pandas was the right tool. To load the right data from the files a lot of jugling was needed and Pandas can do that. But the nested nature of TRACAB data (Frame with Players, Positions, etc) is not a natural fit for Pandas. The [MultiIndex](https://pandas.pydata.org/pandas-docs/stable/user_guide/advanced.html) could be an option but it doesn't feel right.

In the case of SituSearch pandas wasn't the best tool for the job. Most work is done during parsing the TRACAB file. Parsing such a file in Pandas will probably end in looping over all rows and altering columns. 
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
Snippet using pandas

```python
def frame_from_line(period, line):
    line = str(line)
    frame_id, players, ball = line.strip().split(":")[:3]

    home_team_players = []
    away_team_players = []

    for player in players.split(";")[:-1]:
        team_id, target_id, jersey_no, x, y, speed = player.split(",")
        team_id = int(team_id)

        if team_id == 1:
            home_team_players.append(Player(jersey_no, Position(int(x), int(y))))
        elif team_id == 0:
            away_team_players.append(Player(jersey_no, Position(int(x), int(y))))

    ball_x, ball_y, ball_z, ball_speed, ball_owning_team, ball_state = ball.rstrip(";").split(",")[:6]

    return Frame(
        frame_id=int(frame_id),
        ball_position=Position(int(ball_x), int(ball_y)),
        ball_state=BallState.from_string(ball_state),
        ball_owning_team=BallOwningTeam.from_string(ball_owning_team),
        home_team_players=home_team_players,
        away_team_players=away_team_players,
        period=period
    )
        
with open(files["data.dat"], "r") as fp:
    def _iter():
        n = 0  # can't use enumerate below because of `period.contains(frame_id)` condition
        sample = 1. / sample_rate

        for line in fp.readlines():
            line = line.strip()

            frame_id = int(line[:10].split(":", 1)[0])
            if only_alive and not line.endswith("Alive;:"):
                continue

            for period in periods:
                if period.contains(frame_id):
                    if n % sample == 0:
                        yield period, line
                    n += 1

    frames = []
    for period, line in _iter():
        frame = frame_from_line(period, line)
        frames.append(frame)

```
Snippet using plain python objects

Lets look at some number: when we load the entire tracking file it takes about 8 seconds to load it into a objects; ready to use. It takes about 3 seconds to load the same file into a pandas dataframe (without any parsing done yet). In our case we didn't need all the frames. Our implementation of the TRACAB file loader also supports a *sample_rate* argument to take a sample of the file. Loading the same file with a sample rate 1/2 takes 4 seconds.


### Pandas for matching?
Then the question remains if Pandas is needed for the matching? No, it's not. The SituSearch QueryEngine calculates the similarity between the selected frame and all other frames, sorts them and returns top N. The similarity algoritm is using c++ extension which is magnitudes faster than Python code. Using a free Heroku dyno (VM) we were able to match against 14.000 frames in less than 5 seconds (0,35ms/frame)

```python
def calculate_simularity(frame1: Frame, frame2: Frame) -> float:
    cost = calculate_cost(frame1, frame2)  # for scipy
    return optimize_cost(cost)  # c++ extension
```
But what does ": Frame" and "-> float" mean?

### Typehinting

As you might noticed we added ": Frame" and "-> float". It tells us about what the *type* of the argument should be, and what *type* of return value you can expect. That's called [typehinting](https://www.bernat.tech/the-state-of-type-hints-in-python/) and it provides some nice benefits. In our case the *easier to reason about the code* was the most important argument. Everywhere in the code we know what kind of object we are passing around. In case of Pandas the only typehint we can use is *DataFrame* which doesn't tell us so much. We would need additional checks inside our functions to make the passed arguments are correct.

```python
from dataclasses import dataclass
from typing import List


@dataclass
class Period(object):
    ....


@dataclass
class Frame(object):
    ....


@dataclass
class DataSet(object):
    frame_rate: int
    pitch_size_width: int
    pitch_size_height: int
    periods: List[Period]
    frames: List[Frame]
```
Snippet of the classes we use in SituSearch.

Within SituSearch we used [abstract classes](https://docs.python.org/3.8/library/abc.html) to define [interfaces](https://www.cs.utah.edu/~germain/PPS/Topics/interfaces.html). An interface defines what methods a class should implement. This makes it easier to add a new implementation (a new loader in example below) without thinking about what methods to add. 
Most IDE's will help you with implementing an interface:

![](/images/metricaloader.png)


This will result in:
```python
from abc import ABC


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
        pass
```



# So why PySport
We believe there are a lot people doing great things using Python (or R, or ...) in the sports domain! It's amazing to see that most people were determined to learn how to program, and get all kind of cool stuff working.
 
>I was in the same position 3 years ago, I had never coded before but was inspired by the public football analytics happening on Twitter and thought.. "I want to do that!"
> &nbsp;
> -- FC RSTATS ([@FC_rstats](https://twitter.com/FC_rstats)) [website](http://www.fcrstats.com/)

As we experiences ourselves it's really hard to learn [software design principles](https://en.wikipedia.org/wiki/Category:Programming_principles) on your own. Figuring out when to apply which [pattern](https://en.wikipedia.org/wiki/Software_design_pattern) is tough. With PySport we want to create an open community where we share all kind of best practices from all kind of domains translated to sport.
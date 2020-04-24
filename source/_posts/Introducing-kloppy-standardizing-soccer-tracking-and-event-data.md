---
title: 'Introducing kloppy: standardizing soccer tracking- and event data'
date: 2020-04-24 07:08:26
tags:
---
In our previous post we wrote about how PySport started. We gave a small peak into the source code of SituSearch and announced we'll open source the loading code.
 
One of the goals of the PySport community is to support open source projects that help to community to work faster and smarter, and be a source for learning about the sports domain. While we are not yet able to support projects the way [NumFocus](https://numfocus.org/) or [Apache](https://www.apache.org/) does, we believe it's important to make high quality libraries open source, that are easy to use and work out of the box.

### Current situation

In yesterdays [Friends of Tracking](https://www.youtube.com/channel/UCUBFJYcag8j2rm_9HkrrA7w) episode, [Devin Pleuler](https://twitter.com/devinpleuler) stated that it would be good to have a standard base available to work with tracking- and event data. He also stated that loading/parsing such data used to be a competitive advantage, but that's not the case anymore, so why not share it?! 

He already made some great pieces of code and notebooks available on [github](https://github.com/devinpleuler/analytics-handbook).

For working with pandas dataframes FC_Rstats made some nice snippets public in their [cookbook](https://github.com/FCrSTATS/tracab_cookbook).

Also [Laurie Shaw](https://twitter.com/EightyFivePoint) shared some usefull code on his [github](https://github.com/Friends-of-Tracking-Data-FoTD/LaurieOnTracking). Via the [HarvardSoccer](https://github.com/HarvardSoccer/TrackingData) account there are even more awesome goodies up for grabs. Interesting of this one is the fact it works by default with objects instead of with pandas dataframes. Is this a new trend? [Ben Torvaney](https://twitter.com/Torvaney) did the same with his [statsbombapi](https://github.com/Torvaney/statsbombapi) library.

I probably missed some work by others.. sorry! Please let me know and I'll add it.


### Loading and parsing should be a commodity

While it's really interesting to write code for deserializing/parsing tracking data it feels a bit like writing a json reader: it's a nice exercise if you have spare time but it should not be part of your daily work. And not only that. Especially for new people it's hard to figure out what all data means and availability of proper documentation is lacking.

When we look at a typical data science workflow it will look like this:
![datascience workflow](/images/datascience-flow.png)
You will probably have an idea of how much of your time you spend on each step, but [survey](https://www.dataversity.net/survey-shows-data-scientists-spend-time-cleaning-data/#) shows data scientists spend event 80% of their time on data preparation. That's a pitty! Most of the 'magic' happens in the modelling step. More time should be spend on that part. Loading and parsing should be a commodity.

### Introducing kloppy

We are very proud to announce **kloppy**. This python package enables data scientists or other enthusiasts to start working with two important types of data in soccer analytics: tracking data and event data. **kloppy** makes working with those types of data available for both expert users as beginners. Although the package is still work in progress as shown in the [todo list](https://github.com/PySport/kloppy#todo-list) it already provides end-to-end loading and transforming TRACAB data.

It's available through PyPi and installable using your favorite package manager. For pip:
```sh
pip install kloppy
```
No external dependencies (*right now.. chances are high pandas will we needed in next release*)


### Loading with kloppy
**kloppy** tries to make your live easier. A simple API is part if this. Lets look at an example below. In this example we option both raw tracking data and metadata as a file object and pass it to the TRACAB serialization method.

```python
from kloppy import TRACABSerializer

serializer = TRACABSerializer()

with open("tracab_data.dat", "rb") as data, \
        open("tracab_metadata.xml", "rb") as meta:

    data_set = serializer.deserialize(
        data=data,
        metadata=meta,
        options={
            "sample_rate": 1 / 12,
            "only_alive": True  # this is the default
        }
    )
    
import pprint
pprint.pprint(data_set.frames[0].home_team_player_positions)
    
```
Output:
```text

 {'10': Point(x=-1066.0, y=539.0),
 '14': Point(x=20.0, y=-42.0),
 '19': Point(x=-1972.0, y=-294.0),
 '20': Point(x=-1508.0, y=1636.0),
 '21': Point(x=-4823.0, y=42.0),
 '22': Point(x=-942.0, y=-1630.0),
 '29': Point(x=-595.0, y=-1275.0),
 '33': Point(x=-956.0, y=108.0),
 '5': Point(x=-1998.0, y=421.0),
 '7': Point(x=-320.0, y=1055.0),
 '8': Point(x=-265.0, y=1916.0)}
```
We can already start exploring the data.

An important model in tracking data is the `Frame`. This keeps all data together for a single frame in time. The definition looks like this:
```python
@dataclass
class Frame(object):
    frame_id: int
    ball_owning_team: BallOwningTeam
    ball_state: BallState

    period: Period

    home_team_player_positions: Dict[int, Point]
    away_team_player_positions: Dict[int, Point]
    ball_position: Point
```
Because we are still lacking more documentation the best way to explore the models is via [github](https://github.com/PySport/kloppy/blob/master/kloppy/domain/models/tracking.py). Githubs code navigation helps with exploring:
![github navigation](/images/kloppy-frame.png)

An IDE is also able to help you navigating through the models.


### Transforming with kloppy
We saw in the 'typical datascience flow' the step after data processing is modelling. The modelling part adds a lot of value to the whole. It would be great if you can apply your models to different formats of data sets. 

When details of the original dataset leak into your models, and you want to add another source your need to adjust / copy your models to cope with that. It's like a car with wheels welded on it: you have to buy a new car when you want to switch wheels.

**kloppy** tries to make it easy to switch wheels. It provides adapters (Transformers) to transform your data into a well defined format, so it will fit your model nicely, independent of the source. How does this work?

During the deserializing process **kloppy** keeps track of some important information: pitch dimensions and orientation.
`pitch dimensions` are the height and width of the pitch used in the source to relate all points in the dataset to.
`orientation` defines how the pitch is placed within the coordinate system. 
![pitch dimensions and orientation](/images/pitch_dimension_and_orientation.png)

In this example our model prefers to have all data to be oriented from the home goal. And x should be between 0 (home goal) and 100 (away goal), y between -50 (left) and 50 (right).
```python
new_data_set = Transformer.transform_data_set(
    data_set,
    to_pitch_dimensions=PitchDimensions(
        x_dim=Dimension(0, 100),
        y_dim=Dimension(-50, 50)
    ),
    to_orientation=Orientation.HOME_TEAM
)
```
No matter what orientation the input dataset has, the output dataset will have HOME_TEAM orientation and pitch dimensions are adjusted.

## Further work
This is just release 0.1 of **kloppy** and a lot needs to be done (*docs and tests please!*) 

We decided to release it already because of two reasons:
1. We need your feedback! Please submit your feedback at our [issue tracker](https://github.com/PySport/kloppy/issues).
2. It has already value. You can play around. We are currently working on some more serializers, prioritized on data availability for the public.  

This was part 2 in a series of two.

[Part 1: Introduction - this post](/2020/04/21/About-PySport/)
[Part 2: Diving into the tracking data loading library](/2020/04/24/Introducing-kloppy-standardizing-soccer-tracking-and-event-data/)
 



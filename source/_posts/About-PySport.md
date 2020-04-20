---
title: About PySport - Analyst+
date: 2020-04-20 21:10:45
tags:
---
So.. what's this about?

## Where it all started

*Sam Allardyce walks into the video analysis room.. “Morning, I was watching the last Arsenal match and there were a few situations I saw that I thought they would hurt us on Saturday. I want you to find me all of these situations from their last 5 games and find the times in our last 5 matches that we have faced similar situations. Let me have it this afternoon. Thanks” …….“Gaffer, that is going…” Big Sam slams the door “… to take hours… of work”.*

Around Juli 2019 Joe Mulberry created an algoritm to find similar situations based on tracking data. As in most projects the first version is a python notebook to prove it all work. And the code in Joe's notebook did work! But getting a notebook into production isn't very obvious. It's even quite hard.
 
>I've come to the realization that notebooks (in whatever language/platform you like) create a tension that is basically impossible to resolve between the level of abstraction you should be exposing in your code, and the level of abstraction required for your prose narrative.
> &nbsp;
> -- Thom Lawrence (@lemonwatcher) [August 2019](https://twitter.com/lemonwatcher/status/1159580174062669825)  
  
Luckily enough I made contact with Joe in that time, while he was figuring out how to create a flask app around the notebook. As Thom already mentioned above it's hard to get the right level of abstractions in a notebook. Split code into several files makes deployment harder, and refactoring the code into some separate layers for [infrastructure, domain models/services and application services](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) will probably never happen in a notebook.

Also in this case the layers were not there yet. We spend a day to go through all to code to understand what it is doing and why. Then the 'refactor fest' started. Together we added the layers, replaced [pandas](https://pandas.pydata.org/) with [dataclasses](https://docs.python.org/3/library/dataclasses.html) (don't hate me please), inserted a caching layer and added flask. *In a later phase we changed deployment to [heroku](https://www.heroku.com/) and replaced local storage with [S3](https://aws.amazon.com/s3/)*

We used React as frontend network and    
  
Around Juli 2019 I was lucky enough to work on [SituSearch by Analyst+](https://analyst.plus). 


Then a public API was needed.. and there my contribution started. 

To make it possible to add a public API we had to solve some challenges.

### From notebook to  
1.  

During one of the first meetings as a committee member of PyData Eindhoven I figured out   

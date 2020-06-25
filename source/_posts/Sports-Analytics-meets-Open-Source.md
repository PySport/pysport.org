---
title: Sports Analytics meets Open Source
date: 2020-06-25 09:03:10
tags:
---
> **PySport** supports a community where **everyone** can become better in (applying) **sports analytics**. Everyone in the community shares the common passion: sports analytics. **Sharing knowledge** and **teaching/learning** are core-values of the community. PySport brings experts and learners together and encourages the creation and maintenance of **high-quality open-source** projects, that can be used for end-users development and learning.

When we started in April we didn't have our vision very clear yet. We love the sports analytics community and had the feeling we could contribute to it. Sharing knowledge from other domains into the sports analytics domain. 

With the launch of [kloppy](https://github.com/pySport/kloppy) we thought we helped the community to provide a library to get over the first barrier of sports analytics: reading and parsing data. Well.. that didn't go as expected. We had some very useful user feedback: "Those layers causes too much cognitive load. [...] We start with copy and pasting examples, and see if it runs. When it does we'll try to adjust it to our needs and we're done." Our conclusion: no-one needs a well designed library with automated tests. Unless you have to maintain the library.

That might be the case more domains. Not sure. But once again an article comes to mind. Back in 2017 SportTechie published the article [Sports Technology has a problem: end user programming](https://www.sporttechie.com/sports-technology-problem-end-user-programming/). 
[Ravi Ramineni](https://twitter.com/analyseFooty) shares his experience when he joined Sounders: "Everything was on a couple of spreadsheets." In the same article we can read the following: 
> “Most of the code is throw away code,” adds Dorn, meaning that it’s never going to be incorporated into a larger code base, or likely to be seen by anyone besides the person who wrote it. [....] When programming is treated as problem-solving, like it often is in sports, the solutions are frequently suboptimal. Quality tools for end user programming are a significant help in achieving better user outcomes.

"Most of the code is throw away code" Our software developers heart hurts. 

But it is how it is. We need to deal with it. 
<img src="https://i.kym-cdn.com/entries/icons/original/000/023/987/overcome.jpg" width="100%" />
*source: [knowyourmeme.com](https://knowyourmeme.com/memes/improvise-adapt-overcome)*

How should we adapt? [Vincent Warmerdam](https://twitter.com/fishnets88) wrote an excellent article about [Roman Reasoning](https://koaning.io/posts/roman-reasoning), and this is the direction we should head into.
> So maybe … as a rule of thumb; when a diagram explains the steps of your system way better than your code, think about how you can get the code to look more like the diagram.


### Cross sport
Our vision doesn't say anything about a type of sports. That's by intention. We believe we should keep looking for opportunities to apply a solution from sport A to sport B. When we start being creative and think about how to apply solutions from one sport to another the impact of those innovations is way bigger. As a result the audience is bigger and the chances are higher someone will come up with smart applications. 

Sounds interesting.. but is this cross sport application of algorithms already happing? Yes!
Some recent examples: [adam](https://twitter.com/sonty_1) did this by applying "Wide Open Spaces" (by [Javier Fernández](https://twitter.com/JaviOnData) and [Luke Bornn](https://twitter.com/LukeBornn)) to [NFL tracking data](https://twitter.com/sonty_1/status/1269082435293270024). Expected Threat by [Karun Singh](https://twitter.com/karun1710) - which has it's origin in soccer - was adjusted by [Sam Forstner](https://twitter.com/SamForstner) so it can be applied to [hockey data](https://www.youtube.com/watch?v=lssk95Q57Tw).

### Apply it within a club
Can we broader the audience even further? That depends. An awesome next step would be to get the feedback of the end-users: the clubs/teams/staff/players. This will only happen when they use new models/algorithms. Tech companies can have a role in spreading the knowledge but then the spread depends on the budgets.

Is there a way to spread knowledge to end-users independent of the budgets? What would happen when algorithms are distributed in such a way that everyone with just a bit of knowledge of python/R can use it? There is a chance they will use it, and provide the authors with feedback. And on top of that: there are a lot 'amateur' performance analysts - playing around with data in their spare time - that can help out a performance analyst at a club. We should bring them together.

In our ideal world we bring together the experts, club and the community. This triangle must result eventually in magic! And the role of the companies? They supply the magic triangle with all kind of great data, and cutting-edge technology. Or feed the community with knowledge (like [SciSports](https://www.scisports.com/) presenting at [Friend of Tracking](https://www.youtube.com/channel/UCUBFJYcag8j2rm_9HkrrA7w))


### Super intuitive easy software it is.
Did you build something cool and want to share with the world? Please do! Consider searching for a project that does something related and see if your goodies can be integrated. Ask the maintainers and create a pull request. Or create a new open-source project from scratch.

What makes it easier for people to use your project?
- Have an intuitive api. Hide complex layers from the end-users. Think about *Roman Reasoning*
- Provide Examples. Most people learn from examples. They will change them to apply to their use-cases
- Have tutorials. A tutorial can help people to create their own - more complex - workflow.
- Add extensive documentation. For most people it won't be the starting point, but in case of issues people will look into it.
- Make your APIs forgiving. When end-users provide wrong arguments raise helpful exceptions with a pointer to how to solve it.
- Add a license (once again: ["Listen to Thom Lawrence"](https://twitter.com/lemonwatcher/status/1252970956756332544)). Make it possible for others to actually use it.
- Make it [pip](https://pypi.org/project/twine/) / conda installable. Just install and go with the bananas.

What makes it easier for people to contribute?
- Have a CONTRIBUTING guide. Explain what you expected and how the workflow looks like.
- Label issues with a "good first issue". This makes it easier for people to get familiar with the codebase. Example from [pandas](https://github.com/pandas-dev/pandas/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
- Use [cookiecutter](https://github.com/cookiecutter/cookiecutter) to setup everything you need like code formatting, linting, testing etc. [Guide on how-to setup project](https://sourcery.ai/blog/python-best-practices/)


Contribute! Contribute! Contribute!
What if you want to contribute but not sure how? There are some nice guides around and maybe the project itself has a guide on how to contribute.
[Kevin Markham](https://twitter.com/justmarkham) wrote a nice step-by-step guide about [contributing to a github hosted project](https://www.dataschool.io/how-to-contribute-on-github/). 


### What's already out there?
And the movement is already started! A very-incomplete list of projects with focus on plug-n-play

**Soccer**
- [football-packing](https://github.com/samirak93/Football-packing)🐍 by [Samira Kumar](https://twitter.com/Samirak93): *calculate the packing metric for a given pass* 
- [mplsoccer](https://github.com/andrewRowlinson/mplsoccer)🐍 by [Andy Rowlinon](https://twitter.com/numberstorm): *library for drawing soccer/football pitches in Matplotlib and loading StatsBomb open-data*
- [tyrone_mings](https://github.com/FCrSTATS/tyrone_mings)🐍 by [FC Rstats](https://twitter.com/FC_rstats): *scraper for transfermarkt*
- [socceraction](https://github.com/ML-KULeuven/socceraction)🐍 by [Tom Decroos](https://twitter.com/TomDecroos), [Lotte Bransen](https://twitter.com/LotteBransen), [Jan van Haaren](https://twitter.com/JanVanHaaren) and [Jesse Davis](https://twitter.com/jessejdavis1): *Convert existing soccer event stream data to SPADL and value player actions*
- [statsbombapi](https://github.com/Torvaney/statsbombapi)🐍 by [Ben Torvaney](https://twitter.com/Torvaney): *Statsbomb API with Dataclasses*
- [kloppy](https://github.com/pySport/kloppy)🐍 by [Koen Vossen](https://twitter.com/mr_le_fox): *standardizing soccer tracking- and event data*
- [trueskill](https://trueskill.org/)🐍 by [Heungsub Lee](https://github.com/sublee/trueskill): *the video game rating system*

**Basketball**
- [py_ball](https://github.com/basketballrelativity/py_ball)🐍 by [py_ball](https://twitter.com/py_ball_): *Python API wrapper for stats.nba.com with a focus on NBA and WNBA applications*

**American Football**
- [nflscrapR](https://github.com/maksimhorowitz/nflscrapR) by [Maksim Horowitz](https://twitter.com/bklynmaks), [Ron Yurko](https://twitter.com/Stat_Ron), [Sam Ventura](https://twitter.com/stat_sam) and [Rishav Dutta](https://twitter.com/rishavd64): *R Package for Scraping and Aggregating NFL Data*

**Hockey**
- [hockey_scraper](https://github.com/HarryShomer/Hockey-Scraper)🐍 by [Harry Shomer](https://github.com/HarryShomer): *This package is designed to allow people to scrape both NHL data*


### Next steps
In April we had a [poll on twitter](https://twitter.com/PySportOrg/status/1253221832074895360) and almost 60% of the respondents wanted to do something for the community. That's great! Our next step will be to:
1. Identify who wants to help in what way, using a small online survey
2. Start on bringing together people from the clubs, experts and other community members.

You can reach out to use at [our twitter](https://twitter.com/PySportOrg) 


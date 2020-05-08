---
title: 'MatplotVideo: Sync your plot to your video'
date: 2020-05-07 00:01:48
tags:
---
Thanks to Joe Mulberry for the inspiration for this post :-)

While working on a new project we wanted to validate the output of our model. After staring at the data for a while I decided there should be a better way. I want to do some manual comparision between the data and the video. 

In the yesterdays Friends of Tracking episode, [Javier Fernández](https://twitter.com/JaviOnData) describes why it's important to do a visual validation.

>I faced so many times an error in an algorithm or in the modelling approach, I spotted that in the video so many times i'm actually wondering how can you do that without video [...]
 video is a good way of validating
> &nbsp;
> -- Javier Fernández - Soccer Data Scientist FC Barcelona ([@JaviOnData](https://twitter.com/JaviOnData)) [May 2020](https://youtu.be/w0LX-2UgyXU?t=3178)  
  
Load the file in VLC and go, atleast that's what I thought. But that's not going to work. I need controls for easy forward and backwards seeking, and frame-by-frame seeking. VLC doesn't help me there.

There must be a package for that. And there is a great package that - amongst other cool stuff - also helps with playing a video file: [OpenCV](https://opencv.org/). There is a nice prebuilt binary package for [python package](https://pypi.org/project/opencv-python/) available.

### OpenCV
There are a lot interesting tutorials and examples available on the web about how to use OpenCV. If you like to play around with reading a video file you can start with [this example](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_video_display/py_video_display.html#playing-video-from-file)
```python
import numpy as np
import cv2

cap = cv2.VideoCapture('vtest.avi')

while(cap.isOpened()):
    ret, frame = cap.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    cv2.imshow('frame',gray)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### Sync the plots
<img src="/images/matplotvideo.gif" width="100%" />
*Example of syncing a combination of tracking- and event data, and video*

Lets look at a simple example of how to do the sync:
```python
from matplotvideo import attach_video_player_to_figure
import matplotlib.pyplot as plt

# (timestamp, value) pairs

# sample: big bunny scene cuts
fancy_data = [
    (0, 1),
    (11.875, 1),
    (11.917, 2),
    (15.75, 2),
    (15.792, 3),
    (23.042, 3),
    (23.083, 4),
    (47.708, 4),
    (47.75, 5),
    (56.083, 5),
    (56.125, 6),
    (60, 6)
]


def on_frame(video_timestamp, line):
    timestamps, y = zip(*fancy_data)
    x = [timestamp - video_timestamp for timestamp in timestamps]

    line.set_data(x, y)
    line.axes.relim()
    line.axes.autoscale_view()
    line.axes.figure.canvas.draw()


def main():
    fig, ax = plt.subplots()
    plt.xlim(-15, 15)
    plt.axvline(x=0, color='k', linestyle='--')

    line, = ax.plot([], [], color='blue')

    attach_video_player_to_figure(fig, "BigBuckBunny.mp4", on_frame, line=line)

    plt.show()


main()
```
This example syncs fictive scene change detection data with bigbunny video.

The 'magic' to redraw the plot is this part:
```python
line.set_data(x, y)             # set the new data
line.axes.relim()               # recalculate the data limits
line.axes.autoscale_view()      # scale view to limits
line.axes.figure.canvas.draw()  # redraw canvas
```



### But I only want to *print* info
You can also use this library without `matplotlib`. This can be usefull if you prefer a different way of outputting, print to console for example.

```python
from matplotvideo import start_video_player

from super_fancy_model_package import fancy_model

frames, fps = load_tracking_data()

def on_frame(timestamp: float):
    some_value = fancy_model.show_value(frames[fps * timestamp])
    print(f"{timestamp}: {some_value}")

start_video_player("favorite_match.mp4", on_frame)
```

## Let's start
It’s available through PyPi and installable using your favorite package manager. For pip:
```bash
pip install matplotvideo
```
Source code can be found on [github](https://github.com/PySport/matplotvideo)

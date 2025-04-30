---
layout: page
title: In Progress - Metal Detecting Robot
description: A robot with a manipulatable metal detector
# img: assets/img/12.jpg
importance: 1
category: school
related_publications: false
---

## In Progress - Metal Detecting Robot

For my final project in my intelligent robotics class, I am working with a classmate to create a metal detecting robot. The robot is constructed from three main components: an IRobot Create 3 controlled by a Raspberry Pi 4 running ROS2, a Lego EV3 arm running MicroPython, and an Arduino with a homebuilt metal detecting sensor.

This project is still a work in progress. At this point in time, we have successfully built and tested the metal detector, and we are working on writing a ROS2 node to interface with it over serial USB. We have almost finished the EV3 arm, pending more parts from our professor.

Once we have all of the hardware assembled and functional, we are going to use the Raspberry Pi as a central control system for the robot. It will interface with the EV3 using websockets over WiFi and recieve sensor inputs over USB.

Provided that we are able to meet our current goals by our deadline, we hope to also add a webcam to the arm, allowing us to control the robot remotely.

Photos coming soon!
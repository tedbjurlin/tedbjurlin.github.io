---
layout: page
title: H-Intercal
description: A Haskell Intercal Interpreter
importance: 1
category: school
related_publications: true
---

Intercal is a wild language. It was created in 1972 by Don Woods and James M. Lyon as a parody of contemporary programming languages. At its core, it was designed to share as few language features with other programming languages as possible. Instead, it made use of features such as the FORGET statement or the mesh operator (#). If these don't sound familiar, don't worry! Don and James made them up entirely.

Since Intercal is clearly the least functional language every created (in both senses of the word), it seemed only appropriate that I implement and interpreter for it in Haskell, a functional programming language (in both senses of the word). Enter [H-Intercal](https://github.com/tedbjurlin/H-Intercal), a haskell interpreter for Intercal.

In true Intercal fashion, this implementation works just a little differnetly from all of the others, such as [C-Intercal](https://esolangs.org/wiki/C-INTERCAL). In addition to being a complete implementation of the [Intercal-72](http://www.catb.org/~esr/intercal/) spec, plus a few features from C-Intercal, such as COME FROM statements (like GOTOs, but backwards).

This project was a whole lot of fun to build, and I am truly in awe of whoever created [Intecal on Interstates](https://www.intercaloninterstates.org/).

Check out my source code here: [[https://github.com/tedbjurlin/H-Intercal]]
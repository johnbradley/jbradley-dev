---
title: "Thoughts on AI Capabilities and Limitations"
description: Review of Anthropic's AI Capabilities and Limitations course and how I reproduced the lost-in-the-middle LLM issue.
pubDate: 2026-07-19
author: John Bradley
tags:
  - ai
  - llm-limitations
  - testing
---

## Intro

I recently took this Anthropic course: [ai-capabilities-and-limitations](https://anthropic.skilljar.com/ai-capabilities-and-limitations). It was more of a website with videos and activities with a quiz at the end.

## Course Evaluation

The content was a little outdated, but that's not surprising given how fast things have been moving. The course had some useful ideas for thinking about the different parts that go into an LLM interaction. Some of the examples were hard to reproduce due to improved model capabilities.

## Lost in the Middle

One item that I was able to reproduce easily was "lost in the middle": in a long context for an LLM, items at the beginning and end carry the most weight, so the middle of the context can be lost. To test this, I used Claude Code and a prompt about creating a simple Python program and attached the [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html). I added text to the middle of the style guide asking the LLM to include a comment with some random words. To my surprise, even Fable failed to add the comment. Including a giant style guide is a rather silly request, especially since the model was likely trained with this content. Adding a request to include a comment with a unique id could be used to verify that the LLM was paying attention to the middle context.

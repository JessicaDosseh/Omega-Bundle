## [0.0.2.README-ERROR-workflow_refactor](DOCUMENTATION/README-ERROR-workflow_refactor.md)

# Overview

I want this project to be maintainable and have reusable components that work across multiple platforms, but maybe I'm just overthinking things :/

I guess I should take it one step at a time then clean it up.

Also, I think I have a solution to the expo not running problem.
The first thing we would need to do is build out the expo app then connect the web app as a sub repo this process seems to work; both expo app and web are able to run and call from the common package. However, I think there might be some state management issues further down the line.

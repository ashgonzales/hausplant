# Project Overview

## Project Name

Hiro's Journey

## Project Description

Hiro's Journey (inspired by Joseph Campbell's infamous monomyth, or heroic narrative) combines the functionality of a diabetes management application with the joys if a game-ified interface. The HJ application gathers and renders real-time estimated blood glucose values, user-submitted events (carbohydrate intake, insulin doses, exercise), and other health statistics from the Dexcom RESTful API. We believe that health management should be more than just a health chart; it is a journey that every hero in their story must take and be accountable for, a journey that, while arduous, can also be rewarding and fun.

## API and Data Sample

Dexcom API: https://sandbox-api.dexcom.com

```
{
  "unit": "mg/dL",
  "rateUnit": "mg/dL/min",
  "egvs": [
    {
      "systemTime": "2018-02-06T09:12:35",
      "displayTime": "2018-02-06T01:12:35",
      "value": 122,
      "realtimeValue": 121,
      "smoothedValue": 122,
      "status": null,
      "trend": "flat",
      "trendRate": -0.5
    },
    {
      "systemTime": "2018-02-06T09:07:35",
      "displayTime": "2018-02-06T01:07:35",
      "value": 123,
      "realtimeValue": 124,
      "smoothedValue": 123,
      "status": null,
      "trend": "flat",
      "trendRate": -0.5
    },
    {
      "systemTime": "2018-02-06T09:02:35",
      "displayTime": "2018-02-06T01:02:35",
      "value": 125,
      "realtimeValue": 125,
      "smoothedValue": null,
      "status": null,
      "trend": "flat",
      "trendRate": -0.7
    }
  ]
}
```

## Wireframes

[Mobile Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/mobile_hfe0ck.png)

This condensed layouts displays only the walking avatar, but shows focus to each individual data component.

[Tablet Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/ipad_xez4ci.png)

The tablet wireframe displays the avatar on an infinite run with a multi-layered background. Individual data components are situated beneath the animation, though user must scroll to see them all.

[Desktop Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/desktop_fatnvk.png)

The desktop layout displays both the animation and all data components.

### MVP/PostMVP

THe goal of this MVP is to properly use the Airtable base to display information from the Dexcom API. MVP will utilize functional components with React hooks and axios. 

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Create data columns for glucose values, health events, and devices.
- Read diabetes management data updated to Airtable.
- Create a separate page for each data column.
- Render data on appropriate pages via axios and React components.
- Style pages with CSS. 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Animated avatar with reactions to different blood glucose levels.
- Multi-layered background for infinite running avatar. 
- CSS animated bar/line graph.
- Incorporate more game obstacles (such as monsters that appear when glucose levels are too high)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 2 & 3| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|September 4| Project Approval | Incomplete
|September 4| Initial Set-up (Create React app, Install dependencies, Airtable Entries) | Incomplete
|September 7| Core Application Structure (Imports, Functional Components) | Incomplete
|September 7| Route Separate Pages | Incomplete
|September 8| Render, Create | Incomplete
|September 8| CSS Styling | Incomplete
|September 9| MVP | Incomplete
|September 9| Deployment | Incomplete
|September 10| Post-MVP | Incomplete
|September 10| Debugging / Presentation Practice | Incomplete
|September 11| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal Preparation | H | 4hrs | 4hrs | 4hrs |
| Install Dependencies | H | 30min | min | min |
| Enter Data Into Airtable | H | 2hrs | hrs | hrs |
| Initial React App Structure (Components) | H | 3hrs| hrs | hrs |
| Route Individual Pages | H | 2hrs| hrs | hrs |
| Connect API with Axios | H | 1hrs| hrs | hrs |
| Render (GET) | H | 1hrs| hrs | hrs |
| Create (POST) | H | 2hrs| hrs | hrs |
| CSS Styling (App) | H | 1hrs| hrs | hrs |
| CSS Styling (Other Pages) | H | 3hrs| hrs | hrs |
| Deployment | H | 1hrs | hrs | hrs |
| POST: MVP - Give Avatar Different Expressions | H | 2hrs| hrs | hrs |
| POST: MVP - Infinite Running Background | H | 3hrs| hrs | hrs |
| POST: MVP - Animated Bar/Line Graph | H | 2hrs| hrs | hrs |
| POST: MVP - Incorporate More Game Obstacles | H | 3hrs| hrs | hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
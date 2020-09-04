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

This condensed layouts displays the walking avatar and gives focus to each individual data component.

![Mobile Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/mobile_hfe0ck.png)

The tablet wireframe displays the avatar on an infinite run with a multi-layered background. Individual data components are situated beneath the animation, though user must scroll to see them all.

![Tablet Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/ipad_xez4ci.png)

The desktop layout displays both the animation and all data components.

![Desktop Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599214524/desktop_fatnvk.png)

### MVP/PostMVP

The goal of this MVP is to properly use the Airtable base to display information from the Dexcom API. MVP will utilize functional components with React hooks and axios. 

#### MVP 

- Create data columns for glucose values, health events, and devices.
- Read diabetes management data updated to Airtable.
- Create a separate page for each data column.
- Render data on appropriate pages via axios and React components.
- Style pages with CSS. 

#### PostMVP  

- Animated avatar with reactions to different blood glucose levels.
- Multi-layered background for infinite running avatar. 
- CSS animated bar/line graph.
- Incorporate more game obstacles (such as monsters that appear when glucose levels are too high)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 2 & 3| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 4| Project Approval | Incomplete
|Sept 4| Initial Set-up (Create React app, Install dependencies, Airtable Entries) | Incomplete
|Sept 7| Core Application Structure (Imports, Functional Components) | Incomplete
|Sept 7| Route Separate Pages | Incomplete
|Sept 8| Render, Create | Incomplete
|Sept 8| CSS Styling | Incomplete
|Sept 9| MVP | Incomplete
|Sept 9| Deployment | Incomplete
|Sept 10| Post-MVP | Incomplete
|Sept 10| Debugging / Presentation Practice | Incomplete
|Sept 11| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/ashgon/image/upload/v1599229110/Priority_Matrix_zelcvi.pdf)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal Preparation | H | 4hrs | 4hrs | 4hrs |
| Install Dependencies | H | 1hr | min | min |
| Enter Data Into Airtable | H | 2hrs | hrs | hrs |
| Initial React App Structure (Components) | H | 3hrs | hrs | hrs |
| Route Individual Pages | H | 2hrs| hrs | hrs |
| Connect API with Axios | H | 1hrs| hrs | hrs |
| Render (GET) | H | 2hrs| hrs | hrs |
| Create (POST) | H | 2hrs| hrs | hrs |
| CSS Styling (App) | H | 2hrs| hrs | hrs |
| CSS Styling (Other Pages) | H | 3hrs| hrs | hrs |
| Deployment | H | 1hrs | hrs | hrs |
| POST: MVP - Give Avatar Different Expressions | H | 2hrs| hrs | hrs |
| POST: MVP - Infinite Running Background | H | 3hrs| hrs | hrs |
| POST: MVP - Animated Bar/Line Graph | H | 2hrs| hrs | hrs |
| POST: MVP - Incorporate More Game Obstacles | H | 3hrs| hrs | hrs |
| Total | H | 33hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
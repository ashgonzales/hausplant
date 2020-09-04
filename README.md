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

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
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

https://api.dexcom.com/v2/oauth2/login?client_id=M9DwcfZSjDBpw56c9aT1A9kZpnrKYs9p&redirect_uri=https://github.com/ashgonzales/hiros-journey&response_type=code&scope=offline_access

 a3f7d96aba8fcd42e082bd58a3404c99

 https://sandbox-api.dexcom.com/v2/oauth2/token
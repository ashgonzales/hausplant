# Project Overview

## Project Name

HausPlant

## Project Description

HausPlant organizes an individual's collection of indoor and home garden plants. The information collected by the Airtable includes the initial planting or purchase date, most recent repotting date, the plant's light preference, watering schedule, a web resource for the plant type, the location within the home or home garden, and what yellowing leaves can mean.

## API and Data Sample

API: N/A

Airtable Data: (https://airtable.com/shrRtFF4b7nVwI91G)

API Sample:
```
{
    "records": [
        {
            "id": "recPtkSGYkwM19ObB",
            "fields": {
                "Last Repotted": "2020-08-01",
                "Planted/Purchased": "2017-08-01",
                "Watering Schedule": "Weekly - When top 1\" of Soil is Dry",
                "Light Preference": "Indirect Light - Low to High Brightness",
                "Resource": "https://www.greenandvibrant.com/money-tree-plant",
                "Location": "Bedroom",
                "Plant Type": "Monstera",
                "Yellowing Leaves": "Too much water."
            },
            "createdTime": "2020-05-05T20:45:11.000Z"
        },
        {
            "id": "recnECPwo6Z4CjDQk",
            "fields": {
                "Last Repotted": "2020-01-01",
                "Yellowing Leaves": "Too much water or too much sunlight. Yellow leaves near the base may mean too much water.",
                "Planted/Purchased": "2018-04-01",
                "Watering Schedule": "Weekly - When top 1\" of Soil is Dry",
                "Light Preference": "Indirect Light - Low to High Brightness",
                "Resource": "https://bloomscape.com/plant-care-guide/pothos/",
                "Location": "Main Light Garden",
                "Plant Type": "Hanging Pothos"
            },
            "createdTime": "2020-05-05T20:45:11.000Z"
        },
        {
            "id": "recLH1c9SBSnK4niA",
            "fields": {
                "Yellowing Leaves": "Could mean too much direct sunlight",
                "Planted/Purchased": "2019-08-01",
                "Watering Schedule": "Several Days - Whenever top of soil is dry",
                "Light Preference": "Bright Light",
                "Resource": "https://www.houseplantsexpert.com/peace-lily-plant.html",
                "Location": "Main Light Garden",
                "Plant Type": "Peace Lily"
            },
            "createdTime": "2020-05-05T20:45:11.000Z"
        }
    ],
    "offset": "recLH1c9SBSnK4niA"
}
```

## Wireframes

This condensed layout displays a picture of the plant and gives focus to each individual data component.

![Mobile Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599249169/mobile_emcv0l.png)

The tablet wireframe displays a picture of the plant with the plant name, genus, and a button to the plant wiki next to it. Beneath is an accordion of Airtable data.

![Tablet Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599249169/ipad_e0isqn.png)

The desktop layout wil display a large header with the description of the application, and a summary of the user's plant collection beneath.

![Desktop Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1599249169/desktop_hid2mj.png)

### MVP/PostMVP

The goal of this MVP is to properly display information from the Airtable base. MVP will utilize functional components with React hooks and axios. 

#### MVP 

- Create data columns for initial planting or purchase date, most recent repotting date, the plant's light preference, watering schedule, a web resource for the plant type, the location within the home or home garden, and what yellowing leaves can mean.
- Read data updated to Airtable.
- Create data components.
- Render data on appropriate pages via axios and React components.
- POST / Create
- Style pages with CSS. 

#### PostMVP  

- Local Storage.
- Watering calendar.
- Photo animations.

## Component Hierarchy
    + App
        - Home
        - Nav Bar
        - Add Plant
        - Plant Details
          + Input

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

![Task Prioritized](https://res.cloudinary.com/ashgon/image/upload/v1599229823/image_abl2mq.png)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal Preparation | H | 4hrs | 4hrs | 4hrs |
| Install Dependencies | H | 1hr | min | min |
| Enter Data Into Airtable | H | 2hrs | hrs | hrs |
| Initial React App Structure (Components) | H | 3hrs | hrs | hrs |
| Route Individual Pages | H | 2hrs | hrs | hrs |
| Connect API with Axios | H | 1hrs | hrs | hrs |
| Render (GET) | H | 2hrs | hrs | hrs |
| Create (POST) | H | 2hrs | hrs | hrs |
| CSS Styling (App) | H | 2hrs | hrs | hrs |
| CSS Styling (Accordion) | H | 3hrs | hrs | hrs |
| Deployment | H | 1hrs | hrs | hrs |
| POST: MVP - Give Animations to Photos | H | 2hrs | hrs | hrs |
| POST: MVP - Calendar | H | 2hrs | hrs | hrs |
| POST: MVP - LocalStorage | H | 3hrs | hrs | hrs |
| Total | H | 30hrs | hrs | hrs |

## SWOT

Strengths : I feel like a good visionary. I let my eye for design and aesthetic lead my inspiration
Weaknesses : Planning. I still benefit from a plan but the more detailed a schedule, the more flustered and pressed for time I feel, which is almost stifling for the creative process. (I'm working on it.)
Opportunities : I decided to keep my plan a little less congested with directions this time around and started with a more high-fidelity wireframe to get the creative juices flowing.
Threats : Being indecisive and changing my mind half-way throughout the project about a design feature. I am known to do that.
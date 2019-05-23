# Tinkl 

![us](https://media.giphy.com/media/eXTue7sCt6ZvG/giphy.gif) 
```Created with love and affection by 
@jokosanyang - Scrum master 
@tloth - UX/UI lead 
@fweddi - Operational developer 
@rohansss - Quality assurance lead
```

---

## How to set :up: ?
- git clone this repo
- in the terminal run `npm i` to install all dependencies 
- you'll need to create a `.env` file in the root and add the environment variables for:
    - DATABASE_URL
    - TEST_DATABASE_URL
    - SECRET
- run `npm start` and view on localhost:7000 in your browser

Note: You can run `npm test` to see our tests and `npm run start:live` to run the server with nodemon.

Note: You can run the file `src/model/scraping/inserter.js` to populate a locally hosted `DATABASE_URL` with data.

---
 
## :bee: Overview
**The problem we'd like to solve:**
> Drinking the recommended 2 litres of water a day means you need to use the toilet often.
> It can be especially inconvenient when you're out in the city and away from a toilet.
> It would be nice if you could track down the nearest public toilet, whether it be a McDonald's, a portapotty, or a free museum.
> An added bonus would be if the app could tell you how much the toilet costs if not free, and give it a cleanliness rating.

**Features include:**
the ability to filter out paid, non-accessible or toilets without baby-changing facilities, map with directions, and a basic rating system.  

Using Agile methodology, four developers worked on the app over three weeks consisting of a design week and a two week build sprint, involving user research and testing at each stage.  

**This project is hosted on Heroku: https://tinkl.herokuapp.com/**

---

## :tractor: User journey 
**Main user journey:**
As a user, I want to find my closest suitable toilet ASAP when I'm out and about in London.

**User stories:**
As a user, I want to see the main page of the app on load.
As a user, I want to choose how I input my location. 
As a user, I want to select toilets that fit my needs. 
As a user, I don't want to select my filters every time. 
As a user, I want to be able to easily navigate between pages. 
As a user, I want to get a list of toilets. 
As a user, I want directions to a particular toilet. 

<!-- ![what are we doing?](https://media.giphy.com/media/40kBbVUHFSEdW/giphy.gif)
 -->
**Stretch goals:**
As a user, I want to be able to check a toilet's opening hours.
As a user, I want to be able to add a new toilet to the app. 
As a user, I want to be able to edit incorrect toilet info.
As a user, I want to see the nearby toilets in a map.
As a user, I want to view reviews of each toilet to determine its cleanliness before visiting.
As a user, I want to be able to leave a review of a toilet after visiting it.

---

## Process

### Design week
> User research and protopyping

For the first week of the project, we focused on:
- discovery and definition workshops on the problem and solutions
[insert pics from the crazy 8 and workshops]

- user research and testing
[insert main findings]

- designed a prototype using [Figma](https://www.figma.com/file/g0zKvTS7JiJsIpoVybjDsPbv/Tinkl?node-id=0%3A1)
> ![landing page in progress](https://media.giphy.com/media/KFn4Ue0hLRgWRjyToJ/giphy.gif)

<!-- ![woo design](https://media.giphy.com/media/hTgmFytUwwHLaMahU1/giphy.gif) -->

### First build sprint 
> Planning and design

For the first week of building, our goal was to finalise the design and complete a very minimal viable product(MVP). After planning, we broke the tasks down into front-end and back-end issues and tackled both ends simultaneously, switching pairs regularly to ensure every team member worked on every part of the code.


### Second build sprint
> Product completion and bug fixing

![coding](https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif)
We had slightly less time for this sprint, and focused on getting our MVP to a point where we were satisfied with it, even though we did not manage to work on the stretch goals.

---

## :sweat_drops: Issues faced (and conquered)

* using Promise All effectively
* making sure that all inputs and buttons were accessible
* scraping data from an hostile API

![the struggle](https://media.giphy.com/media/B7ppUExX92PjW/giphy.gif)

---

## :wrench: Tech stack:

| Languages | Testing/CI | Frameworks/Libraries | Other |
| -------- | -------- | -------- | -------- |
| HTML     | Tape     | Node.js     | Heroku |
| CSS     | Supertest     |  Handlebars    | PostgreSQL |
| JavaScript     |   Travis   | Express     | Nodemon |

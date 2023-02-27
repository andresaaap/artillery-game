# Artillery game
browser game mimicking the classic two-player, turn-based artillery game, based on Angular and Node

### Prerequisite

- Please install NodeJS 16.19.0 following this [guide](https://nodejs.org/en/download/)
- Please install Angular 15.2.0 following this [guide](https://angular.io/guide/setup-local)

### Install

1. Open the terminal

2. Change working directory to the root directory of the project

3. Install dependencies

```
$ npm install
```

4. Change working directory to the frontend-artillery

5. Install dependencies

```
$ npm install
```

### Quick Usage

**You can watch this [demo](https://youtu.be/aHbmS6fa5g4) to see how the app works and how to use it**

1. Open the terminal

2. Change working directory to the root directory of the project

3. Run the web server for the backend

```
$ node server.js
```

5. Change working directory to the frontend-artillery

6. Run the angular application

```
$ ng serve --open
```

### Architecture and design

- Web server backend: It is based on NodeJS, javascript and ExpressJS. I decided to use this one because I have lot of practice with it and I can develop very fast in using these technologies.
- Frontend: This is based in Angular because it is a well known framework. I have experience with it and I choose it over React because of this. I added some buttons to simulate the game to prove that the Angular app is working and is integrated with the web server. Because of time limitations I couldn't integrate the video game to the angular app. The basic video game can be found in simple-gravity-example1.html, which is not the final game but a proof of concept. I decided to create the game in javascript Canvas because I created one video game like that during the Front-end Nanodegree.

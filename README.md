# This is Flasho - A Flashcard App
## A study tool for web development and all subjects

Live site: https://flasho.herokuapp.com/

### Description

I concieved of this app initially as a study tool for web development concepts. Specifically, I wanted to be able to present multiple pieces of information independently about a single topic, vis-a-vis parameters and return values on built-in Javascript methods. I saw an opportunity to expand the scope of this project to be general purpose, while simultaneously furthering my own study of developing a full-stack app using MERN. Therefore, I ended up with a flash card app where each card can have multiple question-answer sets which. Users can engage the deck editor to build new decks of flash cards for any subject, or modify exsisting ones.

When a new user signs up they will automatically have some default decks about web development topics. From there they can customize which decks will appear in the dashboard, adding, removing or editing them as needed. If a user does not wish to sign up they may log in as a guest and use the default decks.

### Uses

#### Front end
- CRA for the front end. I see a lot of popularity around Vite and I'll explore that or another option for my next project
- Material UI; selected for interactive components like the responsive drawer and dropdown menus, as well as the theme provider.

#### Back end

- Node & Express for file serving and routing
- MongoDB with Mongoose for schema definition/validation
- JWT for authentication/authorization

### Local Deployment

If you would like to run Flasho locally:
1. Clone this repository. Using the command line navigate to the `server` directory and the `client` directory and run `npm install` in both.
2. In the `server` directory, create a file called `.env`
3. `.env` should contain the following lines:
```
JWT_SECRET=<your-secret-here>
MONGODB_URI=<mongodb-connection-string-here>
NODE_ENV=development
```
`JWT_SECRET` can be any string. `MONGODB_URI` should also specify the name of the database to be used. It takes the place of `defaultauthdb` following [MongoDB connection string formatting](https://www.mongodb.com/docs/manual/reference/connection-string/).

4. Navigate to `server` and run the command `nodemon server.js` or `node server.js` if nodemon is not installed.
5. In a separate terminal window, navigate to `client` and run `npm start`

### What I learned

Having studied web development for the past two years, I am proud to present this project as it represents a milestone in my progress. It synthesizes my knowledge of frameworks/libraries, their undergirding language & syntax, working with persistent data, and handling HTTP request/response cycle to asynchronously & dynamically render content. Some specific knowledge I acquired in building this project includes:
- Writing queries for heavily nested JSON data
- How to implement a basic auth flow and security concerns therein, as well as how and why to pass tokens to and from the server
- Working more closely with the React component lifecycle, focusing on reducing rerenders, triggering a rerender when necessary, and providing custom hooks
- Experience in both development and production environments
- Working with the Mongoose ODM library. Admittedly, more features from Mongoose could be utilized here to improve code legibility where applicable.

### Next Steps

- Add MUI Snackbar components to deliver feedback to user, ie. operation success/failure and server errors
- Implement Fischer-Yates shuffle algorithm and provide a button to reorder cards
- Add a test suite. It is too inefficient to manually test all aspects of an app with this complexity
- More animation to enhance card transitions
- Dark Mode!

### Known Issues

- 'Source of truth' concerns regarding the useToken hook ~~and Editor component.~~ Can cause issues in rendering certain routes.
    - token should be manually decoded when needed, not held as a variable in memory. Supply module functions for this purpose
    - ~~Editor should fetch its own data on render, not passed through as state. (ie. it should have what it needs to render independently)~~ Fixed!
- ~~Setting `_id` fields manually in the data model and relying on a sequential order during consumption. Should be removed entirely and decoupled from presentation~~ Fixed!
- Styling code mixed with functional code. Needs to be imported as classes or split into style components and use composition.
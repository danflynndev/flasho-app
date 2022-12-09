# Flasho - A flash card study app
#### Video Demo:
#### Live Site: https://flasho.herokuapp.com/

## Overview
---
The inspiration for this app was to create something that I and others could actually use and find value in, even if it's not the most novel concept. I have been studying web development for 2 years and concieved of this project as a way to learn by doing, as well as provide learning resources for others. Whenever I wrote flash cards in the past, I would never actually use them since I found the simple act of copying down the information was enough for it to stick in my mind. This time, I decided to not only create a set of flash cards anyone can use to study web development, but a service to build a study tool for any subject.

Flashy is a web app build using the MERN stack - short for MongoDB, Express, React and Node. This suite of technologies provides the tools needed to create single page applications that can perform create, read, update, and delete operations on an integrated database. My implementation of Flashy is renders views client-side using React while calling an API written in Express and Node to handle login, sessions, and data operations. Additionally, a chunk of tooling and configuration choices were handled by using create-react-app; a common method for quickly spinning up a project in React without getting bogged down in aforementioned configuring woes.

## Project Structure
---
The root directory contains Procfile and a package.json, both of which contain instructions for deployment to Heroku. It also contains two directories - client and server - one representing the front end operations while the other is responsible for all back end work. Both contain package.json and package-lock.json files which track all configurations and dependency packagages to be installed wherever the project runs.


### Client

This directory was initialized by the create-react-app program. The program provides a set of packages, configurations and boilerplate code that allowed me to immediately run a React app locally. Additionally, create-react-app automatically configures Babel and Webpack, two pipeline tools responsible for transpiling and bundling JavaScript code into browser-friendly documents that can be sent via HTTP.

React allows the creation of reusable components which are used to visualize the state of the app's data; my primary reason for selecting this framework. These components, created by me, reside in the src/components directory. The components are constructed utilizing many features made available by Material UI, a React component library and styling solution. While I enjoy writing my own CSS, I selected Material UI for its interactive components, such as the responsive Drawer and Navbar, as well as the ability to apply a theme across all components. The theme option design choice provided by MUI significantly reduces the amount of styling code needed and allows easy modifications where needed.

This project relies heavily on a core idea of React; reusability. One of the primary features of my app is that users can create custom decks of flash cards. A user can have any number of decks and a deck can have any number of cards. Furthermore, each card can house an arbitrary number of question/answer sets. This is made possible by leveraging the reusability aspect of React components.

The hooks folder contains a crucial function used for hooking into the React component lifecycle and propagating the session token for consumption by various components. Inspiration for the inclusion of this hook was drawn from [this tutorial on Digital Ocean.](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-2-creating-a-token-api)


### Server

This directory contains the set of processes required to handle transport and manipulation of user data, as well as an HTTP server in the Node runtime built with the Express framework. The server architecture is separated into modules for Models and Controllers which are utilized in Express Routes and middleware functions. I had considered using a multi-layer server architecture following a Data Access Object pattern, however by including Mongoose I eliminated the need for a DAO. The Mongoose package integrates a specified MongoDB collection while handling data modeling and schema validation. A significant portion of the server is geared toward providing HTTP routes that expose an API for the client to recieve, send, and update data in the collection.

The server also handles user authentication and authorization using JSON Web Token. Some apps use an HTTP only cookie to store session and user info, which is a very secure method. However, by encoding user data in a JWT and sending that to the client, I can minimize the number of HTTP requests that need to be made. Users who create an account are stored in the database with an associated collection for their custom decks. Users who do not wish to sign up can opt to sign in as a guest and study the default materials. I utilized portions of [this GitHub project](https://github.com/adrianhajdin/project_mern_memories) to help me understand auth flow and JWT.

Last, the server is configured to serve the static files that result from the bundling process when the React client is built for the production environment. It does so conditionally by checking to ensure the Node environment is, in fact, production.


### Database

I elected to use a non-relational database for this project. Because user created flash card decks will be of various shapes and sizes, I needed a flexible data store. SQL would be too rigid and limiting to accomodate the endless potential shapes that user created decks could take.

In the server directory there is a JSON document used to seed the default decks on account creation and for the guest account.

## The Platform
---
I elected to deploy the app using Heroku. The platform automates the build process and launch commands, can be deployed from the command line, and integrates easily with a GitHub repository. Crucially, Heroku also allows me to specify environment variables, meaning I can keep sensitive information like the JWT secret and MongoDB connection string, out of any publically available code.

## What I learned
---
This project represents a milestone in my learning process as a web developer; it marks the first time I went from self-generated idea to complete functional resource available to the world. It represents the synthesis of a wide range of knowlege from simple HTML & CSS to programmatic JavaScript and weilding its frameworks in addition to understanding network communication over the internet and navigating deployment concerns. While it may not be perfect, I did my best to research best practices for every technology used and modeled my code structure on battle-tested CS concepts. A few things I came to refine my knowledge of with this project include:

- Writing queries for complexly structured JSON data
- How to implement a basic auth flow and security concerns therein, as well as how and why to pass tokens to and from the server
- More correctly work with the React component lifecycle, reducing rerenders, triggering them when necessary, and providing custom hooks
- I understand better now the differences between development versus production environments

## Next Steps
---
With an app of this complexity, there is certainly room for additional features an improvements. Here are some planned changes I have to make the project more useful and usable:

- Adding MUI Snackbar components to deliver server messages to the user - for example, a confirmation message that pops up when they successfully edit or create a new resource
- Implement the Fischer-Yates shuffle algorithm and giving the user a button to reorder the cards during a study session
- Develop a transition animation to better show switching to the next or previous card
- I would also like to add a testing suite, and do this earlier on in development of other projects. I have come to understand the great value provided by automated testing
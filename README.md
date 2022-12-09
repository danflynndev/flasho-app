what it is
what the files do
debated design choices and why chosen

packages / frameworks
FE - why
react - for visualizing data with reusable components. fits well with project goal since the flash card data can naturally be represented in a nested heirarchy of components. reusable components means creation operations are flexible allowing user uploaded data of any size

create-react-app - out of the box configuration using babel for transpilation and webpack for bundling into browser-friendly documents

material ui - speed up development with ready to use react components. project makes heavy use of drawer, dropdown menu, 

BE - why
node & express - for handling http requests and responses, as well as middleware, request body parsing. structured into models, controllers and routes. considered multi-layered server architecture, utilizing a DAO but mongoose provides the data access methods, and code footprint size.

mongoose - provides data model schema definition and validation for mongodb

JWT - user session auth tokens - can encode data to be stored on the front-end, minimalizing network requests (secure if connection is, fine because if token is compromised the app is not dealing with sensitive user data)- versus a db for tokens (redis) or putting info in a http-only cookie (more secure)

DB - 
mongodb - flexible document-based json structure

client side rendered web app with data fetching api 

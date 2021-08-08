# Make sure to have a React development environment in place.
- ref:- https://www.valentinog.com/blog/redux/
-> Create a basic react app
run npx create-react-app <app-name>

## Concepts:- 

    In a React component the state holds data which can be rendered to the user. The state in React could also change in response to actions and events: in fact we can update the local component’s state with this.setState().

    So, in general a typical JavaScript application is full of state. For example, state is:

        - what the user sees (data)
        - the data we fetch from an API
        - the URL
        - the items selected inside a page
        - eventual errors to show to the user
    
## What problem does Redux solve?

- An innocent single page app could grow out of control without clear boundaries between every layer of the application. 
- We don't have  a consistent way to keep track of state changes in react ( frontend frameworks ).
- A ton of logic gets stuffed into frontend components.
- frontend components shouldn’t know about the business logics.

## REDUX as a solution :-

- Redux helps giving each frontend component the exact piece of state it needs. alongside with the code for fetching data.
- Redux can hold business logic inside its own layer (middleware).
- Redux beautifully keep logic and behaviours abstracted away from the UI. 
- UI testability skyrockets and so developer productivity.


## Know the Redux store :- 

- The store in Redux is kind of magic and holds all of the application's state.
-  State in Redux comes from reducers

- Terminology:- action, reducer, middleware .

- Store is the result of calling createStore, a function from the Redux library. createStore takes a reducer as the first argument.

- Pass an initial state to createStore, useful for server side rendering and state preloading,
- Reducers produce the state of your application

## Redux reducers:- 

- A Redux reducer is just a JavaScript function. It takes two parameters: the current state and action 
- In Redux we can not mutate local state in place.

- The third principle of Redux (as outlined by its creator) prescribes that the state is immutable and cannot change in place.

- In other words the reducer must be pure. A pure function returns the exact same output for the given input.

- Reducers produce the state of an application. 
### But how does a reducer know when to generate the next state?

## Redux actions and named constants :- 

- The second principle of Redux says the only way to change the state is by sending a signal to the store. This signal is an action. 
- "dispatching an action" means sending out a signal to the store.
- Redux actions are nothing more than JavaScript objects

- e.g :- 
        {
            type: 'ADD_ARTICLE',
            payload: { title: 'React Redux Tutorial', id: 1 }
        }

- The type property drives how the state should change and it's always required by Redux.
- payload property instead describes what should change, and might be omitted .

- As a best practice in Redux we wrap every action within a function, so that object creation is abstracted away. Such function takes the name of action creator: 

- eg :- 
       export function addArticle(payload) {

            return { type: "ADD_ARTICLE", payload }

        }; 

- We can notice that the type property is a string. Strings are prone to typos and duplicates and for this reason it's better to declare actions as constants.
- Create a new file for all the constants.

- Follow the Redux duck convention to keep every Redux related piece in a single file.

### How does a reducer know when to generate the next state?

- The key here is the Redux store. When an action is dispatched, the store forwards a message (the action object) to the reducer.

- At this point the reducer says "oh, let's look at the type property of this action". Then depending on the action type, the reducer produces the next state, eventually merging the action payload into the new state.

### key points for avoiding mutations in Redux:

   - use concat, slice, or the spread operator for arrays
   - use Object.assign or object spread of objects

#  Redux itself is a small library (2KB) and the most important methods are just three

   - getState for reading the current state of the application
   - dispatch for dispatching an action
   - subscribe for listening to state changes

## connecting React with Redux

- React there is react-redux, a library for which you need to learn just one method for now: connect.
- connect :-  it connects a React component with the Redux store.
- use connect with two or three arguments depending on the use case

- mapStateToProps:-  Does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

- mapDispatchToProps:-  Does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

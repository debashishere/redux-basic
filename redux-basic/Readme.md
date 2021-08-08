# Make sure to have a React development environment in place.

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
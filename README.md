# DormIt first prototype

## Introduction

DormIt is an app that provides delivery for student. This is the first prototype for the DormIt app.

## Technologies

In this app, we shall use React, TypeScript and Firebase for the development. Firebase will be used for authentication and storage due to how simple it is to set up and working. We will handle routing use react-router. For styling, need further discussion as we don't know how familiar people are with CSS framework. These are the main technologies used for this app

## Project structure

The app has four(4) main pages:

- `/browse` is the route that show all products, handle products selection
- `/search` is the route that handles search and display searched items
- `/cart` is the route that handles remove items, increase items amount, payment
- `/account` is the route that handle user data

For this project, I shall organize the component based on which route they are used on. For example, the `Item` component should be on the `browse` directory as we use `Item` in `browse` route. This decision is made based on the fact that there are little to no common functionalities between routes. I also have the `shared` directory for any components that are shared between different routes, and `helper` for any helper function and hooks. Additionally, for this app I will use ContextAPI to handle state management

```bash
/src
|
|-- context
|-- helpers
|-- shared
|-- routes
    |-- account
    |-- browse
    |-- cart
    |-- search
```

For the moment, I shall ignore the need for testing

## Database structure

Because Firestore(which is the name for the storage Firebase used) is a Non-SQL database, the structure is different from normal SQL database. In a sense, it is more similar to a JSON structure. In firestore, we have collections, and in each collection we have multiple elements in it, each have its own ID

For this app, from the description so far, in my opinion, it should have two(2) collections: `product` and `user`

- `product` should hold the details about a product like its id, price, description, etc.
- `user` should hold detail about the user AND all items user has selected

The detail for each element of the type can be found on [types.ts](types.ts)

---
title: Task Management Library Documentation
---
## Overview

This library provides a simple yet powerful state management system designed specifically for task management applications. Built with TypeScript, it offers type-safe operations to manage tasks efficiently.

## Getting Started

### Installation

To install the library, run the following command in your project directory:

```bash
npm install your-task-management-library

```

### Importing

Import the `Store` class from the package to start using it:

```javascript
import { Store } from 'ManageTypeTasks-cb';

```

## API Reference

### Initializing the Store

To create a new store with an initial state, use the `Store` class constructor:

```javascript
import { Store } from 'ManageTypeTasks-cb';

const initialState = {
  tasks: [],
};

const store = new Store(initialState);

```

### Dispatching Actions

Actions are dispatched to the store to add, update, or delete tasks. Each action requires a `type` and a `payload`.

#### Adding a Task

```javascript
store.dispatch({
  type: 'ADD_TASK',
  payload: {
    id: '1',
    title: 'Learn TypeScript',
    description: 'Start with the basics of TypeScript',
    completed: false,
  },
});

```

#### Updating a Task

```javascript
store.dispatch({
  type: 'UPDATE_TASK',
  payload: {
    id: '1',
    title: 'Learn TypeScript',
    description: 'Dive deeper into interfaces and types',
    completed: true,
  },
});

```

#### Deleting a Task

```javascript
store.dispatch({
  type: 'DELETE_TASK',
  payload: {
    id: '1',
  },
});

```

### Subscribing to State Changes

To react to state changes, subscribe to the store with a listener function. This function will be called every time the state is updated.

```javascript
const unsubscribe = store.subscribe(() => {
  console.log('State has changed:', store.getState());
});

```

### Unsubscribing

To stop listening to state changes, use the function returned by `subscribe`.

```javascript
unsubscribe();

```

## Examples

Here's a simple example showing how to initialize the store, add a task, and subscribe to state changes:

&nbsp;

```javascript
import { Store } from 'ManageTypeTasks-cb';

// Initial state
const store = new Store({ tasks: [] });

// Subscribe to state changes
store.subscribe(() => console.log(store.getState()));

// Add a task
store.dispatch({
  type: 'ADD_TASK',
  payload: {
    id: '1',
    title: 'Complete the documentation',
    description: 'Ensure the library is well documented',
    completed: false,
  },
});

```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBQXBwTWFuYWdtZW50TGlicmFyeSUzQSUzQUNBQmxhbms=" repo-name="AppManagmentLibrary"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

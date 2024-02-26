# Task Management Library

A lightweight, efficient, and user-friendly library for state management in task management applications, meticulously crafted with TypeScript.

## Features 🚀

- **TypeScript Support**: Harness the power of TypeScript for enhanced type safety and a superior developer experience.
- **Simplified State Management**: Streamline the addition, updating, and deletion of tasks with minimal configuration.
- **Reactive UI Updates**: Effortlessly synchronize your UI with state changes using a straightforward subscription model.
- **Persistent Storage Integration**: Seamlessly maintain your tasks between sessions with built-in LocalStorage support.

## Getting Started 🌟

### Installation

Install via npm:

```bash
npm install ManageTypeTasks-cb
```


## Quick Start

Import the Library

```javascript
import { Store } from 'ManageTypeTasks-cb';
```

Initialize the Store
To create a new store with an initial state, use the Store class constructor:

```javascript
import { Store } from 'ManageTypeTasks-cb';

const initialState = {
  tasks: [],
};

const store = new Store(initialState);
```


## Dispatching Actions

Actions are dispatched to the store to add, update, or delete tasks. Each action requires a type and a payload.

### Adding a Task
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

### Updating a Task
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

### Deleting a Task
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

To stop listening to state changes, use the function returned by subscribe.

```javascript
unsubscribe();
```

## Example

Here's a simple example showing how to initialize the store, add a task, and subscribe to state changes:

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





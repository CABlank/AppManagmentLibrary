Task Management Library

A lightweight, efficient, and easy-to-use library for state management in task management applications, built with TypeScript.
Features

    TypeScript Support: Take advantage of TypeScript for better type safety and developer experience.
    Easy State Management: Simplify the addition, update, and deletion of tasks with minimal setup.
    Reactive Updates: Automatically update your UI in response to state changes with a simple subscription model.
    LocalStorage Integration: Persist your tasks between sessions effortlessly.

Getting Started
Installation

To use the Task Management Library in your project, install it via npm:

sh

npm install your-task-management-library-name

Or using yarn:

sh

yarn add your-task-management-library-name

Usage

    Import the Library

    typescript

import { Store } from 'your-task-management-library-name';

Initialize the Store

typescript

const initialState = { tasks: [] };
const store = new Store(initialState);

Dispatch Actions

typescript

// Add a task
store.dispatch({
  type: 'ADD_TASK',
  payload: { id: '1', title: 'Learn TypeScript', completed: false },
});

// Update a task
store.dispatch({
  type: 'UPDATE_TASK',
  payload: { id: '1', completed: true },
});

// Delete a task
store.dispatch({
  type: 'DELETE_TASK',
  payload: { id: '1' },
});

Subscribe to State Changes

typescript

store.subscribe(() => console.log(store.getState()));
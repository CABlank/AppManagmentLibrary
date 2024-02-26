import { Store, addTask, updateTask, deleteTask, createDefaultStore } from '../src/index';
import { Task } from '../src/models/Task';

// Demonstrate creating a new store instance
const store = createDefaultStore();

// Example task
const exampleTask: Task = {
  id: '1',
  title: 'Learn TypeScript',
  description: 'Read TypeScript documentation and practice examples.',
  completed: false
};

// Adding a task
store.dispatch(addTask(exampleTask));
console.log('After adding a task:', store.getState());

// Updating a task to mark it as completed
const updatedTask = { ...exampleTask, completed: true };
store.dispatch(updateTask(updatedTask));
console.log('After updating a task:', store.getState());

// Dispatch an action to delete the task
store.dispatch({ type: 'DELETE_TASK', payload: { id: exampleTask.id } });
console.log('After deleting a task:', store.getState());

// Updating a task to mark it as completed
const updatedTask2 = { ...exampleTask, description: "done" };
store.dispatch(updateTask(updatedTask2));
console.log('After updating a task:', store.getState());


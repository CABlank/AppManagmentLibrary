// Import core functionalities from your library
import { Store } from './core/Store';
import { addTask, updateTask, deleteTask } from './core/Actions';
import { AppState } from './models/AppState';
import { Task } from './models/Task';


// Optionally, you can also create and export convenience functions or objects
// that simplify the usage of your library. For example, a function to initialize
// the store with default values or a pre-configured store instance.

// Export the core functionalities
export { Store, addTask, updateTask, deleteTask, Task, AppState };

// If you have utility functions or other helpers that should be public,
// import and export them here as well.

// Example utility function (adjust according to your library's functionality)
export function createDefaultStore(): Store {
  const initialState: AppState = { tasks: [] }; // Adjust initial state as needed
  return new Store(initialState);
}

// Any other public-facing parts of your library should be exported here.

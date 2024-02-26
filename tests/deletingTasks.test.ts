import { Store } from '../src/core/Store';
import { updateTask } from '../src/core/Actions';
import { Task } from '../src/models/Task';

let store: Store;

beforeEach(() => {
  store = new Store({ tasks: [] }); // Reset the store before each test
});

test('successfully deletes a task', () => {
    const taskToDelete = { id: '1', title: 'Delete Me', description: 'This task should be deleted', completed: false };
    store.dispatch({ type: 'ADD_TASK', payload: taskToDelete });
  
    // Ensure the task is added
    expect(store.getState().tasks).toContainEqual(taskToDelete);
  
    // Delete the task
    store.dispatch({ type: 'DELETE_TASK', payload: { id: '1' } });
  
    // Ensure the task is deleted
    expect(store.getState().tasks).not.toContainEqual(taskToDelete);
    expect(store.getState().tasks.length).toBe(0);
});
  

test('attempts to delete a non-existent task', () => {
    // Attempt to delete a task that was never added
    store.dispatch({ type: 'DELETE_TASK', payload: { id: '999' } });
  
    // Expect the state to remain unchanged
    expect(store.getState().tasks.length).toBe(0);
});
  

test('deletes multiple tasks sequentially', () => {
    const tasksToAdd = [
      { id: '1', title: 'First Task', description: 'Delete me first', completed: false },
      { id: '2', title: 'Second Task', description: 'Delete me second', completed: false }
    ];
    
    // Add tasks to the state
    tasksToAdd.forEach(task => store.dispatch({ type: 'ADD_TASK', payload: task }));
    
    // Delete the first task
    store.dispatch({ type: 'DELETE_TASK', payload: { id: '1' } });
    expect(store.getState().tasks.length).toBe(1);
    expect(store.getState().tasks.find(task => task.id === '1')).toBeUndefined();
  
    // Delete the second task
    store.dispatch({ type: 'DELETE_TASK', payload: { id: '2' } });
    expect(store.getState().tasks.length).toBe(0);
  });
  
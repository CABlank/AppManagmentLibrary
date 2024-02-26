import { Store } from '../src/core/Store';
import { updateTask } from '../src/core/Actions';
import { Task } from '../src/models/Task';

let store: Store;

beforeEach(() => {
  store = new Store({ tasks: [] }); // Reset the store before each test
});
  

test('successfully updates a task', () => {
    const originalTask = { id: '1', title: 'Original Title', description: 'Original Description', completed: false };
    store.dispatch({ type: 'ADD_TASK', payload: originalTask });
  
    const updatedTask = { ...originalTask, title: 'Updated Title', description: 'Updated Description', completed: true };
    store.dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
  
    const resultTask = store.getState().tasks.find(task => task.id === '1');
    expect(resultTask).toEqual(updatedTask);
});
  

test('attempts to update a non-existent task', () => {
    const nonExistentUpdate = { id: '999', title: 'Non-existent', description: 'This task does not exist', completed: true };
    store.dispatch({ type: 'UPDATE_TASK', payload: nonExistentUpdate });
  
    // Expect the state not to have changed
    expect(store.getState().tasks.length).toBe(0);
});
  
test('partially updates a task', () => {
    const taskToAdd = { id: '2', title: 'Partial Update Task', description: 'Test partial updates', completed: false };
    store.dispatch({ type: 'ADD_TASK', payload: taskToAdd });
  
    // Update only the 'completed' status
    const partialUpdate = { id: '2', completed: true };
    store.dispatch({ type: 'UPDATE_TASK', payload: partialUpdate });
  
    const updatedTask = store.getState().tasks.find(task => task.id === '2');
});
  
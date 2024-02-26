import { Store } from '../src/core/Store';
import { addTask } from '../src/core/Actions';
import { Task } from '../src/models/Task';

let store: Store;

beforeEach(() => {
  store = new Store({ tasks: [] }); // Reset the store before each test
});


test('adds a large number of tasks', () => {
    const largeNumberOfTasks: Task[] = Array.from({ length: 1000 }, (_, i) => ({
      id: String(i),
      title: `Task ${i}`,
      description: `Description for task ${i}`,
      completed: false,
    }));
  
    largeNumberOfTasks.forEach(task => store.dispatch({ type: 'ADD_TASK', payload: task }));
  
    expect(store.getState().tasks.length).toBe(1000);
    expect(store.getState().tasks[999].title).toBe('Task 999');
});


test('handles adding tasks with duplicate IDs gracefully', () => {
    const initialTask: Task = {
      id: 'duplicate',
      title: 'Initial Task',
      description: 'This task has a duplicate ID',
      completed: false,
    };
  
    const duplicateTask: Task = {
      id: 'duplicate',
      title: 'Duplicate Task',
      description: 'This task shares an ID with another task',
      completed: false,
    };
  
    store.dispatch({ type: 'ADD_TASK', payload: initialTask });
    store.dispatch({ type: 'ADD_TASK', payload: duplicateTask });
  
    // Depending on your implementation, you might expect the duplicate not to be added,
    // or for the original task to be replaced by the duplicate.
    expect(store.getState().tasks.length).toBe(1);
    // Add additional assertions based on expected behavior
});
  
  
test('updates task title and description', () => {
    const originalTask: Task = { id: '1', title: 'Original Title', description: 'Original Description', completed: false };
    store.dispatch({ type: 'ADD_TASK', payload: originalTask });
  
    const updatedTask: Task = { ...originalTask, title: 'Updated Title', description: 'Updated Description' };
    store.dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
  
    const currentTasks = store.getState().tasks;
    expect(currentTasks.length).toBe(1);
    expect(currentTasks[0]).toEqual(updatedTask);
});

test('deletes a task', () => {
    const taskToDelete: Task = { id: '1', title: 'Task to Delete', description: 'This task will be deleted', completed: false };
    store.dispatch({ type: 'ADD_TASK', payload: taskToDelete });
  
    // Ensure task is added
    expect(store.getState().tasks).toContainEqual(taskToDelete);
  
    // Delete the task
    store.dispatch({ type: 'DELETE_TASK', payload: { id: taskToDelete.id } });
  
    // Ensure task is deleted
    expect(store.getState().tasks).not.toContainEqual(taskToDelete);
    expect(store.getState().tasks.length).toBe(0);
});
  
  
test('attempts to delete a non-existent task', () => {
    const nonExistentTaskId = 'non-existent-id';
    store.dispatch({ type: 'DELETE_TASK', payload: { id: nonExistentTaskId } });
  
    // Assuming your initial state has no tasks, it should remain empty
    expect(store.getState().tasks.length).toBe(0);
});
  
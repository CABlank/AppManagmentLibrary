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

test('adds a task with a wide range of characters in properties', () => {
    const complexCharacterTask: Task = {
      id: 'special-char-task',
      title: 'Special 🚀 Task ~!@#$%^&*()_+=-`',
      description: 'A task with a mix of characters: 1234567890 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ ~!@#$%^&*()_+-=[]\\;\',./{}|:"<>?',
      completed: false
    };
  
    store.dispatch({ type: 'ADD_TASK', payload: complexCharacterTask });
  
    expect(store.getState().tasks).toContainEqual(complexCharacterTask);
  });
  
test('handles rapid succession of adding tasks', async () => {
    const rapidTasks: Task[] = Array.from({ length: 50 }, (_, i) => ({
      id: `rapid-${i}`,
      title: `Rapid Task ${i}`,
      description: `Quickly added task ${i}`,
      completed: i % 2 === 0,
    }));
  
    rapidTasks.forEach(task => store.dispatch({ type: 'ADD_TASK', payload: task }));
  
    expect(store.getState().tasks.length).toBe(50);
    // Verify some key tasks to ensure they were added correctly
    expect(store.getState().tasks[0].id).toBe('rapid-0');
    expect(store.getState().tasks[49].id).toBe('rapid-49');
  });
  

  test('adds a task with missing and extra properties', () => {
    const incompleteTask: any = { // Using 'any' to bypass TypeScript checks for demonstration purposes
      id: 'incomplete-task',
      title: 'Incomplete Task',
      // 'description' is intentionally left out to simulate an incomplete task object
      completed: false,
      extraProperty: 'This should be ignored or handled gracefully' // Extra property not defined in Task model
    };
  
    store.dispatch({ type: 'ADD_TASK', payload: incompleteTask });
  
    // Verify the task is added without 'description' and 'extraProperty' is ignored
    const addedTask = store.getState().tasks.find(task => task.id === incompleteTask.id);
    expect(addedTask).toBeDefined();
    expect(addedTask?.description).toBeUndefined(); // Assuming your logic allows adding tasks without a description
    expect((addedTask as any).extraProperty).toBeUndefined(); // Ensuring extra properties are not added to the state
  });
  
import { addTask } from '../src/core/Actions';
import { Task } from '../src/models/Task';

describe('Actions', () => {
    it('should create an action to add a task', () => {
        const task: Task = { id: '1', title: 'Test Task', description: 'This is a test', completed: false };
        const expectedAction = {
            type: 'ADD_TASK',
            payload: task,
        };
        expect(addTask(task)).toEqual(expectedAction);
    });
}); // Add a closing curly brace at the end of the test case

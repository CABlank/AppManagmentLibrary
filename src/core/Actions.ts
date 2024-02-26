import {Task} from '../models/Task';


// Action Types
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = (task: Task) => ({
    type: ADD_TASK,
    payload: task,
});

export const updateTask = (task: Task) => ({
    type: UPDATE_TASK,
    payload: task,
});

export const deleteTask = (taskId: string) => ({
    type: DELETE_TASK,
    payload: taskId,
});

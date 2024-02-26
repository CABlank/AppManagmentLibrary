"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.DELETE_TASK = exports.UPDATE_TASK = exports.ADD_TASK = void 0;
// Action Types
exports.ADD_TASK = 'ADD_TASK';
exports.UPDATE_TASK = 'UPDATE_TASK';
exports.DELETE_TASK = 'DELETE_TASK';
// Action Creators
var addTask = function (task) { return ({
    type: exports.ADD_TASK,
    payload: task,
}); };
exports.addTask = addTask;
var updateTask = function (task) { return ({
    type: exports.UPDATE_TASK,
    payload: task,
}); };
exports.updateTask = updateTask;
var deleteTask = function (taskId) { return ({
    type: exports.DELETE_TASK,
    payload: taskId,
}); };
exports.deleteTask = deleteTask;

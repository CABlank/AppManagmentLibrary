"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
// Demonstrate creating a new store instance
var store = (0, index_1.createDefaultStore)();
// Example task
var exampleTask = {
    id: '1',
    title: 'Learn TypeScript',
    description: 'Read TypeScript documentation and practice examples.',
    completed: false
};
// Adding a task
store.dispatch((0, index_1.addTask)(exampleTask));
console.log('After adding a task:', store.getState());
// Updating a task to mark it as completed
var updatedTask = __assign(__assign({}, exampleTask), { completed: true });
store.dispatch((0, index_1.updateTask)(updatedTask));
console.log('After updating a task:', store.getState());
// Dispatch an action to delete the task
store.dispatch({ type: 'DELETE_TASK', payload: { id: exampleTask.id } });
console.log('After deleting a task:', store.getState());
// Updating a task to mark it as completed
var updatedTask2 = __assign(__assign({}, exampleTask), { description: "done" });
store.dispatch((0, index_1.updateTask)(updatedTask2));
console.log('After updating a task:', store.getState());

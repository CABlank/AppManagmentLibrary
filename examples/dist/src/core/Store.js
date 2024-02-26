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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
function isTask(payload) {
    return (payload &&
        typeof payload === 'object' &&
        'id' in payload &&
        'title' in payload &&
        'completed' in payload);
}
var Store = /** @class */ (function () {
    function Store(initialState) {
        this.listeners = [];
        this.state = initialState;
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.dispatch = function (action) {
        var _a, _b, _c, _d, _e, _f;
        switch (action.type) {
            case 'ADD_TASK': {
                if (!isTask(action.payload)) {
                    console.warn('ADD_TASK action received without a valid payload.');
                    return;
                }
                var taskExists = this.state.tasks.some(function (task) { var _a; return task.id === ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id); });
                if (!taskExists) {
                    var newTask = {
                        // Directly access properties since isTask ensures their existence
                        id: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id,
                        title: (_b = action.payload) === null || _b === void 0 ? void 0 : _b.title,
                        description: (_c = action.payload) === null || _c === void 0 ? void 0 : _c.description, // This can be undefined if not provided, which is fine
                        completed: (_e = (_d = action.payload) === null || _d === void 0 ? void 0 : _d.completed) !== null && _e !== void 0 ? _e : false,
                    };
                    this.state = __assign(__assign({}, this.state), { tasks: __spreadArray(__spreadArray([], this.state.tasks, true), [newTask], false) });
                }
                break;
            }
            case 'UPDATE_TASK': {
                // Directly access properties since TypeScript understands action.payload to be Task here
                var taskExists = this.state.tasks.some(function (task) { var _a, _b; return task.id === ((_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ''); });
                if (!taskExists) {
                    console.warn("Task with ID ".concat((_f = action.payload) === null || _f === void 0 ? void 0 : _f.id, " not found."));
                    return;
                }
                this.state = __assign(__assign({}, this.state), { tasks: this.state.tasks.map(function (task) { var _a; return task.id === ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) ? __assign(__assign({}, task), action.payload) : task; }) });
                break;
            }
            case 'DELETE_TASK': {
                // Directly filter out the task without checking `taskExists` since filtering inherently handles "not found" cases
                this.state = __assign(__assign({}, this.state), { tasks: this.state.tasks.filter(function (task) { var _a, _b; return task.id !== ((_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ''); }) });
                break;
            }
            default:
                // Optionally handle unknown action types
                break;
        }
        // Notify all listeners about the state update
        this.listeners.forEach(function (listener) { return listener(); });
    };
    Store.prototype.updateState = function (newState) {
        this.state = newState;
        this.listeners.forEach(function (listener) { return listener(); });
    };
    Store.prototype.subscribe = function (listener) {
        var _this = this;
        this.listeners.push(listener);
        return function () {
            _this.listeners = _this.listeners.filter(function (l) { return l !== listener; });
        };
    };
    return Store;
}());
exports.Store = Store;

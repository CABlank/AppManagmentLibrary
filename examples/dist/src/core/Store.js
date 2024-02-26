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
var Store = /** @class */ (function () {
    function Store(initialState) {
        this.listeners = [];
        this.state = initialState;
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.dispatch = function (action) {
        var _a;
        switch (action.type) {
            case 'ADD_TASK':
                // Directly appending to tasks array
                this.state = __assign(__assign({}, this.state), { tasks: __spreadArray(__spreadArray([], this.state.tasks, true), [action.payload], false) });
                break;
            case 'UPDATE_TASK':
                var taskExists = this.state.tasks.some(function (task) { var _a; return task.id === ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id); });
                if (!taskExists) {
                    console.warn("Task with ID ".concat((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id, " not found."));
                    return; // Exit the function early
                }
                this.state = __assign(__assign({}, this.state), { tasks: this.state.tasks.map(function (task) { var _a; return task.id === ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) ? __assign(__assign({}, task), action.payload) : task; }) });
                break;
            case 'DELETE_TASK':
                // Filtering out the task to delete
                this.state = __assign(__assign({}, this.state), { tasks: this.state.tasks.filter(function (task) { var _a, _b; return task.id !== ((_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ''); }) });
                break;
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

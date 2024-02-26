"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultStore = exports.deleteTask = exports.updateTask = exports.addTask = exports.Store = void 0;
// Import core functionalities from your library
var Store_1 = require("./core/Store");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return Store_1.Store; } });
var Actions_1 = require("./core/Actions");
Object.defineProperty(exports, "addTask", { enumerable: true, get: function () { return Actions_1.addTask; } });
Object.defineProperty(exports, "updateTask", { enumerable: true, get: function () { return Actions_1.updateTask; } });
Object.defineProperty(exports, "deleteTask", { enumerable: true, get: function () { return Actions_1.deleteTask; } });
// If you have utility functions or other helpers that should be public,
// import and export them here as well.
// Example utility function (adjust according to your library's functionality)
function createDefaultStore() {
    var initialState = { tasks: [] }; // Adjust initial state as needed
    return new Store_1.Store(initialState);
}
exports.createDefaultStore = createDefaultStore;
// Any other public-facing parts of your library should be exported here.

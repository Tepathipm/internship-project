"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let genId = 0;
console.log(app_1.task);
function autoGenId() {
    if (genId < app_1.task[app_1.task.length - 1].id) {
        genId = app_1.task[app_1.task.length - 1].id;
        genId++;
    }
    return genId;
}
function getById(id, ...task) {
    let findById = task.filter((e) => e.id == id);
    return findById;
}
function getByPriority(id, ...task) {
    let findById = task.filter((e) => e.priority == id);
    return findById;
}
function addTodo(todo, priority) {
    if ((priority <= 3 && priority >= 1) && (todo !== undefined && todo !== null) && todo.trim() !== "") {
        const todoListFormat = { id: autoGenId(), todo: todo, priority: priority };
        app_1.task.push(todoListFormat);
        return `success id : ${genId}`;
    }
    else {
        return `todo cannot be null and priority must be between 1-3`;
    }
}
function deleteById(id, ...task) {
    task = task.filter((e) => e.id !== id);
    return `delete id ${id} success`;
}
exports.default = { autoGenId, getById, getByPriority, addTodo, deleteById };

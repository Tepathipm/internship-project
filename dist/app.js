"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const functionGen_1 = __importDefault(require("./functionGen"));
let app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
let port = 3340;
exports.task = [
    {
        "id": 1,
        "todo": "test1",
        "priority": 1
    },
    {
        "id": 2,
        "todo": "test2",
        "priority": 2
    },
    {
        "id": 3,
        "todo": "test3",
        "priority": 3
    },
    {
        "id": 4,
        "todo": "test4",
        "priority": 3
    },
    {
        "id": 5,
        "todo": "test5",
        "priority": 2
    },
    {
        "id": 6,
        "todo": "test6",
        "priority": 1
    }
];
//addTodo
app.post("/addTodo", (req, res) => {
    const { todo, priority } = req.body;
    if ((priority <= 3 && priority >= 1) && (todo !== undefined && todo !== null) && todo.trim() !== "") {
        const todoListFormat = { id: functionGen_1.default.autoGenId(), todo: todo, priority: priority };
        exports.task.push(todoListFormat);
        res.json(exports.task);
    }
    else {
        res.json(`todo cannot be null and priority must between 1-3`);
    }
});
//deleteById
app.delete("/deleteTodo/:id", (req, res) => {
    const id = parseInt(req.params.id);
    exports.task = exports.task.filter((e) => e.id !== id);
    res.json(`delete id ${id} success`);
});
//getByPriority
app.get("/getPriority/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let findById = exports.task.filter((e) => e.priority == id);
    res.json(findById);
});
//getById
app.get("/getTodo/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let findById = exports.task.filter((e) => e.id == id);
    res.json(findById);
});
//getAll
app.get("/getTodo", (req, res) => {
    res.json(exports.task);
});
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
exports.default = { app, task: exports.task };

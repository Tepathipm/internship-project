"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functionGen_1 = __importDefault(require("../functionGen"));
// Replace 'yourFunctionsFile' with the actual file name
// Mock data for testing
const task = [
    { id: 1, todo: 'Task 1', priority: 1 },
    { id: 2, todo: 'Task 2', priority: 2 },
    { id: 3, todo: 'Task 3', priority: 3 }
];
// Unit tests for getById function
describe('get Todo By ID', () => {
    test('add id 2 to show todo 2', () => {
        expect(functionGen_1.default.getById(2, ...task)).toBe([{ id: 2, todo: 'Task 2', priority: 2 }]);
    });
});

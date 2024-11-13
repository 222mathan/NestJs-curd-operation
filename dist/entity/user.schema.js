"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    dob: Date,
});
//# sourceMappingURL=user.schema.js.map
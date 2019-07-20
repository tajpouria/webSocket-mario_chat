"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
var _a = process.env, _b = _a.PORT, PORT = _b === void 0 ? 4000 : _b, _c = _a.NODE_ENV, NODE_ENV = _c === void 0 ? 'development' : _c;
app.use(express_1.default.static('src/public'));
var server = app.listen(PORT, function () {
    console.log("Listening on Port " + PORT + "...");
});
socket_io_1.default(server).on('connection', function (socket) {
    console.log(socket);
});

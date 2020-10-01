"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const network_connection_exception_1 = __importDefault(require("./network.connection.exception"));
function ThrowNetworkConnectionException(uri) {
    throw new network_connection_exception_1.default(uri);
}
exports.default = ThrowNetworkConnectionException;

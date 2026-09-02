"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encrypt = void 0;
const bcrypt = require("bcrypt");
const encrypt = async (password, salt = 10) => {
    return await bcrypt.hash(password, salt);
};
exports.encrypt = encrypt;
const compare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.compare = compare;
//# sourceMappingURL=bcrypt.js.map
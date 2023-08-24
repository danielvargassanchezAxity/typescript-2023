"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
var System;
(function (System) {
    class Output {
        print(message) {
            console.log(message);
        }
    }
    System.out = new Output();
})(System || (exports.System = System = {}));

System.register("test1/test2/test4/test", [], function (exports_1, context_1) {
    "use strict";
    var nametest;
    var __moduleName = context_1 && context_1.id;
    function printMyName(name) {
        console.log(nametest);
        console.log(`Hola que tal mi nombre es ${name}`);
    }
    exports_1("printMyName", printMyName);
    return {
        setters: [],
        execute: function () {
            nametest = "daniel";
        }
    };
});
System.register("index", ["test1/test2/test4/test"], function (exports_2, context_2) {
    "use strict";
    var test_1, result, callback, testBoolean;
    var __moduleName = context_2 && context_2.id;
    // funciones
    function sayHi() {
        console.log("Hi");
    }
    function addTwoNumber(number1, number2) {
        console.log(number1 + number2);
    }
    function addTwoNumbersWithReturn(number1, number2) {
        return number1 + number2;
    }
    function test(callback, callback2, validation) {
        if (validation) {
            callback('daniel');
        }
    }
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            }
        ],
        execute: function () {
            result = addTwoNumbersWithReturn(1, 3);
            // arrow function
            callback = (name) => {
                console.log(`Hola que tal mi nombre es ${name}`);
            };
            testBoolean = (validation) => {
                return validation;
            };
            test(callback, () => { console.log("no se cumplio la validacion"); }, testBoolean(false));
            test_1.printMyName("daniel");
        }
    };
});

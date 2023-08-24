"use strict";
function concat() {
    const cars = ["Volvo", "Mazda", "Mercedes", "Nissan"];
    const newCars = ["Jab", "Kia"];
    const newCompleteCars = cars.concat(newCars);
    console.log(newCompleteCars);
}
function every() {
    const products = [
        {
            id: 10,
            name: "Laptop",
            quantity: 0,
            total: 120.50
        },
        {
            id: 34,
            name: "Mouse",
            quantity: 10,
            total: 20
        },
        {
            id: 12,
            name: "Teclado",
            quantity: 10,
            total: 10
        }
    ];
    const isSomeEmptyProduct = products.every(x => x.quantity > 0);
    console.log(isSomeEmptyProduct);
}
function testFill() {
    const fruits = ["mango", "platano", "manzana", "Pera"];
    const fruitsCopy = [...fruits];
    fruitsCopy.fill("kiwi", 0, 3);
    console.log(fruits);
    console.log(fruitsCopy);
}
function testFilter() {
    const example = [100, 500, 10, 50, 45, 78, 0, -1, -50];
    const result = example.filter(x => x > 0);
    console.log(example);
    console.log(result);
}
function filter(callback, test) {
    const returnList = [];
    test.forEach((item) => {
        if (callback(item)) {
            returnList.push(item);
        }
    });
    return returnList;
}
function find() {
    const data = ["test", "2201", "2132", "21", "2", "1", "100"];
    const result = data.find(x => x === "test");
    console.log(result);
}
function findIndex() {
    const cars = ["Volvo", "Mazda", "Mercedes", "Nissan"];
    const result = cars.findIndex(x => x === "Volvo");
    console.log(result);
}
function testForeach() {
    const numbersList = [1, 2, 3, 4, 5, 100, 20, 35, 90];
    numbersList.push(1000);
    numbersList.filter(x => x > 5);
    numbersList.forEach((value, index) => {
        console.log(index);
        numbersList[index] = value * 2;
    });
    console.log(numbersList);
}
class Test {
    constructor(value) {
        this.value = value;
    }
}
function includes() {
    const firstValue = new Test(1);
    const testList = [
        firstValue,
        new Test(2),
        new Test(3)
    ];
    console.log(testList.includes(firstValue));
}
every();
function join() {
    const cars = ["BMW", "Nissan", "Mercedez"];
    console.log(cars.join("-"));
    const users = [
        {
            id: 0,
            name: "Daniel"
        },
        {
            id: 1,
            name: "Carlos"
        },
        {
            id: 2,
            name: "Ana"
        }
    ];
    console.log(users.map(x => x.name).join(","));
}
function map() {
    const users = [
        {
            id: 0,
            name: "Daniel"
        },
        {
            id: 1,
            name: "Carlos"
        },
        {
            id: 2,
            name: "Ana"
        }
    ];
    const ids = users.map(user => {
        return {
            userId: user.id,
            userName: user.name + " test"
        };
    });
    console.log(ids);
}
function reduce() {
    const products = [
        {
            id: 10,
            name: "Laptop",
            quantity: 2,
            total: 120.50
        },
        {
            id: 34,
            name: "Mouse",
            quantity: 1,
            total: 20
        },
        {
            id: 12,
            name: "Teclado",
            quantity: 10,
            total: 10
        }
    ];
    const completeNames = products.reduce((previuesValue, user) => `${previuesValue},${user.name}`, 'Comenzando a concatenar');
    const total = products.reduce((total, product) => total + (product.quantity * product.total), 1000);
    console.log(completeNames);
    console.log(total);
}
function some() {
    const products = [
        {
            id: 10,
            name: "Laptop",
            quantity: 0,
            total: 120.50
        },
        {
            id: 34,
            name: "Mouse",
            quantity: 0,
            total: 20
        },
        {
            id: 12,
            name: "Teclado",
            quantity: 10,
            total: 10
        }
    ];
    const someProductIsEmpty = products.some(x => x.quantity === 0);
    console.log(someProductIsEmpty);
}

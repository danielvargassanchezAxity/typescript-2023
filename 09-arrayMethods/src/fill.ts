function testFill() {
    const fruits = ["mango", "platano","manzana","Pera"]; 
    const fruitsCopy = [...fruits]; //spread operator 
    fruitsCopy.fill("kiwi", 0, 3);
    console.log(fruits);
    console.log(fruitsCopy);
}
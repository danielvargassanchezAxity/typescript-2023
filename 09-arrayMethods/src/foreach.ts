function testForeach() {
    const numbersList = [1, 2, 3, 4, 5, 100, 20, 35, 90];
    numbersList.push(1000); // [1, 2, 3, 4, 5, 100, 20, 35, 90, 1000]
    numbersList.filter(x => x> 5);

    numbersList.forEach((value, index) => {
        console.log(index)
        numbersList[index] = value * 2;
    });
    console.log(numbersList);
}
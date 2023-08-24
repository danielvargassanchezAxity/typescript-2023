function testFilter() {
    const example = [100, 500, 10, 50, 45, 78, 0, -1, -50];
    const result = example.filter(x => x > 0);

    console.log(example);
    console.log(result);
}


function filter(callback: (item: number) => boolean, test: number[]): number[] {
    const returnList: number[] = [];
    test.forEach((item) => {
        if (callback(item)) {
            returnList.push(item);
        }
    })
    return returnList;
}
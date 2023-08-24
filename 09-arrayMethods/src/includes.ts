class Test {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}

function includes() {
    const firstValue = new Test(1);

    const testList: Test[] = [
        firstValue,
        new Test(2),
        new Test(3)
    ];
    console.log(testList.includes(firstValue));
}


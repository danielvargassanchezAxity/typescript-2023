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
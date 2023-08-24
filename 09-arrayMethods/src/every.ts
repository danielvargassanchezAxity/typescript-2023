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
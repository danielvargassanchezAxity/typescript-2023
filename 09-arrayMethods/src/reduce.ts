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
    
    const completeNames: string = products.reduce((previuesValue, user)=> `${previuesValue},${user.name}`, 'Comenzando a concatenar');
    const total: number = products.reduce((total, product) => total+ (product.quantity * product.total), 1000);
    console.log(completeNames);
    console.log(total);
}
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
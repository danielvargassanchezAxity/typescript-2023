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
        }
    });
    console.log(ids);
}
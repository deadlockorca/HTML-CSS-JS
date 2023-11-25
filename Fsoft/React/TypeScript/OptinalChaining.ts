let user = {
    name: "Doanh",
    age: 25,
    address: {
        street: "Duy Tan",
        ward: "Duy Tan",
    },
};
function checkUser(user: any) {
    user.address = undefined;
    return user;
}

user = checkUser(user);
console.log(user.address?.street);

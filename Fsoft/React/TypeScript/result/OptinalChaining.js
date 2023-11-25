"use strict";
var _a;
var user = {
    name: "Doanh",
    age: 25,
    address: {
        street: "Duy Tan",
        ward: "Duy Tan",
    },
};
function checkUser(user) {
    user.address = undefined;
    return user;
}
user = checkUser(user);
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.street);
//# sourceMappingURL=OptinalChaining.js.map
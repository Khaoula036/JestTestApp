const functions = {
    add: (num1, num2) => num1 + num2 ,
    //isNull: () => undefined
    isNull: () => null,
    checkValue: x => x ,
    createUser : () => {
        const user = { firstName : 'Brad'};
        user['lastName'] = 'Traversy';
        return user;
    }
};


// const functions = {
//    add: (num1, num2) => num1 + num2
// }

module.exports = functions; 
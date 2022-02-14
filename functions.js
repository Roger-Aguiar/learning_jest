const { default: axios } = require("axios");

const functions = {
    add: (number1, number2) => number1 + number2,
    subtract: (number1, number2) => number1 - number2,
    times: (number1, number2) => number1 * number2,
    divide: (number1, number2) => number1 / number2,

    createUser: () => {
        const user = {
            firstName: "Roger",
            lastName: "Aguiar",
            age: 35,
            job: "Software developer"
        }
        return user;
    },

    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'errors')
}

module.exports = functions;
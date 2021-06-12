module.exports = {
    add: (number1, number2) => {
        return parseInt(number1) + parseInt(number2);
    },
    subtract: (number1, number2) => {
        return parseInt(number1) - parseInt(number2);
    },
    multiply: (number1, number2) => {
        return parseInt(number1) * parseInt(number2);
    },
    divide: (number1, number2) => {
        return parseInt(number1) / parseInt(number2);
    },
    square: (number) => {
        return parseInt(number) * parseInt(number);
    },
    qube: (number) => {
        return parseInt(number) * parseInt(number) * parseInt(number);
    }
};
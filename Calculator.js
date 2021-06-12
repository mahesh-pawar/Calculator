module.exports = {
    add: (a, b) => {
        return parseInt(a) + parseInt(b);
    },
    subtract: (a, b) => {
        return parseInt(a) - parseInt(b);
    },
    multiply: (a, b) => {
        return parseInt(a) * parseInt(b);
    },
    divide: (a, b) => {
        return parseInt(a) / parseInt(b);
    },
    square: (a) => {
        return parseInt(a) * parseInt(a);
    },
    qube: (a) => {
        return parseInt(a) * parseInt(a) * parseInt(a);
    }
};
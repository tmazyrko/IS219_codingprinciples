const MathOperations = require('./operations/MathOperations');
const Calculation = require('./models/Calculation');

class Calculator {
    // Static methods can be called without instantiating, and are good for actions
    static Sum(a,b) {
        return new Calculation(a,b,"Sum");
    }
}

module.exports = Calculator;
//const MathOperations = require('./operations/MathOperations');
const Calculation = require('./models/Calculation');
const Sum = require('./operations/Sum')
const Difference = require('./operations/Difference')
const Product = require('./operations/Product')
const Quotient = require('./operations/Quotient')
const Power = require('./operations/Power')
const Root = require('./operations/Root')

class Calculator {
    // Static methods can be called without instantiating, and are good for actions
    static Sum(a,b) {
        return new Calculation(a,b,"Sum");
    }
}

module.exports = Calculator;
//const MathOperations = require('./operations/MathOperations');
const Calculation = require('./models/Calculation');
const Sum = require('./operations/Sum')
const Difference = require('./operations/Difference')
const Product = require('./operations/Product')
const Quotient = require('./operations/Quotient')
const Power = require('./operations/Power')
const Root = require('./operations/Root')

class Calculator {
    static Calculations = []

    // Static methods can be called without instantiating, and are good for actions
    static Sum(a,b) {
        let calculation = new Calculation(a, b, Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        let calculation = new Calculation(a, b, Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        let calculation = new Calculation(a, b, Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        let calculation = new Calculation(a, b, Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Power(a,b) {
        let calculation = new Calculation(a, b, Power);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Root(a,b) {
        let calculation = new Calculation(a, b, Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}

module.exports = Calculator;
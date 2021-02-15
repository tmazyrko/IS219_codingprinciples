const Calculation = require('../src/models/Calculation');
const Sum = require('../src/operations/Sum');
const Difference = require('../src/operations/Difference');
const Product = require('../src/operations/Product');
const Quotient = require('../src/operations/Quotient');
const Power = require('../src/operations/Power');
const Root = require('../src/operations/Quotient');

test('Create Calculation object', () => {
    // Tests the instantiation of the Calculation object
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1)
    expect(calculation.b).toBe(2)
    expect(calculation.op).toBe(op)
})

test('Test GetResults for Sum', () => {
    let op = Sum;
    let calculation = new Calculation(1, 2, op);
    expect(calculation.GetResults()).toBe(3);
})

test('Test GetResults for Difference', () => {
    let op = Difference;
    let calculation = new Calculation(1, 2, op);
    expect(calculation.GetResults()).toBe(-1);
})

test('Test GetResults for Product', () => {
    let op = Product;
    let calculation = new Calculation(1, 2, op);
    expect(calculation.GetResults()).toBe(2);
})

test('Test GetResults for Quotient', () => {
    let op = Quotient;
    let calculation = new Calculation(1, 2, op);
    expect(calculation.GetResults()).toBe(0.5);
})

test('Test GetResults for Power', () => {
    let op = Power;
    let calculation = new Calculation(2, 3, op);
    expect(calculation.GetResults()).toBe(8);
})

test('Test GetResults for Root', () => {
    let op = Root;
    let calculation = new Calculation(4, 2, op);
    expect(calculation.GetResults()).toBe(2);
})
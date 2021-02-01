const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    // Assigning the results of the calc sum method to an object, calculator returns an object
    let calc = Calculator.Sum(1,2);
    expect(calc.a).toBe(1)
    expect(calc.b).toBe(2)
    expect(calc.op).toBe("Sum")
    expect(calc.GetResults()).toBe(3);
});
const Calculation = require('../src/models/Calculation');

test('Create Calculation object', () => {
    // Tests the instantiation of the Calculation object
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1)
    expect(calculation.b).toBe(2)
    expect(calculation.op).toBe("Sum")
})

test('Test GetResults function', () => {
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.GetResults()).toBe(3);
})
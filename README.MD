[![Build Status](https://travis-ci.com/tmazyrko/IS219_calculator.svg?branch=master)](https://travis-ci.com/tmazyrko/IS219_calculator)
[![Coverage Status](https://coveralls.io/repos/github/tmazyrko/IS219_calculator/badge.svg?branch=master)](https://coveralls.io/github/tmazyrko/IS219_calculator?branch=master)


**<h1 align="center"> OOP (Object-Oriented Programming) </h1>** 


The 5 SOLID principles of programming are:

>  1 - Single Responsibility Principle
>  
>  2 - Open-Closed Principle
>  
>  3 - Liskov Substitution Principle
>  
>  4 - Interface Segregation Principle
>  
>  5 - Dependency Inversion Principle
  
<br>
  
**<h2> Single Responsibility Principle </h2>**

This principle is very similar to the UNIX ideology of "Do one thing, and do it well." In essence, every function should be written to do exactly one thing—it should have one clearly defined goal. 

To use the calculator as an example, the Sum function shows below is written in line with this principle.

~~~javascript
function Sum(a, b) {
    return a + b;
}
~~~

If we had one massive function that was capable of doing all four basic operations, things could get really messy really quick, making it difficult to find bugs and avoid errors. However, it's completely okay to have a function that executes the four basic operations by calling seperate functions for each operation like the Sum function above.

<br>

**<h2> Open-Closed Principle </h2>**

The open-closed principle calls for any modules to be open to extension, but closed to modification. This means that if another coder wanted to extend the behaviour of one of your modules, they would not need to modify your code and could instead use a preexisting function. An example of this principle can be seen in the Calculator class, where we can use the addOperation method to add one or more operations to the Calculations method.

~~~javascript
class Calculator {
  static Calculations = [];
  static addOperation(op) {
    Calculator.Calculations.push(op);
  }
}
~~~

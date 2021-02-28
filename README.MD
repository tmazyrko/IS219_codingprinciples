[![Build Status](https://travis-ci.com/tmazyrko/IS219_codingprinciples.svg?branch=master)](https://travis-ci.com/tmazyrko/IS219_codingprinciples)
[![Coverage Status](https://coveralls.io/repos/github/tmazyrko/IS219_codingprinciples/badge.svg?branch=master)](https://coveralls.io/github/tmazyrko/IS219_codingprinciples?branch=master)


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
  
**<h2> [S] Single Responsibility Principle </h2>**

This principle is very similar to the UNIX ideology of "Do one thing, and do it well." In essence, every function should be written to do exactly one thing—it should have one clearly defined goal. 

To use the calculator as an example, the Sum function shows below is written in line with this principle.

~~~javascript
function Sum(a, b) {
    return a + b;
}
~~~

If we had one massive function that was capable of doing all four basic operations, things could get really messy really quick, making it difficult to find bugs and avoid errors. However, it's completely okay to have a function that executes the four basic operations by calling seperate functions for each operation like the Sum function above.

<br>

**<h2> [O] Open-Closed Principle </h2>**

The open-closed principle calls for any modules to be open to extension, but closed to modification. This means that if another coder wanted to extend the behaviour of one of your modules, they would not need to modify your code and could instead use a preexisting function. An example of this principle can be seen in the Calculator class, where we can use the addOperation method to add one or more operations to the Calculations method.

~~~javascript
class Calculator {
  static Calculations = [];
  static addOperation(op) {
    Calculator.Calculations.push(op);
  }
}
~~~

<br>

**<h2> [L] Liskov Substitution Principle </h2>**

The Liskov Substitution Principle states that functions using pointers or references to base classes must be able to use objects of derived classes without knowing it.

While the name of this principle may seem daunting, the concept is rather simple, and can be summed up by this allegory:
"If it looks like a duck, quacks like a duck, but needs batteries - you probably need a better abstraction."

Still confused? Consider the following: in mathematics a Square is a Rectangle, but if you were to model this relationship in code with inheritance (making Square derive from Rectangle) then you would expect a Square to be usable anywhere you expect a Rectangle. Now imagine you had SetWidth and SetHeight functions in your Rectangle base class. This would seem perfectly logical for a Rectangle, but if your Rectangle reference pointed to a Square, then SetWidth and SetHeight would no longer make sense as setting one attribute would change the other to match it.

In this case, Square fails the Liskov Substitution test, and having Square inherit from Rectangle is a bad abstraction.

<br>

**<h2> [I] Interface Segregation </h2>**

To put it simply, Interface Segregation means avoiding creating bloated interfaces. Whenever you expose a module for outside use, it should only require the bare essentials to function, and any special behavior should be optional.

Let's go back to our Calculator example for the Open-Closed Principle. Imagine every time you wanted to add an operation to Calculations through the addOperation function, you also had to implement allowsNegativeNumbers for each operation. In that case, there should just be a default behavior that could optionally be modified.

<br>

**<h2> [D] Dependency Inversion Principle </h2>**

The Dependency Inversion Principle is also sometimes referred to as Dependency Injection or as Inversion of Controls, and is all about handing control over from the function itself to the caller of the function. We can apply this principle to our Calculator by examining how we pass operations to each new Calculation we create. Instead of passing in all possible math operations, we only pass the relevant operation through the constructor. Similarly, you could apply this principle to other programs by passing in only the functions you would use from an object, and not the entire object itself.

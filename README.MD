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

<br>

---

**<h1 align="center"> Software Design Patterns </h1>** 


Another important concept in software design is **design patterns**. These are typical solutions to commonly occuring problems - blueprints, in other words. There are three main types of design patters: creational patterns, structural patterns, and behavioral patterns. Creational patterns provide different ways of creating objects, increasing flexibility and reuse of existing code. Structural patters are used to assemble objects and classes into larger structures while keeping those structures flexible and efficient. Finally, behavioral patterns are those that are concerned with algorithms and the assignment of responsibilities between objects.

Here's an example of each type of pattern.

**<h2> Singleton (Creational) </h2>**

Singleton is a creational design pattern that ensures a class has only one instance, whilst providing a global access point for that instance. All implementations of this pattern have two common features: the default constructor is private to prevent other objects from using the `new` operator with the Singleton class, and a static creation method acts as a constructor. The static creation method calls the private constructor to create an object and saves it in a static field. Any calls to this method that follow return the cached object.

<br>

**<h2> Bridge (Structural) </h2>**

Bridge is a structural design pattern that splits a large class or set of closely related classes into two seperate hierarchies: abstraction and implementation. These seperate hierarchies can then be developed independently.

Here's a simple way to understand the problem this pattern solves: imagine you have a `Shape` class with two subclasses, `Circle` and `Square`. You plan to create `Black` and `White` shape subclasses to extend the class hierarchy to incorporate colors. Since there are already two subclasses (`Circle` and `Square`), you'll need to have four class combinations to cover each Shape and Color. Adding even more Shapes and Colors would grow the hierarchy exponentially. That's where the Bridge comes in.

The Bridge pattern solves this problem by extracting one of the dimensions (in this case, Color) into a separate class hierarchy. This means we can extract any color-related code into its own `Color` class with two subclasses: `Black` and `White`. The `Shape` class then gets a reference field pointing to one of the color objects, and that reference will act as a bridge between the `Shape` and `Color` classes. Now, adding new colors won't require altering the shape hierarchy, and vice versa.

<br>

**<h2> Template Method (Behavioral) </h2>**



<br>

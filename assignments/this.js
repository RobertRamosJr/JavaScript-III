/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when calling the value of "this" using global scope, "this" refers to the entire window/console. (don't do this) 
* 2. Implicit binding: this happens when the '.' notation is used to invoke a function. Whatever is to the left of the dot becomes the context for ```this``` in the function.
* 3. Explicit Binding: occurs when .call(), .apply(), or .bind() are used on a function.
* 4. New Binding: occurs when building new objects or when explicitly binding an existing function to the object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myLeftFunc () {
    console.log(this)
  }
  myLeftFunc()

// Principle 2

// code example for Implicit Binding
function myLeftFuncStrict () {
    'use strict'
    console.log(this)
  }
  myLeftFuncStrict()

// Principle 3

// code example for New Binding
let animal = {
  species: 'cat',
  name: 'Tom Cat',
  identify: function () {
    console.log(`${this.name} is a ${this.species}`)
  }
}
animal.identify()

// Principle 4

// code example for Explicit Binding
function Person(name) {
    this.name = name,
    this.greeting = function () {
      return `Hello, my name is ${this.name}`
    }
  }
  
  let Kent = new Person('Kent')
  console.log(Kent)
  console.log(Kent.greeting)

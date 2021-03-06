/*
Shorthand Properties and Names

helps to make objects more concise syntastical sugar
the example below shows the original code, and then the DRY version
/*if one of the objects was a method you can also shorthand it see line 14 & 26*/
*/
function formatMessage(name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now,
    save: function() {
      //save
    }
  }
}

function formatMessageDry(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now,
    save () {
      //save
    }
  }
}

/*
Computed Property Names

Allows you to have a piece of code that results in a single value
with Computed Property Names, you can use object literal notation
to assign the expression as a property on the object without having
to create it first.
*/
function objectify (key, value) {
  let obj = {}
  obj[key] = value
  return obj
}

objectify('name', 'Tyler') // { name: 'Tyler' }

//So the code above can now be rewritten like this.
function objectifyDry (key, value) {
  return {
    [key] : value
  }
}

objectifyDry('name', 'Paige')

/*
Template Literal or template strings

these are good for multi line strings this help to conconcatonate more efficiently
than escape charaters and quotes

say we had this code below:
*/
function makeGreeting (name, email, id) {
  return 'Hello, ' + name +
    '. We\'ve emailed you at ' + email +
    '. Your user id is "' + id + '".'
}
 //see how much cleaner template literals achieve the same thing?
 function makeGreetingDry (name, email, id) {
   return `Hello, ${name}. We've emailed you at ${email}. Your user id is "${id}".`
 }

 /*
 Arrow Functions

 Arrow functions are helpful because they are DRYer
 and they can be helpful when working with the this keyword
*/

// fn declaration
function add (x,y) {
  return x + y;
}

// fn expression
var add = function (x,y) {
  return x + y;
}

//if we wanted to create the same thing with arrow functions:
var add = function (x,y) {
  return x + y;
}

var add = (x,y) => {
  return x + y;
}

/*
Default parameters
default values for arguments incase none are provided when it is envoked,
ES6 Has a much cleaner way of doing this - because I learned this way I am just going to
show the appropriate way:
*/
function calculatePayment (price, salesTax = 0.05, discount = 0) { //entering default values
  // math function would go here
}


/*
Classes

If you’ve used arrow functions before, you know that they don’t have their own this keyword. Instead, the this keyword is bound lexically. That’s a fancy way of saying when you use the this keyword inside of an arrow function, things behave how you’d expect them to. Taking that knowledge and combining it with the “Class Fields” proposal, what if we swapped out the handleChange method for an arrow function? Seems a little weird but by doing this we’d get rid of the .bind issue altogether since, again, arrow functions bind this lexically.
*/
class Animal {
  eat() {}
  sleep = () => {}
}

// Is equivalent to

function Animal () {
  this.sleep = function () {}
}

Animal.prototype.eat = function () {}

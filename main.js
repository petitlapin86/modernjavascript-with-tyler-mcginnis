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

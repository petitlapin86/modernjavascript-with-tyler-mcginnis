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

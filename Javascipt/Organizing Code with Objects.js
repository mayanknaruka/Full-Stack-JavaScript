const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  },
};


// dot notation
console.log(myObject.property); // "Value!"

// bracket notation
console.log(myObject["obnoxious property"]); // [Function]


const variable = "property";

// "undefined" because it's looking for a property named "variable" in our object
console.log(myObject.variable);

// this is equivalent to myObject["property"] and returns "Value!"
console.log(myObject[variable]);

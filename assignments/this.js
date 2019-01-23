/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function 'this' occupies is applied to the global scope, its value will be the window object (no me gusta)
* 2. When using a method, the value of 'this' will be the object preceding the .method()
* 3. When used in a constructor function, the value of 'this' will be the object created & returned by the constructor
* 4. .bind(), .call(), and .apply() specifically define 'this' so its value will always be the object supplied
*
* write out a code example of each explanation above
*/

// Principle 1
myFunc();
function myFunc() {
  //console.log("Example 1: ", this); // mayhem, uncomment if you would like mayhem
}
// code example for Window Binding

// Principle 2
let formalGreetings = {
  greeting: "Hello!",
  speak: function() {
    console.log(`Example 2: Good day, sir.  To you I say: ${this.greeting}`);
    console.log("Implicit: ", this);
  }
};
formalGreetings.speak();
// code example for Implicit Binding

// Principle 3
function InformalGreeting() {
  this.greeting = "Hello!";
  this.speak = function() {
    console.log(
      `Example 3: What's up, man?  I'd like to say: ${this.greeting}`
    );
    console.log("Constructor: ", this);
  };
}
const informal = new InformalGreeting();
informal.speak();
// code example for New Binding

// Principle 4
function DefinitelyHowHumansTalk(speech) {
  this.greeting = speech.greeting;
  this.speak = function() {
    console.log(`Example 4: My answer to your greeting is: ${this.greeting}`);
    console.log("Explicit: ", this);
  };
}
const humanSpeech = new DefinitelyHowHumansTalk({ greeting: "Why, hello." });
const alsoHumanSpeech = new DefinitelyHowHumansTalk({
  greeting: "Well, good day!"
});
humanSpeech.speak.call(alsoHumanSpeech);
// code example for Explicit Binding

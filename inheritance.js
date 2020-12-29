// function Animal (name) {
//     this.name = name;
//   };
  
//   Animal.prototype.sayHello = function () {
//     console.log("Hello, my name is " + this.name);
//   };
  
//   function Dog () {};
  
//   Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal
  
//   Dog.prototype.constructor = Dog // otherwise instances of Dog will have 'instance.constructor === Animal'
  
//   Dog.prototype.bark = function () {
//     console.log("Bark!");
//   };
  
//   const liesel = new Dog("Liesel");
  
//   liesel.bark();
//   liesel.sayHello();

Function.prototype.inherits = function (parent) {
    function surrogate() {}
    surrogate.prototype = parent.prototype;
    this.prototype = new surrogate();
    this.prototype.constructor = this;

}


Function.prototype.inheritsWtihCreate = function(parent) {
    this.prototype = Object.create(BaseClass.prototype);
    this.prototype.constructor = this;
    // from the lecture
}

function Animal (name) {
    this.name = name;
  };
  
  Animal.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
  
  function Dog () {};
  
  Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal
  
  Dog.prototype.constructor = Dog // otherwise instances of Dog will have 'instance.constructor === Animal'
  
  Dog.prototype.bark = function () {
    console.log("Bark!");
  };
  
  const liesel = new Dog("Liesel");
  
  liesel.bark();
  liesel.sayHello();
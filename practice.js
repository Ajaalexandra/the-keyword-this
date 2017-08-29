//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // the "this keyword" refers back to the original object in the function (** it's a pointer) //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
  //   1. ----- Whenever a function is contained in the global scope, the value of this inside of that function will be 
  //   the window object.Functions within the global scope are in fact methods on the window object. So, calling greetMe('john'); is 
  ///  no different than calling window.greetMe('john'); Therefore, this inside of the greetMe function points to window.
 //     2. ----    Whenever a function is called by a preceding dot, the object before that dot is this.
///      3. ----- Whenever a constructor function is used, this refers to
  //         the specific instance of the object that is created and returned by the constructor function.
  //     4. ---- Whenever JavaScript’s call or apply method is used, this is explicitly defined.
//Answer

  // 3) What does .bind do?

       // .bind creates a function and explicitly binds object to the function//Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  var user = {                // just an object
    username: "ajaalexandra",
    email: "awesome@gmail.com",
    getUsername: function() {
     return this.username; // method 
    }
  };
//Code Here

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();





//Next Problem:

// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(type, model, year) {
  this.type = type;
  this.model = model;
  this.year = year;  
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}

                              //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).




prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};


var userName = getMyUsername.call(myUser);


//userName();//Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
 // will return the username of the object that's passed //Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

 //this keyword is bound to the object that you're passing to it //Answer Here


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.


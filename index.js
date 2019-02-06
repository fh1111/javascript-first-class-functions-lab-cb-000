function countdown(callback) {

  setTimeout(function (){
    callback();
  }, 2000);
}




var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
  function greet()
  {
      let name = document.querySelector('#name').value;
      alert('Hello, ' + name + '!' + ' ' + 'Welcome to Catalytic Originals Official Page '+'.');
  }

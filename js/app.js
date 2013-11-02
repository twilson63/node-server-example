document.getElementById('foo').addEventListener('click', function(){
  alert('Hello World2');
});
document.getElementById('bar').addEventListener('click', function(){
  var name = prompt('What is your name?');
  alert('Goodbye ' + name);
});
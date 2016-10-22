String.prototype.shuffle = function () {
   var a = this.split(""),
       n = a.length;

   for(var i = n - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var tmp = a[i];
       a[i] = a[j];
       a[j] = tmp;
   }
   return a.join("");
}
var messages = [
  "Stop triggering me",
  "Did you just assume my gender?",
  "How are mirrors real if our eyes aren't"
];
function autism() {
  document.getElementById('autism').value = messages[Math.floor((Math.random() * messages.length))]
  var p = document.getElementsByTagName('p')
  for(var i = 0; i < p.length; i++) {
    var txt = p[i].innerText
    p[i].innerHTML = txt.shuffle();
  }
}
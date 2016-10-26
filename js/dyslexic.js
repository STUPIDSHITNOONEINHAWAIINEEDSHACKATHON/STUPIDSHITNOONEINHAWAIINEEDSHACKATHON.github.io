String.prototype.shuffle = function () {
   let a = this.split(" ");

   for(let i = a.length - 1; i > 0; i--) {
      if (Math.floor(Math.random() * 2)) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
   }
   return a.join(" ");
}

const messages = [
  "Stop triggering me",
  "Did you just assume my gender?",
  "How are mirrors real if our eyes aren't"
];

function meme() {
  document.querySelector('#meme').value = messages[Math.floor((Math.random() * messages.length))];

  let paragraphElement = document.querySelectorAll('p');

  for(let i = 0; i < paragraphElement.length; i++) {
    let txt = paragraphElement[i].innerText;
    paragraphElement[i].innerHTML = txt.shuffle();
  }
}

document.querySelector('#meme').addEventListener('click', event => {
  return meme();
});
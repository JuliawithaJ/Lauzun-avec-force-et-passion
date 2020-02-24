function remove_show() {
  let popups = document.getElementsByClassName('popup');
  for (var i = 0; i < popups.length; i++) {
    popups.item(i).children[0].classList.remove('show');
  }
}
let popups = document.getElementsByClassName('popup');
for (var i = 0; i < popups.length; i++) {
  let element = popups.item(i);
  element.addEventListener('click', function() {
    remove_show();
    element.children[0].classList.add('show');
  });
}
let closepopup = document.getElementsByClassName('popup');
window.onclick = function(event) {
  if (event.target == closepopup) {
    closepopup.style.display = 'none';
  }
};

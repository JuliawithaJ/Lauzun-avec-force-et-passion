// function evelyne() {
//   var popup = document.getElementById('evelyne');
//   popup.classList.toggle('show');
// }
// function stephane() {
//   var popup = document.getElementById('stephane');
//   popup.classList.toggle('show');
// }
// function habib() {
//   var popup = document.getElementById('habib');
//   popup.classList.toggle('show');
// }
// function chantal() {
//   var popup = document.getElementById('chantal');
//   popup.classList.toggle('show');
// }
// function jeanPaul() {
//   var popup = document.getElementById('jeanPaul');
//   popup.classList.toggle('show');
// }
// function tina() {
//   var popup = document.getElementById('tina');
//   popup.classList.toggle('show');
// }
// function mariePierre() {
//   var popup = document.getElementById('mariePierre');
//   popup.classList.toggle('show');
// }
// function corinne() {
//   var popup = document.getElementById('corinne');
//   popup.classList.toggle('show');
// }
// function jeanPierre() {
//   var popup = document.getElementById('jeanPierre');
//   popup.classList.toggle('show');
// }
// function patrick() {
//   var popup = document.getElementById('patrick');
//   popup.classList.toggle('show');
// }
// function lynda() {
//   var popup = document.getElementById('lynda');
//   popup.classList.toggle('show');
// }
// function christine() {
//   var popup = document.getElementById('christine');
//   popup.classList.toggle('show');
// }
// function jeanClaude() {
//   var popup = document.getElementById('jeanClaude');
//   popup.classList.toggle('show');
// }
// function stephanie() {
//   var popup = document.getElementById('stephanie');
//   popup.classList.toggle('show');
// }
// function marc() {
//   var popup = document.getElementById('marc');
//   popup.classList.toggle('show');
// }
function remove_show() {
  let popups = document.getElementsByClassName('popup');
  for (popup in popups) {
    popup.classList.remove('show');
  }
}
let popups = document.getElementsByClassName('popup');
for (popup in popups) {
  popup.addEventListener('click', function() {
    remove_show();
    this.firstChild.classList.add('show');
  });
}

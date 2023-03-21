
const btn = document.querySelector('#btn');
const muncul = document.getElementById('baru');

btn.addEventListener('click', function myFunction() {
  if (document.getElementById('nama').value == "") {
    alert('isi dulu namanya bang')
  } else {
    muncul.textContent = "Hai " + document.getElementById('nama').value + " ngentod yuk";
  }
})
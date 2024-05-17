module.exports = function brownout () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "black";
  const elements = document.body.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}
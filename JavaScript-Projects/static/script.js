//Challenge 1 age in days
function ageInDays() {
  var birthyear = prompt("What year were you born?")
  var age= (2019 - birthyear) * 365;
  var h2 = document.createElement("h2");
  var textAns = document.createTextNode("You are at least " + age + " days old.")
  h2.setAttribute('id', 'ageInDays');
  h2.appendChild(textAns);
  document.getElementById('flex-box-result').appendChild(h2);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function submit() {
  const email = document.getElementById('email').value;
  if (!email) return;
  alert("Thank you!");
  console.log(email);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    `https://cortextesting.com/write.php?num=${email}`,
    false
  ); // false for synchronous request
  xmlHttp.send(null);
}

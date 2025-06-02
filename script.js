function testLove() {
  let janis1 = document.getElementById("janis1").value.trim();
  let saule2 = document.getElementById("saule2").value.trim();

  if (janis1 === "" || saule2 === "") {
    document.getElementById("result").innerHTML = "Ievadi vārdus!";
    return;
  }

  let percentage = Math.floor(Math.random() * 101);

  if (janis1[0].toLowerCase() === saule2[0].toLowerCase()) {
    percentage = Math.min(percentage + 10, 100);
  }

  let message = "";

  if (percentage > 80) {
    message = "Ideāla saderība!💘";
  } else if (percentage > 50) {
    message = "Izskatās labi!❤️";
  } else {
    message = "Tikai draugi...💔";
  }

  let text = janis1 + " - " + saule2 + "<br>";
  text += "Love Score: " + percentage + "%<br>";
  text += message;

  document.getElementById("result").innerHTML = text;
}

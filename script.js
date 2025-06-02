function testLove() {
  const janis1 = document.getElementById("janis1").value.trim();
  const saule2 = document.getElementById("saule2").value.trim();

  if (janis1 === "" || saule2 === "") {
    document.getElementById("result").innerText = "Ievadi vārdus!";
    return;
  }

  const percentage = Math.floor(Math.random() * 101); 

  let message = "";
  if (percentage > 80) {
    message = "Ideāla saderība!💘";
  } else if (percentage > 50) {
    message = "Izskatās labi!❤️";
  } 
   else {
    message = "Tikai draugi...💔";
  }

  document.getElementById("result").innerText = 
    `${janis1} - ${saule2}\nLove Score: ${percentage}%\n${message}`;
}

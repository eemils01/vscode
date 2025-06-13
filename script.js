function testLove() {
  let vards1 = document.getElementById("vards1").value.trim();
  let vards2 = document.getElementById("vards2").value.trim();

  if (vards1 === "" || vards2 === "") {
    document.getElementById("result").innerHTML = "Ievadi vārdus!";
    return;
  }

  let name1 = vards1.toLowerCase().replace(/\s/g, "");
  let name2 = vards2.toLowerCase().replace(/\s/g, "");
  let percentage = Math.floor(Math.random() * 101);

  if (name1.charAt(0) === name2.charAt(0)) percentage += 10;
  if (name1.includes("an") && name2.includes("an")) percentage += 5;
  if (name1.length === name2.length) percentage += 7;

  percentage = Math.min(100, Math.max(0, percentage));

  let message = "";
  let color = "pink";
  let sound;

  if (percentage > 80) {
    message = "Ideāla saderība! 💘";
    color = "hotpink";
    sound = document.getElementById("sound-high");
  } else if (percentage > 50) {
    message = "Izskatās labi! ❤️";
    color = "orange";
    sound = document.getElementById("sound-mid");
  } else {
    message = "Tikai draugi... 💔";
    color = "gray";
    sound = document.getElementById("sound-low");
  }

  let text = `${vards1} - ${vards2}<br>`;
  text += `Love Score: ${percentage}%<br>`;
  text += message;

  document.getElementById("result").innerHTML = text;

  // === Atjauno saderības stabiņu
  let bar = document.getElementById("progressBar");
  bar.style.width = percentage + "%";
  bar.style.background = color;

  // === Atskaņo skaņu
  sound.currentTime = 0;
  sound.play();
}

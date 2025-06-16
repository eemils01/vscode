function testLove() {
  const vards1 = document.getElementById("vards1").value.trim();
  const vards2 = document.getElementById("vards2").value.trim();

  if (!vards1 || !vards2) {
    document.getElementById("result").innerHTML = "Ievadi vārdus!";
    return;
  }

  const name1 = vards1.toLowerCase().replace(/\s+/g, "");
  const name2 = vards2.toLowerCase().replace(/\s+/g, "");

  let score = Math.floor(Math.random() * 61);

  if (name1.charAt(0) === name2.charAt(0)) score += 10;
  if (name1.length === name2.length) score += 10;

  let commonLetters = 0;
  for (let i = 0; i < name1.length; i++) {
    if (name2.includes(name1.charAt(i))) {
      commonLetters++;
    }
  }

  if (commonLetters >= 3) score += 10;

  score = Math.min(100, Math.max(0, score));

  let message = "";
  let barColor = "pink";

  if (score > 80) {
    message = "Ideāla saderība! 💘";
    barColor = "hotpink";

  } else if (score > 50) {
    message = "Izskatās labi! ❤️";
    barColor = "orange";
    
  } else {
    message = "Tikai draugi... 💔";
    barColor = "gray";
  }

  const resultText = `
    ${vards1} - ${vards2}<br>
    Love Score: ${score}%<br>
    ${message}
  `;

  document.getElementById("result").innerHTML = resultText;

  const bar = document.getElementById("progressBar");
  bar.style.width = score + "%";
  bar.style.backgroundColor = barColor;
}







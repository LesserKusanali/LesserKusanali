let redButtonClickCount = 0;
const redButtonMessages = ['huh ayaw mo?', 'ge.', 'djok lng bakit ayaw mo??', 'nooo, di ako papayag na di mo ako makadate sa 14', 'awww:<', 'AHAHAHA bawal ka tumanggi'];

function selectChoice(choice) {
  if (choice === 'ayoko') {
    redButtonClickCount++;
    if (redButtonClickCount > redButtonMessages.length) {
      redButtonClickCount = redButtonMessages.length;
    }
    document.getElementById('result').innerText = redButtonMessages[redButtonClickCount - 1];
    
    if (redButtonClickCount > 1) {
      let sigeButton = document.getElementById('sigeButton');
      let sigeButtonWidth = 100 + (redButtonClickCount - 1) * 35; // Increase width by for each click
      let sigeButtonHeight = 50 + (redButtonClickCount - 1) * 25; // Increase height by for each click
      sigeButton.style.width = sigeButtonWidth + 'px';
      sigeButton.style.height = sigeButtonHeight + 'px';
    }
    
    if (redButtonClickCount === 6) {
      document.getElementById('ayokoButton').style.display = 'none'; // Hide Ayoko button on 6th click
    }
  } else if (choice === 'sige') {
    document.getElementById('result').innerText = 'YAYYY, ILOVEYOUUSOMUCHH!!!<33';
  }
}

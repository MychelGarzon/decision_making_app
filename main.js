const decisionMaking = () => {
  const userName = document.querySelector('#userName').value;
  const question_user = document.querySelector('#question_user').value;
  const funny_answer = document.querySelector('#funny_answer');
  const submitButton = document.querySelector('button');
  document.getElementById('user').style.display = 'none';
  document.getElementById('question').style.display = 'none';
  document.getElementById('tittle').style.display = 'none';
  document.getElementById('button').style.display = 'none';

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  switch (randomNumber) {
    case 1:
      answer = `Hello ${userName} You should go for it!  `;
      break;
    case 2:
      answer = `Hello ${userName}!!! It's a good time to take a leap of faith! `;
      break;
    case 3:
      answer = `Hello ${userName} Consider all your options before deciding. `;
      break;
    case 4:
      answer = `Hello ${userName} Don't rush into anything; take your time.`;
      break;
    case 5:
      answer = `Hello ${userName} The answer is right in front of you!`;
      break;
    case 6:
      answer = `Hello ${userName} Trust your instincts and make a move. `;
      break;
    case 7:
      answer = `Hello ${userName} Seek advice from someone you trust.`;
      break;
    case 8:
      answer = `Hello ${userName} Now is the time to explore new possibilities. `;
      break;
    case 9:
      answer = `Hello ${userName} Take a calculated risk; it might pay off!`;
      break;
    case 10:
      answer = `Hello ${userName} Focus on what truly matters to you. `;
      break;
    default:
      answer = `Unable to provide a decision at this time. `;
  }

  funny_answer.textContent = answer;
};

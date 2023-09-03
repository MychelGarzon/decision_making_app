const decisionMaking = () => {
  const userName = document.querySelector('#userName').value;
  const question_user = document.querySelector('#question_user').value;
  const funny_answer = document.querySelector('#funny_answer');

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  switch (randomNumber) {
    case 1:
      answer = `You should go for it!  `;
      break;
    case 2:
      answer = `It's a good time to take a leap of faith! `;
      break;
    case 3:
      answer = `Consider all your options before deciding. `;
      break;
    case 4:
      answer = `Don't rush into anything; take your time.`;
      break;
    case 5:
      answer = `The answer is right in front of you!`;
      break;
    case 6:
      answer = `Trust your instincts and make a move. `;
      break;
    case 7:
      answer = `Seek advice from someone you trust.`;
      break;
    case 8:
      answer = `Now is the time to explore new possibilities. `;
      break;
    case 9:
      answer = `Take a calculated risk; it might pay off!`;
      break;
    case 10:
      answer = `Focus on what truly matters to you. `;
      break;
    default:
      answer = `Unable to provide a decision at this time. `;
  }
  funny_answer.textContent = answer;
};

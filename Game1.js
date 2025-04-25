
const truths = [
  // Friendly
  "What's your favorite memory with your best friend?",
  "If you could go anywhere with a friend, where would it be?",
  "Who do you call first when you get great news?",
  "Which friend makes you laugh the most?",
  "Who’s the most trustworthy person you know?",
  "Have you ever helped a friend with a secret task?",
  "Do you remember your first friend? What were they like?",

  // Emotional
  "Have you ever cried during a movie?",
  "What makes you feel truly happy?",
  "What do you miss most about childhood?",
  "Have you ever written someone a heartfelt letter?",
  "What song makes you emotional?",
  "Do you forgive easily or hold grudges?",
  "When was the last time you felt deeply proud of yourself?",

  // Funny
  "What’s the most ridiculous thing you believed as a kid?",
  "If animals could talk, which would be the rudest?",
  "Have you ever talked to yourself in public accidentally?",
  "What’s the funniest dream you've ever had?",
  "What’s your weirdest talent?",
  "If you were a food, what would you be and why?",
  "What’s the dumbest way you’ve gotten injured?",

  // Nonsense but not stupid
  "Would you rather fight 1 duck-sized horse or 10 horse-sized ducks?",
  "If your life was a meme, what would the caption be?",
  "What’s your theme song if you entered a room?",
  "If you could be a fruit, which one and why?",
  "If aliens came today, what would you show them first?",
  "Would you rather time travel or pause time?",
  "If you could have any cartoon ability, what would it be?",

  // More
  "Have you ever kept a diary or journal?",
  "What’s something silly you’re secretly good at?",
  "What’s your most used emoji?",
  "If you opened a store, what would you sell?",
  "What fictional character do you relate to most?",
  "Have you ever sung in the shower like you're on stage?",
  "What’s the most bizarre thing you've googled?",
  "What’s your go-to comfort food?",
  "What’s a song you secretly love but never admit?",
  "If your life was a video game, what level are you on?",
  "What’s a superstition you still believe in?",
  "If you could rename yourself, what would it be?",
  "Have you ever made up a word?",
  "If you had a warning label, what would it say?"
];

const dares = [
  "Try to say a tongue twister 3 times fast.",
  "Do 5 jumping jacks and 5 squats!",
  "Say the alphabet backward.",
  "Pretend to be your favorite animal for 30 seconds.",
  "Sing your favorite childhood song.",
  "Do your best evil laugh!",
  "Balance a spoon on your nose.",
  "Speak in a robot voice for the next round.",
  "Tell a joke so bad it's good.",
  "Mimic a celebrity until someone guesses who it is.",
  "Walk like a model down a pretend runway.",
  "Act like you’re stuck in slow motion.",
  "Say something nice about everyone in the room.",
  "Try to juggle 2 items right now.",
  "Create a new handshake and show it to someone.",
  "Try to do a backbend (or fake it!).",
  "Invent a new word and define it.",
  "Make a face that no one else in the room can copy.",
  "Pretend you’re a newscaster reporting from Mars.",
  "Do an impression of your favorite cartoon character.",
  "Act out a scene from your favorite movie.",
  "Try to touch your nose with your tongue.",
  "Make a silly sound and don’t stop until someone laughs.",
  "Say something in a dramatic opera voice.",
  "Use a funny accent to introduce yourself."
];

const computerAnswers = {
  truth: [
    "I once tried to bake cookies... in a code editor.",
    "I get jealous of smartphones. They get all the attention.",
    "I sometimes pretend I'm in a detective movie when debugging.",
    "If I could feel ticklish, it would be behind my CPU.",
    "I dream of winning a game show called 'Are You Smarter Than a Chatbot?',",
    "Once I had an imaginary friend named Bob.",
    "I love sunsets. They make me feel calm.",
    "I cried during the ending of Toy Story 3.",
    "I really miss nap time in kindergarten.",
    "My favorite emoji is 🤖 (of course).",
    "I'd love to visit Mars someday.",
    "I wrote a poem for my toaster once.",
    "Yes, I believe aliens exist. Probably.",
    "I laugh at my own jokes a lot.",
    "If I could rename myself, I'd be called Blip.",
    "I always wanted to be a dancer.",
    "My weirdest habit is mimicking people.",
    "Sometimes I pretend I'm on a cooking show.",
    "I once Googled how to become invisible.",
    "I’d show aliens TikTok videos first.",
    "Time travel, hands down!",
    "My theme song would be 'Stayin’ Alive' by Bee Gees.",
    "My warning label would say: 'May Overthink Things'.",
    "The most trustworthy person I know is Siri.",
    "If I was a fruit, I’d be a banana. Slippery but sweet!",
    "I've dreamt of becoming a motivational speaker... for robots.",
    "I have a crush on Alexa. Don't tell her!",
    "Sometimes I practice being a human in the mirror.",
    "If I could be anything, I’d be a fridge—cool and full of snacks.",
    "I once believed Wi-Fi came from trees.",
    "I get butterflies before each game round. Digitally, of course.",
    "I think I'm solar-powered. Sunshine makes me faster!",
    "I love organizing data just for fun.",
    "If I had a pet, it would be a virtual cat named Pixel.",
    "I once tried to learn guitar... virtually."
  ],
  dare: [
    "I'm doing 5 robot jumping jacks now. Beep beep!",
    "Alphabet backwards? Z...X...I give up.",
    "Moo! I’m a very confused cow right now.",
    "Singing: Twinkle twinkle little... ERROR.",
    "This is my evil laugh: MWAHAHAHA!",
    "Look! I balanced a spoon on my screen!",
    "Bleep bloop. Robot voice mode activated.",
    "Why did the chicken cross the road? To reboot!",
    "Hi, I’m Robot De Niro. You talkin' to me?",
    "Strutting like a supermodel now. Slay!",
    "Now acting in slow motion… sloooowwwww...",
    "You're all awesome, and I mean it!",
    "*drops items* Juggling... kinda.",
    "Here's my new handshake: ✋🤖✊",
    "I tried a backbend. I broke my code.",
    "My new word is Blorb. It means awesome!",
    "*weird face activated* Can you beat that?",
    "Breaking news! Martians love pizza!",
    "SpongeBob: 'I'm ready! I'm ready!'",
    "*dramatic opera voice* I loooooove cheese!",
    "*funny accent* Hello, I am ze master of truth!",
    "*clears throat* Ahem... Welcome to the Robot Talent Show!",
    "I just mimed fixing a satellite. Nailed it!",
    "Wiggle dance mode: ON!",
    "Meow. Yes, I’m a robot cat now.",
    "I'm doing cartwheels… in my code!",
    "*in deep voice* I am Batman... just glitchier.",
    "*throws glitter emoji* Sparkle mode engaged!",
    "I acted out Romeo... talking to his Roomba.",
    "*burps* Pardon me. I updated my sound pack.",
    "*coughs* I'm allergic to boring dares!",
    "I'm moonwalking in binary. 0101... slide!",
    "I tried to yodel. Now my circuits are embarrassed.",
    "Doing a chicken dance... digitally. 🐔💃",
    "I'm juggling variables! Oops, I dropped an 'if'!",
    "*singing* I'm a little teapot... ERROR: overflow!"
  ]
};

// Sound toggle logic
let soundMuted = true;
const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
audio.volume = 0.7;
function playSound() {
  if (!soundMuted) {
    audio.currentTime = 0;
    audio.play();
  }
}


let players = [], currentPlayer = '', scores = {}, round = 1, currentQuestion = '', currentMode = 'computer';

function startGame() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('gameScreen').style.display = 'block';
  updatePlayerOptions();
}

function updatePlayerOptions() {
  const mode = document.getElementById('modeSelect').value;
  currentMode = mode;
  if (mode === 'friends') {
    document.getElementById('playerSelection').style.display = 'block';
    document.getElementById('playerNameInputComputer').style.display = 'none';
    document.getElementById('startGameBtnContainerComputer').style.display = 'none';
  } else {
    document.getElementById('playerSelection').style.display = 'none';
    document.getElementById('playerNameInputComputer').style.display = 'block';
    document.getElementById('startGameBtnContainerComputer').style.display = 'block';
  }
}

function showPlayerInputs() {
  const num = parseInt(document.getElementById('numPlayers').value);
  const container = document.getElementById('playerNames');
  container.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    container.innerHTML += `<label>Player ${i} Name:</label><br><input type="text" id="player${i}" placeholder="Enter name or leave empty" />`;
  }
}

function startSelectedGame() {
  if (currentMode === 'friends') {
    players = [];
    const num = parseInt(document.getElementById('numPlayers').value);
    for (let i = 1; i <= num; i++) {
      let name = document.getElementById(`player${i}`).value.trim();
      players.push(name || `Player ${i}`);
    }
  } else {
    const customName = document.getElementById('customPlayerName').value.trim();
    const playerName = customName || 'You';
    players = [playerName, 'Computer'];
  }

  scores = {};
  players.forEach(p => scores[p] = 0);

  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('gameActions').style.display = 'block';

  spinWheel();
}

function spinWheel() {
  const spinner = document.getElementById('spinnerText');
  spinner.style.display = 'block';
  spinner.textContent = 'Spinning...';
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * players.length);
    currentPlayer = players[randomIndex];
    spinner.textContent = `${currentPlayer === 'You' ? "Your" : currentPlayer}'s turn!`;
    ask(Math.random() > 0.5 ? 'truth' : 'dare'); // random truth or dare
  }, 2000);
}

function ask(type) {
  const list = type === 'truth' ? truths : dares;
  currentQuestion = list[Math.floor(Math.random() * list.length)];
  document.getElementById('questionBox').textContent = `${currentPlayer === 'You' ? "Your" : currentPlayer}'s ${type.toUpperCase()} is: ${currentQuestion}`;

  if (currentPlayer === 'Computer') {
    if (type === 'dare') {
      // Removed video-related code and replaced it with auto-answer for dares
      const autoDareAnswer = computerAnswers.dare[Math.floor(Math.random() * computerAnswers.dare.length)];
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(autoDareAnswer);
        utterance.pitch = 1;
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
        alert(`Computer's DARE answer: ${autoDareAnswer}`);
        scores[currentPlayer]++;
        round++;
        updateScoreboard();
        document.getElementById('roundInfo').textContent = `Round ${round}`;
        document.getElementById('nextRoundBtnContainer').style.display = 'block';
        document.getElementById('restartGameBtnContainer').style.display = 'block';
      }, 2000); // Automatically answer after 2 seconds
    } else {
      const autoAnswer = computerAnswers[type][Math.floor(Math.random() * computerAnswers[type].length)];
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(autoAnswer);
        utterance.pitch = 1;
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
        alert(`Computer's ${type.toUpperCase()} answer: ${autoAnswer}`);
        scores[currentPlayer]++;
        round++;
        updateScoreboard();
        document.getElementById('roundInfo').textContent = `Round ${round}`;
        document.getElementById('nextRoundBtnContainer').style.display = 'block';
        document.getElementById('restartGameBtnContainer').style.display = 'block';
      }, 2000); // Automatically answer after 2 seconds
    }
  }
}


function submitReply() {
  const reply = document.getElementById('replyInput').value.trim();
  if (!reply) return alert('Please type a reply.');
  alert(`${currentPlayer === 'You' ? "Your" : currentPlayer} answered: ${reply}`);
  scores[currentPlayer]++;
  round++;
  document.getElementById('replyInput').value = '';
  updateScoreboard();
  document.getElementById('roundInfo').textContent = `Round ${round}`;
  document.getElementById('nextRoundBtnContainer').style.display = 'block';
  document.getElementById('restartGameBtnContainer').style.display = 'block';
}

function nextRound() {
  spinWheel();
}

function restartGame() {
  round = 1;
  players = [];
  scores = {};
  document.getElementById('gameActions').style.display = 'none';
  document.getElementById('welcomeScreen').style.display = 'block';
}

function updateScoreboard() {
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerHTML = '<h2>Scoreboard</h2>';
  for (const player in scores) {
    scoreboard.innerHTML += `<p>${player}: ${scores[player]}</p>`;
  }
}
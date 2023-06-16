const states = document.getElementsByTagName('g');
const question = document.getElementById('question');
const answerHint = document.getElementById('answerHint');
const errorWindow = document.getElementById('errorWindow');
const successWindow = document.getElementById('successWindow');
const retryButton = document.getElementById('retryButton');
const nextQuestionButton = document.getElementById('nextQuestion');
const hintButton = document.getElementById('hintButton');
const answer = document.getElementById('answer');
const uiAudio = document.getElementById('uiAudio');
let hintVisibility = false;
let currentQuestion = 0;

const statesAndUTs = {
  'IN-AN': 'Andaman and Nicobar Islands',
  'IN-AP': 'Andhra Pradesh',
  'IN-AR': 'Arunachal Pradesh',
  'IN-AS': 'Assam',
  'IN-BR': 'Bihar',
  'IN-CH': 'Chandigarh',
  'IN-CT': 'Chhattisgarh',
  'IN-DN': 'Dadra and Nagar Haveli and Daman and Diu',
  'IN-DL': 'Delhi',
  'IN-GA': 'Goa',
  'IN-GJ': 'Gujarat',
  'IN-HR': 'Haryana',
  'IN-HP': 'Himachal Pradesh',
  'IN-JK': 'Jammu and Kashmir',
  'IN-JH': 'Jharkhand',
  'IN-KA': 'Karnataka',
  'IN-KL': 'Kerala',
  'IN-LA': 'Ladakh',
  'IN-LD': 'Lakshadweep',
  'IN-MP': 'Madhya Pradesh',
  'IN-MH': 'Maharashtra',
  'IN-MN': 'Manipur',
  'IN-ML': 'Meghalaya',
  'IN-MZ': 'Mizoram',
  'IN-NL': 'Nagaland',
  'IN-OR': 'Odisha',
  'IN-PY': 'Puducherry',
  'IN-PB': 'Punjab',
  'IN-RJ': 'Rajasthan',
  'IN-SK': 'Sikkim',
  'IN-TN': 'Tamil Nadu',
  'IN-TG': 'Telangana',
  'IN-TR': 'Tripura',
  'IN-UP': 'Uttar Pradesh',
  'IN-UT': 'Uttarakhand',
  'IN-WB': 'West Bengal'
};

const questions = [
  {
    question: 'Which is the largest state in India?',
    answerHint: 'This state is known for its rich cultural heritage, majestic forts and palaces, and the vast Thar Desert.',
    answer: 'Rajasthan',
  },
  {
    question: 'Which is the smallest state in India?',
    answerHint: 'This state is situated on the western coast of India and is renowned for its beautiful beaches, vibrant nightlife, Portuguese architecture, and delicious seafood.',
    answer: 'Goa',
  },
  {
    question: 'Which state is known as the "Land of the Rising Sun"?',
    answerHint: 'This state is located in the northeastern part of India and is famous for its breathtaking landscapes, snow-capped mountains, pristine forests, and rich biodiversity.',
    answer: 'Arunachal Pradesh',
  },
  {
    question: 'Which state is famous for the backwaters?',
    answerHint: 'This state, situated on the southwestern coast of India, is renowned for its serene backwaters, palm-fringed beaches, lush greenery, Ayurvedic treatments, and vibrant cultural traditions.',
    answer: 'Kerala',
  },
  {
    question: 'Which state is known as the "Spice Garden of India"?',
    answerHint: 'This state is often referred to as the "Spice Garden of India" and is renowned for its abundant spice plantations. It is also known for its backwaters, scenic beauty, traditional art forms, and lip-smacking cuisine.',
    answer: 'Kerala',
  },
  {
    question: 'Which state is famous for the Ajanta and Ellora Caves?',
    answerHint: 'This state is renowned for its ancient rock-cut caves, including the Ajanta and Ellora Caves, which are UNESCO World Heritage Sites. It is also home to bustling cities and a rich cultural heritage.',
    answer: 'Maharashtra',
  },
  {
    question: 'Which state is famous for the Konark Sun Temple?',
    answerHint: 'This state is known for its architectural marvel, the Konark Sun Temple, which is dedicated to the Sun God. It also boasts of pristine beaches, vibrant festivals, and a rich cultural heritage.',
    answer: 'Odisha',
  },
  {
    question: 'Which state is famous for the Kaziranga National Park?',
    answerHint: 'This state is home to the Kaziranga National Park, a UNESCO World Heritage Site and a prominent wildlife sanctuary known for its population of the endangered one-horned rhinoceros. It also offers breathtaking natural beauty and tea gardens.',
    answer: 'Assam',
  },
  {
    question: 'Which state is known for the Meenakshi Temple?',
    answerHint: 'This state is famous for the Meenakshi Amman Temple, a historic Hindu temple dedicated to Goddess Meenakshi. It is also known for its vibrant festivals, traditional arts and crafts, and mouthwatering cuisine.',
    answer: 'Tamil Nadu',
  },
  {
    question: 'Which state is famous for the Great Indian Desert?',
    answerHint: 'This state is renowned for the Great Indian Desert, also known as the Thar Desert. It is characterized by its sweeping sand dunes, vibrant folk culture, and historical cities.',
    answer: 'Rajasthan',
  },
];

const updateQuestion = () => {
  question.innerText = questions[currentQuestion].question;
  answerHint.innerText = questions[currentQuestion].answerHint; 
}

const openErrorWindow = () => {
  errorWindow.classList.add('open');
}

const closeErrorWindow = () => {
  errorWindow.classList.remove('open');
}

const openSuccessWindow = () => {
  answer.innerText = `"${questions[currentQuestion].answer}" is the right answer`;
  uiAudio.play();
  currentQuestion++;
  successWindow.classList.add('open');
}

const closeSuccessWindow = () => {
  successWindow.classList.remove('open');
  uiAudio.pause();
  uiAudio.currentTime = 0;
  updateQuestion();
}

retryButton.addEventListener('click', () => {
  closeErrorWindow();
});

nextQuestionButton.addEventListener('click', () => {
  closeSuccessWindow();
})

hintButton.addEventListener('click', () => {
  answerHint.classList.toggle('hint');
  hintVisibility = !hintVisibility;
  console.log(hintVisibility)
  if(hintVisibility)
  {
    hintButton.innerText = "Hide hint"
  }
  else{hintButton.innerText = "Show hint"}
})
updateQuestion();

statesList = Array.from(states);

statesList.forEach((state) => {
  state.addEventListener("click", () => {
    console.log(statesAndUTs[state.id]);
    if(statesAndUTs[state.id] == questions[currentQuestion].answer){
      openSuccessWindow();
    }
    else{
      openErrorWindow();
    }
  })
});
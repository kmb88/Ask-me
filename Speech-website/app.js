const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  document.getElementById("stop").innerHTML = "Stop";
});

// // random
const jokes = [
  'What do sprinters eat before a race? Nothing, they fast!","What concert costs just 45 cents? 50 Cent featuring Nickelback!',
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "karens a fatty!",
  "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
  "Why couldn't the bicycle stand up by itself? It was two tired!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
  "What do you call a fish with two knees? A two-knee fish!",
  "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.",
  "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "The secret service isn't allowed to yell Get down! anymore when the president is about to be attacked. Now they have to yell Donald, duck!",
  "What is the least spoken language in the world? Sign language",
  "My friend keeps saying cheer up man it could be worse, you could be stuck underground in a hole full of water. I know he means well",
  "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent.",
  "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
];

const trick = [
  "you seem like a cool person, i can tell by your voice",
  "A person who may or may not like dogs",
  "you are someone who knows a karen in your life",
];

const karen = [
  "She needs a job",
  "you should hire her",
  "She is the best",
  "She created me so I cant talk bad about her is she around?",
];

const personal = [
  "Nothing,just watching this bored person talk to a computer. You",
  "Living",
  "Im a little tired",
  "Stuck at home. but at least I got a job",
];
const fact = [
  "Indonesia is home to some of the shortest people in the world.",
  "Four babies are born every second.",
  "Japan is the world's most earthquake-prone country.",
  "Dr.Martin Luther King Jr. improvised the most iconic part of his “I Have a Dream Speech.",
  "Inoculation was introduced to America by a slave.",
  "One in four cowboys was Black, despite the stories told in popular books and movies.",
  "Esther Jones was the real Betty Boop",
  "The first licensed African American Female pilot was named Bessie Coleman.",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated, you can speak");
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  //   speech.text = "speak up chica";
  if (message.includes("tell me a joke")) {
    const jokeR = jokes[Math.floor(Math.random() * jokes.length)];
    speech.text = jokeR;
  }
  if (message.includes("who am I")) {
    const who = trick[Math.floor(Math.random() * trick.length)];
    speech.text = who;
  }
  if (message.includes("Karen")) {
    const karenR = karen[Math.floor(Math.random() * karen.length)];
    speech.text = karenR;
  }
  if (message.includes("how are you")) {
    const personalR = personal[Math.floor(Math.random() * personal.length)];
    speech.text = personalR;
  }
  if (message.includes("fact")) {
    const factR = fact[Math.floor(Math.random() * fact.length)];
    speech.text = factR;
  }

  speech.volume = 2;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  document.getElementById("stop").innerHTML = "Start";
}

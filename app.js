


let quote = document.getElementById('quote');
let writer = document.getElementById('writer');
let Button = document.getElementById('Button');

let quotes = [
  { quote: "To live is the rarest thing in the world. Most people exist, that is all..", writer: "Oscar Wilde" },
  { quote: "You must be the change you want to see in the world.", writer: "Mahatma Gandhi" },
  { quote: "You define your own life, don't let other people write your script.", writer: "Harvey Fierstein" },
  { quote: "Stay positive, better things are on their way.", writer: "Anonymous" },
  { quote: "All of our dreams can come true, if we have the courage to pursue them.", writer: "Walt Disney" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", writer: "Franklin D. Roosevelt" },
  { quote: "Never give up because great things take time", writer: "Anonymous" },
  { quote: "Work hard in silence, let your success be the noise", writer: "Frank Ocean" },
  { quote: "The only way to do great work is to love what you do", writer: "Steve Jobs" },
  { quote: "The best way to predict the future is to create it", writer: "Peter Drucker" },
  { quote: "The best revenge is massive success", writer: "Frank Sinatra" },
  { quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it", writer: "Jordan Belfort" },
  { quote: "The only way to achieve the impossible is to believe it is possible", writer: "Charles Kingsleigh" }
];

function newQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quote.textContent = randomQuote.quote;
  writer.textContent = randomQuote.writer;
}

Button.addEventListener('click', newQuote);
newQuote();

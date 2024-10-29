import React, { useState } from "react";
function Quote() {
  const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Whether you think you can or think you can’t, you’re right. – Henry Ford",
    "It does not matter how slowly you go, as long as you do not stop. – Confucius",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Act as if what you do makes a difference. It does. – William James",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
  ];
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

  const handleNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };



  return (
    <div>
      <h2>Quote of the day</h2>
      <p>{quotes[index]}</p>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}

export default Quote;

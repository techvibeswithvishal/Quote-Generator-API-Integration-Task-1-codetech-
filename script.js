const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    // ✅ This API has no CORS restriction
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `– ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Error fetching quote. Try again!";
    authorText.textContent = "";
  }
}

newQuoteBtn.addEventListener("click", getQuote);
getQuote();

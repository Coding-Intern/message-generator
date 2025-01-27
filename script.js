const messages = [
    '"You can learn anything!" - Khan Academy',
    "Never stop learning, because those who stop learning, stop living.",
    '"Power comes not from knowledge kept but from knowledge shared" - Bill Gates',
    '"Out of the mountain of dispair, a stone of hope." - Martin Luther King Jr.',
    '"Try not to become a man of success, but rather try to become a man of value" - Albert Einstein',
    '"The path to success, is to take massive, determined action." - Tony Robbins',
    '"Everything is theoretically impossible until it is done." - Robert A. Heinlein',
    '"Spontaneity is an infinite number of rehearsed possibilities." -Peter F. Drucker',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible." - Joel Brown',
    '"The only way to achieve the impossible is to believe it is possible." - Charles Kingsleigh',
    '"Time is what we want most, but what we use worst." - William Penn',
    '"Imagination is more important than knowledge." - Albert Einstein',
    '"There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning." - Jiddu Krishnamurti',
    '"The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education." - Martin Luther King Jr.',
    '"The expert in anything was once a beginner." - Helen Hayes',
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Scientists study the world as it is; engineers create the world that has never been." - Theodore von Karman',
    '"Believe you can, and you\'re halfway there." - Theodore Roosevelt',
    '"You\'re time is limited, so don\'t waste it living someone else\'s life." - Steve Jobs',
    '"Don’t be afraid to give up the good to go for the great." - John D. Rockefeller',
    '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer',
    '"Success seems to be connected with action. Successful people keep moving. They make mistakes but they don’t quit." - Conrad Hilton',
    '"The way to get started is to quit talking and begin doing." - Walt Disney',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible." - Joel Brown'
];

const userQuotes = [];

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    const messageDiv = document.getElementById("message");
    const generateButton = document.getElementById("generate");
    
    messageDiv.innerHTML = '';
    generateButton.disabled = true;

    let i = 0;
    function typeWriter() {
        if (i < randomMessage.length) {
            messageDiv.innerHTML += randomMessage.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            generateButton.disabled = false;
        }
    }

    typeWriter();
}

function submitQuote() {
    const userQuote = document.getElementById("userQuote").value;
    if (userQuote) {
        messages.push(userQuote); // Add to messages array
        userQuotes.push(userQuote); // Add to userQuotes array
        document.getElementById("userQuote").value = '';
        alert("Your quote has been added. Thank you for your submission!");
        console.log("Quote added:", userQuote); // Log the added quote
        displayUserQuotes(); // Update the displayed list of user quotes
    } else {
        alert("Please enter a quote before submitting.");
    }
}

function deleteQuote(index) {
    const quoteToDelete = userQuotes[index];
    userQuotes.splice(index, 1); // Remove from userQuotes array
    const messageIndex = messages.indexOf(quoteToDelete);
    if (messageIndex > -1) {
        messages.splice(messageIndex, 1); // Remove from messages array
    }
    displayUserQuotes(); // Update the displayed list of user quotes
}

function displayUserQuotes() {
    const quoteList = document.getElementById("quoteList");
    quoteList.innerHTML = '';
    userQuotes.forEach((quote, index) => {
     const quoteItem = document.createElement("div");
     quoteItem.className = "quote-item";
        quoteItem.innerHTML = `
            <span>${quote}</span>
            <button class="delete-quote" onclick="deleteQuote(${index})">Delete</button>
        `;
        quoteList.appendChild(quoteItem);
    });
}
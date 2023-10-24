document.getElementById('chatbot-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const userInput = document.getElementById('userInput').value;

    const url = 'https://stileschat-ai.p.rapidapi.com/api';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '83814eee54msh26db8fe720703dep1bf139jsndb623b73feac',
            'X-RapidAPI-Host': 'stileschat-ai.p.rapidapi.com',
        },
        body: JSON.stringify({
            promptInput: userInput,
            context: false
        })
    };
     
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        // Assuming the response is plain text, you can display it in the HTML
        const chatbotResponseDiv = document.getElementById('chatbot-response');
        chatbotResponseDiv.textContent = result;
    } catch (error) {
        console.error('Error:', error);
    }
});


      

// Display the "out" text in the HTML, for example, in a div with the ID 'chatbot-response'
// const chatbotResponseDiv = document.getElementById('chatbot-response');
// chatbotResponseDiv.textContent = outText;


// Assuming `outText` contains the joke with HTML line breaks
const jokeWithLineBreaks = responseObj.out;

// Remove the HTML line breaks
const jokeWithoutLineBreaks = jokeWithLineBreaks.replace(/<br\s*\/?>/g, '');

// Display the joke without line breaks in the HTML
const chatbotResponseDiv = document.getElementById('chatbot-response');
chatbotResponseDiv.textContent = jokeWithoutLineBreaks;

        
        
    

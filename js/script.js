document.getElementById('chatbot-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Add this line to prevent the form from refreshing the page

    const userInput = document.getElementById('userInput').value;

    const url = 'https://robomatic-ai.p.rapidapi.com/api';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '83814eee54msh26db8fe720703dep1bf139jsndb623b73feac',
            'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
        },
        body: new URLSearchParams({
            in: userInput,
            op: 'in',
            cbot: '1',
            SessionID: 'RapidAPI1',
            cbid: '1',
            key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',
            ChatSource: 'RapidAPI',
            duration: '1'
        })
    };
    

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        
        // Modify the script to append the Chatbot's response to the 'chatbot-response' div
        const chatbotResponseDiv = document.getElementById('chatbot-response');
        chatbotResponseDiv.innerHTML = result;
    } catch (error) {
        console.error('Error:', error);
    }
});

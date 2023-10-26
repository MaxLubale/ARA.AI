 // JavaScript to handle the button click event
 document.getElementById('chatbot-form').addEventListener('submit', function() {
    // Display "thinking..." text in the response area
    document.getElementById('chatbot-response').innerHTML = 'HEY! how can I help you today?';
    setTimeout(function() {
        // Simulate a response from the server
        var responseText = 'Thinking...';
        document.getElementById('chatbot-response').innerHTML = responseText;
      }, 800); // Simulating a  delay
    });



document.getElementById('chatbot-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
   
  
    const userInput = document.getElementById('user-input').value;
  //post requset to send our data 
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
       
        // Display the response on the html
        const chatbotResponseDiv = document.getElementById('chatbot-response');
        chatbotResponseDiv.textContent = result;
    } catch (error) {
        console.error('Error:', error);
    }
});


      


        
    

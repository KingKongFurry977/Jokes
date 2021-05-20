// First need reference
const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// Fetch API, Promises
// using asynch await


const generateJokes = async () => {
    try{
        // setting header object
        const setHeader ={
            headers: {
                Accept : "application/json"
            }
        }
        // calling fetch method
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        // converting html formate into json formate
        const data = await res.json();    
        // getting jokes data
        joke.innerHTML = data.joke;
    }catch(error){
        console.log(`The error is ${error}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();
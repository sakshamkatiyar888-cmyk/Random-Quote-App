const quote= document.getElementById("quote");

const author=document.getElementById("author");

const button=document.getElementById("btn");

button.addEventListener("click",getQuote);

async function getQuote(){

    try{

        quote.innerText="Loading Quotes...";

        author.innerText="";

        const response= await fetch(
             "https://dummyjson.com/quotes/random"
        );
        if(!response.ok){

            throw new Error("Failed To Fetch Quote");

        }
        const data= await response.json();

        quote.innerText=`"${data.quote}"`;
        author.innerText=`-${data.author}`;
        
    }
    catch (error){

        quote.innerText="Something Went Wrong.";

        author.innerText="";
        console.log(error);
    }
}
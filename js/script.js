const quote= document.getElementById("quote");

const author=document.getElementById("author");

const button=document.getElementById("btn");

button.addEventListener("click",getQuote);


async function getQuote(){

    button.disabled=true;
    button.textContent="Loading..."

    try{

        quote.textContent="Loading Quotes...";

        author.textContent="";

        const response= await fetch(
             "https://dummyjson.com/quotes/random"
        );
        if(!response.ok){

            throw new Error("Failed To Fetch Quote");

        }
        const data= await response.json();

        quote.textContent=`"${data.quote}"`;
        author.textContent=`-${data.author}`;
        
    }
    catch (error){

        quote.textContent="Something Went Wrong.";

        author.textContent="";
        console.log(error);
    }finally{
        button.disabled=false;
        button.textContent="Get Quote"
    }
}
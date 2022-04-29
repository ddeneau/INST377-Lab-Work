function dataHandler(dataIn) {

}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const sub = document.querySelector('.button is-primary'); // Get the submit button.
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  sub.addEventListener('mouseover', sub.style.setProperty('display: none')); // Change the display style on mouse over.
  form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
    console.log('form submission'); // this is substituting for a "breakpoint"
    console.table(arrayFromJson.data); // this is called "dot notation"
    // arrayFromJson.data - we're accessing a key called 'data' on the returned object
    // it contains all 1,000 records we need
  });
}

dataHandler();
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests

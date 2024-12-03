const accessKey = '';
const searchResultsContainer = document.querySelector('.search-results');
const form = document.querySelector('#form');
const inputElement = document.querySelector('#search-input');
const showMoreButton = document.querySelector('#show-more-button');
let searchInput;
let page = 1;

async function main() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${searchInput}&page=${page}`);
        const x = await response.json();
            
        for (const result of x.results) {
            const container = document.createElement('div'); // creating a div
            container.classList.add('search-result'); // putting a class similar to the div in HTML file
            const imageElement = document.createElement('img'); // creating an img element to put inside the container div
            imageElement.src = result.urls.full; // putting the URL in src through for loop
            container.appendChild(imageElement); // appending the image into container
            searchResultsContainer.appendChild(container); // appending the whole container into the parent div one by one
        } 
    } catch(error) {
        console.log('Error found', error);
    }
}

// Search Button
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // to prevent auto submit
    searchInput = inputElement.value;
    main();
    searchResultsContainer.innerHTML = "";
    form.reset(); // this will clear the search text field after clicking the search button
});

// Show Moer Button
showMoreButton.addEventListener('click', () => {
    page++;
    main();
});

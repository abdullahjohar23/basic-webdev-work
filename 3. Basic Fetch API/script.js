const Root = document.querySelector('#root');

fetch('http://universities.hipolabs.com/search?country=Bangladesh')
    .then((res) => res.json()) // converting to json after fetching
    .then(data => { // after json conversion we're getting actual response
        for (let i = 0; i < data.length; i++) {
            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <h4>${data[i].name}</h4>
                <a href="${data[i].web_pages[0]}" target="_blank">Website</a>
            `;
            Root.append(infoDiv)
        }
    })

    .catch(() => {
        console.log('failed'); // if .then fails, .catch will return
    });
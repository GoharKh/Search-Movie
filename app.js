const apiKey = "k_ll79h0du";

const searched = document.getElementById('searched');
const btn = document.getElementById("btn")
const loader = document.querySelector('.loader')
const app = document.getElementById("app")
searched.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) searchMovie()
})

async function searchMovie() {
    loader.id = 'isLoaded'
    clearData()
    try {
        const result = await axios.get(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searched.value}`)
        console.log(result.data.results)
        searchedItem(result.data.results)

    }
    catch(error) {
        alert('error')
    }
    finally {
        loader.id = ''
        console.log('done')
    }
}

function searchedItem(result) {
    result.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('package')
        card.innerHTML = ` <li>
        <img class = "img" src="${element.image}">
        <p class="bc">${element.title}</p>
        <p class="bc">${element.description}</p>        
        </li>
        `
        app.appendChild(card)
    })
}

function clearData() {
    app.innerHTML = ''
}

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true) || 
("GET", "https://pokeapi.co/api/v2/type", true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    }
    else if(xhr.readyState === 4 && xhr.status !== 200){
        
    }
}

function showData(data) {
    console.log(data)
    for(let i =0; i < data.length; i++) {
        const pokemon = document.createElement("h1")
        pokemon.textContent = data[i].name
        document.body.appendChild(pokemon)

        const url = document.createElement("h3")
        url.textContent = data[i].url
        document.body.appendChild(url)

        const type = document.createElement("h3")
        type.textContent = data[i].type
        document.body.appendChild(type)
    }
}
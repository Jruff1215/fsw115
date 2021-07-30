axios.get("https://digimon-api.vercel.app/api/digimon")
.then(response => {
    for (let i = 0; i < response.data.length; i++){
        var h1 = document.createElement("h1")
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    var img = document.createElement("img")
        img.src = response.data[i].img
        document.body.appendChild(img)
    var h3 = document.createElement("h3")
        h3.textContent = response.data[i].level
        document.body.appendChild(h3)
        }
})
.catch(error => console.log(error))


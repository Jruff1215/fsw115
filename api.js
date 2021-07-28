var digimon = `[
        {
            "name": "Koromon",
            "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
            "level": "In Training"
        },
        {
            "name": "Tsunomon",
            "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
            "level": "In Training"
        },
        {
            "name": "Yokomon",
            "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
            "level": "In Training"
        },
        {
            "name": "Motimon",
            "img": "https://digimon.shadowsmith.com/img/motimon.jpg",
            "level": "In Training"
        },
        {
            "name": "Tanemon",
            "img": "https://digimon.shadowsmith.com/img/tanemon.jpg",
            "level": "In Training"
        },
        {
            "name": "Bukamon",
            "img": "https://digimon.shadowsmith.com/img/bukamon.jpg",
            "level": "In Training"
        },
        {
            "name": "Tokomon",
            "img": "https://digimon.shadowsmith.com/img/tokomon.jpg",
            "level": "In Training"
        },
        {
            "name": "Agumon",
            "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Gabumon",
            "img": "https://digimon.shadowsmith.com/img/gabumon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Biyomon",
            "img": "https://digimon.shadowsmith.com/img/biyomon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Tentomon",
            "img": "https://digimon.shadowsmith.com/img/tentomon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Palmon",
            "img": "https://digimon.shadowsmith.com/img/palmon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Gomamon",
            "img": "https://digimon.shadowsmith.com/img/gomamon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Patamon",
            "img": "https://digimon.shadowsmith.com/img/patamon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Kuwagamon",
            "img": "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
            "level": "Champion"
        },
        {
            "name": "Greymon",
            "img": "https://digimon.shadowsmith.com/img/greymon.jpg",
            "level": "Champion"
        },
        {
            "name": "Shellmon",
            "img": "https://digimon.shadowsmith.com/img/shellmon.jpg",
            "level": "Champion"
        },
        {
            "name": "Garurumon",
            "img": "https://digimon.shadowsmith.com/img/garurumon.jpg",
            "level": "Champion"
        },
        {
            "name": "Seadramon",
            "img": "https://digimon.shadowsmith.com/img/seadramon.jpg",
            "level": "Champion"
        },
        {
            "name": "Monochromon",
            "img": "https://digimon.shadowsmith.com/img/monochromon.jpg",
            "level": "Champion"
        },
        {
            "name": "Birdramon",
            "img": "https://digimon.shadowsmith.com/img/birdramon.jpg",
            "level": "Champion"
        },
        {
            "name": "Meramon",
            "img": "https://digimon.shadowsmith.com/img/meramon.jpg",
            "level": "Champion"
        },
        {
            "name": "Kabuterimon",
            "img": "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
            "level": "Champion"
        },
        {
            "name": "Andromon",
            "img": "https://digimon.shadowsmith.com/img/andromon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "Togemon",
            "img": "https://digimon.shadowsmith.com/img/togemon.jpg",
            "level": "Champion"
        },
        {
            "name": "Numemon",
            "img": "https://digimon.shadowsmith.com/img/numemon.jpg",
            "level": "Champion"
        },
        {
            "name": "Monzaemon",
            "img": "https://digimon.shadowsmith.com/img/monzaemon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "Ikkakumon",
            "img": "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
            "level": "Champion"
        },
        {
            "name": "Unimon",
            "img": "https://digimon.shadowsmith.com/img/unimon.jpg",
            "level": "Champion"
        },
        {
            "name": "Leomon",
            "img": "https://digimon.shadowsmith.com/img/leomon.jpg",
            "level": "Champion"
        },
        {
            "name": "Ogremon",
            "img": "https://digimon.shadowsmith.com/img/ogremon.jpg",
            "level": "Champion"
        },
        {
            "name": "Devimon",
            "img": "https://digimon.shadowsmith.com/img/devimon.jpg",
            "level": "Champion"
        },
        {
            "name": "Frigimon",
            "img": "https://digimon.shadowsmith.com/img/frigimon.jpg",
            "level": "Champion"
        },
        {
            "name": "Mojyamon",
            "img": "https://digimon.shadowsmith.com/img/mojyamon.jpg",
            "level": "Champion"
        },
        {
            "name": "Sukamon",
            "img": "https://digimon.shadowsmith.com/img/sukamon.jpg",
            "level": "Champion"
        },
        {
            "name": "Centarumon",
            "img": "https://digimon.shadowsmith.com/img/centarumon.jpg",
            "level": "Champion"
        },
        {
            "name": "Bakemon",
            "img": "https://digimon.shadowsmith.com/img/bakemon.jpg",
            "level": "Champion"
        },
        {
            "name": "Elecmon",
            "img": "https://digimon.shadowsmith.com/img/elecmon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Botamon",
            "img": "https://digimon.shadowsmith.com/img/botamon.jpg",
            "level": "Fresh"
        },
        {
            "name": "Punimon",
            "img": "https://digimon.shadowsmith.com/img/punimon.jpg",
            "level": "Fresh"
        },
        {
            "name": "Poyomon",
            "img": "https://digimon.shadowsmith.com/img/poyomon.jpg",
            "level": "Fresh"
        },
        {
            "name": "Yuramon",
            "img": "https://digimon.shadowsmith.com/img/yuramon.jpg",
            "level": "Fresh"
        },
        {
            "name": "Angemon",
            "img": "https://digimon.shadowsmith.com/img/angemon.jpg",
            "level": "Champion"
        },
        {
            "name": "Whamon",
            "img": "https://digimon.shadowsmith.com/img/whamon.jpg",
            "level": "Champion"
        },
        {
            "name": "Drimogemon",
            "img": "https://digimon.shadowsmith.com/img/drimogemon.jpg",
            "level": "Champion"
        },
        {
            "name": "Etemon",
            "img": "https://digimon.shadowsmith.com/img/etemon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "Gazimon",
            "img": "https://digimon.shadowsmith.com/img/gazimon.jpg",
            "level": "Rookie"
        },
        {
            "name": "Pagumon",
            "img": "https://digimon.shadowsmith.com/img/pagumon.jpg",
            "level": "In Training"
        },
        {
            "name": "SkullGreymon",
            "img": "https://digimon.shadowsmith.com/img/skullgreymon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "Kokatorimon",
            "img": "https://digimon.shadowsmith.com/img/kokatorimon.jpg",
            "level": "Champion"
        },
        {
            "name": "Tyrannomon",
            "img": "https://digimon.shadowsmith.com/img/tyrannomon.jpg",
            "level": "Champion"
        },
        {
            "name": "Piximon",
            "img": "https://digimon.shadowsmith.com/img/piximon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "Datamon",
            "img": "https://digimon.shadowsmith.com/img/datamon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "MetalGreymon",
            "img": "https://digimon.shadowsmith.com/img/metalgreymon.jpg",
            "level": "Ultimate"
        },
        {
            "name": "DemiDevimon",
            "img": "https://digimon.shadowsmith.com/img/demidevimon.jpg",
            "level": "Rookie"
        },
        {
            "name": "WereGarurumon",
            "img": "https://digimon.shadowsmith.com/img/weregarurumon.jpg",
            "level": "Ultimate"
        },
        {
            
            "name": "Digitamamon",
            "img": "https://digimon.shadowsmith.com/img/digitamamon.jpg",
            "level": "Ultimate"
        
        }
    ]`

/*var obj = JSON.parse(digimon)
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data => console.log(data));
json.stringify(data)*/

fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Network Response Error");
        }
    })
    .then(data => {
        console.log(data);
        displayData(data)
    })
    .catch((error) => console.error("Fetch Error:", error));

function displayData(data) {
    for (let i = 0; i < data.length; i++){
        var h1 = document.createElement("h1")
        h1.textContent = data[i].name
        document.body.appendChild(h1)
    var img = document.createElement("img")
        img.src = data[i].img
        document.body.appendChild(img)
    var h3 = document.createElement("h3")
        h3.textContent = data[i].level
        document.body.appendChild(h3)
        }
    
    }

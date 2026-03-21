const divFotoJugador = document.getElementById('fotoJugador')
const divFotoEnemigo = document.getElementById('fotoEnemigo')
const sectionpantallaInicio = document.getElementById('pantallaInicio')
const sectionseleccionarAtaque = document.getElementById('seleccionarAtaque')
const sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'

const botonIniciar = document.getElementById('botonIniciar')
const botonReiniciar = document.getElementById('botonReiniciar')

const spanPokemonJugador = document.getElementById('pokemonJugador')
const sectionseleccionarPokemon = document.getElementById('seleccionaPokemon')
const spanPokemonEnemigo = document.getElementById("pokemonEnemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataquesJugador")
const ataquesEnemigo = document.getElementById("ataquesEnemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("verMapa")
const mapa = document.getElementById("mapa")

let pokemones = []
let botones = []
let ataqueJugador = ""
let ataqueEnemigo = ""
let opcioDePokemon
let ataquesPokemonEnemigo

let pokemonJugador
let pokemonJugadorObjeto
let ataquesPokemon
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "/IMAGENES/MAPA.png"

let anchoMapa = window.innerWidth - 80
const anchoMaxMap = 1500
if (anchoMapa > anchoMaxMap) { anchoMapa = anchoMaxMap - 80 }
mapa.width = anchoMapa
mapa.height = anchoMapa * 600 / 1450

class Pokemon {
    constructor(nombre, imagen, imagenCanvas) {
        this.nombre = nombre
        this.imagen = imagen
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = imagenCanvas
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarPokemon() {
        lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto)
    }
}

let zorua = new Pokemon('Zorua', '/IMAGENES/TARJETACESAR.png', '/IMAGENES/CESAR8px.png')
let emolga = new Pokemon('Emolga', '/IMAGENES/TARJETAELIZABETH.png', '/IMAGENES/ELIZABETH8px.png')
let weavile = new Pokemon('Weavile', '/IMAGENES/TARJETAHECTOR.png', '/IMAGENES/HECTOR8px.png')
let tyrantrum = new Pokemon('Tyrantrum', '/IMAGENES/TARJETAKARIM.png', '/IMAGENES/KARIM8px.png')
let metagross = new Pokemon('Metagross', '/IMAGENES/TARJETAMICHAEL.png', '/IMAGENES/MICHAEL8px.png')
let grookey = new Pokemon('Grookey', '/IMAGENES/TARJETANACHO.png', '/IMAGENES/NACHO8px.png')
let chikorita = new Pokemon('Chikorita', '/IMAGENES/TARJETASANTI.png', '/IMAGENES/SANTI8px.png')

let zoruaEnemigo = new Pokemon('Zorua', '/IMAGENES/TARJETACESAR.png', '/IMAGENES/CESAR8px.png')
let emolgaEnemigo = new Pokemon('Emolga', '/IMAGENES/TARJETAELIZABETH.png', '/IMAGENES/ELIZABETH8px.png')
let weavileEnemigo = new Pokemon('Weavile', '/IMAGENES/TARJETAHECTOR.png', '/IMAGENES/HECTOR8px.png')
let tyrantrumEnemigo = new Pokemon('Tyrantrum', '/IMAGENES/TARJETAKARIM.png', '/IMAGENES/KARIM8px.png')
let metagrossEnemigo = new Pokemon('Metagross', '/IMAGENES/TARJETAMICHAEL.png', '/IMAGENES/MICHAEL8px.png')
let grookeyEnemigo = new Pokemon('Grookey', '/IMAGENES/TARJETANACHO.png', '/IMAGENES/NACHO8px.png')
let chikoritaEnemigo = new Pokemon('Chikorita', '/IMAGENES/TARJETASANTI.png', '/IMAGENES/SANTI8px.png')

pokemones.push(zorua, emolga, weavile, tyrantrum, metagross, grookey, chikorita)

zorua.ataques.push(
    { nombre: 'Bola Sombra', id: 'botonBolaSombra' },
    { nombre: 'Rencor Reprimido', id: 'botonRencorReprimido' },
    { nombre: 'Triturar', id: 'botonTriturar' },
    { nombre: 'Pulso Umbrio', id: 'botonPulsoUmbrio' },
)

zoruaEnemigo.ataques.push(
    { nombre: 'Bola Sombra', id: 'botonBolaSombra' },
    { nombre: 'Rencor Reprimido', id: 'botonRencorReprimido' },
    { nombre: 'Triturar', id: 'botonTriturar' },
    { nombre: 'Pulso Umbrio', id: 'botonPulsoUmbrio' },
)

emolga.ataques.push(
    { nombre: 'Impactrueno', id: 'botonImpactrueno' },
    { nombre: 'Ataque Rapido', id: 'botonAtaqueRapido' },
    { nombre: 'Chispa', id: 'botonChispa' },
    { nombre: 'Ataque Ala', id: 'botonAtaqueAla' },
)

emolgaEnemigo.ataques.push(
    { nombre: 'Impactrueno', id: 'botonImpactrueno' },
    { nombre: 'Ataque Rapido', id: 'botonAtaqueRapido' },
    { nombre: 'Chispa', id: 'botonChispa' },
    { nombre: 'Ataque Ala', id: 'botonAtaqueAla' },
)

weavile.ataques.push(
    { nombre: 'Desarme', id: 'botonDesarme' },
    { nombre: 'Chuzos', id: 'botonChuzos' },
    { nombre: 'Canto Helado', id: 'botonCantoHelado' },
    { nombre: 'Triple Axel', id: 'botonTripleAxel' },
)

weavileEnemigo.ataques.push(
    { nombre: 'Desarme', id: 'botonDesarme' },
    { nombre: 'Chuzos', id: 'botonChuzos' },
    { nombre: 'Canto Helado', id: 'botonCantoHelado' },
    { nombre: 'Triple Axel', id: 'botonTripleAxel' },
)

tyrantrum.ataques.push(
    { nombre: 'Cola Dragon', id: 'botonColaDragon' },
    { nombre: 'Terremoto', id: 'botonTerremoto' },
    { nombre: 'Rayo Meteorico', id: 'botonRayoMeteorico' },
    { nombre: 'Lanza Rocas', id: 'botonLanzaRocas' },
)

tyrantrumEnemigo.ataques.push(
    { nombre: 'Cola Dragon', id: 'botonColaDragon' },
    { nombre: 'Terremoto', id: 'botonTerremoto' },
    { nombre: 'Rayo Meteorico', id: 'botonRayoMeteorico' },
    { nombre: 'Lanza Rocas', id: 'botonLanzaRocas' },
)

metagross.ataques.push(
    { nombre: 'Puño Meteoro', id: 'botonPuñoMeteoro' },
    { nombre: 'Cabezazo Zen', id: 'botonCabezazoZen' },
    { nombre: 'Puño Bala', id: 'botonPuñoBala' },
    { nombre: 'Corte Furia', id: 'botonCorteFuria' },
)

metagrossEnemigo.ataques.push(
    { nombre: 'Puño Meteoro', id: 'botonPuñoMeteoro' },
    { nombre: 'Cabezazo Zen', id: 'botonCabezazoZen' },
    { nombre: 'Puño Bala', id: 'botonPuñoBala' },
    { nombre: 'Corte Furia', id: 'botonCorteFuria' },
)

grookey.ataques.push(
    { nombre: 'Hoja Afilada', id: 'botonHojaAfilada' },
    { nombre: 'Arañazo', id: 'botonArañazo' },
    { nombre: 'Hierba Lazo', id: 'botonHierbaLazo' },
    { nombre: 'Energibola', id: 'botonEnergibola' },
)

grookeyEnemigo.ataques.push(
    { nombre: 'Hoja Afilada', id: 'botonHojaAfilada' },
    { nombre: 'Arañazo', id: 'botonArañazo' },
    { nombre: 'Hierba Lazo', id: 'botonHierbaLazo' },
    { nombre: 'Energibola', id: 'botonEnergibola' },
)

chikorita.ataques.push(
    { nombre: 'Latigo Cepa', id: 'botonLatigoCepa' },
    { nombre: 'Placaje', id: 'botonPlacaje' },
    { nombre: 'Hoja Magica', id: 'botonHojaMagica' },
    { nombre: 'Golpe Cuerpo', id: 'botonGolpeCuerpo' },
)

chikoritaEnemigo.ataques.push(
    { nombre: 'Latigo Cepa', id: 'botonLatigoCepa' },
    { nombre: 'Placaje', id: 'botonPlacaje' },
    { nombre: 'Hoja Magica', id: 'botonHojaMagica' },
    { nombre: 'Golpe Cuerpo', id: 'botonGolpeCuerpo' },
)

function pantallaInicio() {
    sectionseleccionarPokemon.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionseleccionarAtaque.style.display = 'none'
    sectionpantallaInicio.style.display = 'flex'

    botonIniciar.addEventListener('click', iniciarJuego)
}

function iniciarJuego() {
    sectionseleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionpantallaInicio.style.display = 'none'
    sectionseleccionarPokemon.style.display = 'flex'

    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo

    pokemones.forEach((pokemon) => {
        opcioDePokemon = `
            <input type="radio" name="pokemon" id=${pokemon.nombre} />
            <label class="tarjetadePokemon" for="${pokemon.nombre}">
                <img src=${pokemon.imagen} alt=${pokemon.nombre}>
                <p>${pokemon.nombre}</p>
            </label>
            `
        contenedorTarjetas.innerHTML += opcioDePokemon
    })

    document.getElementById('botonPokemon').addEventListener('click', seleccionarPokemonJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemonJugador() {
    if (document.getElementById('Zorua').checked) {
        pokemonJugador = 'Zorua'
    } else if (document.getElementById('Emolga').checked) {
        pokemonJugador = 'Emolga'
    } else if (document.getElementById('Weavile').checked) {
        pokemonJugador = 'Weavile'
    } else if (document.getElementById('Tyrantrum').checked) {
        pokemonJugador = 'Tyrantrum'
    } else if (document.getElementById('Metagross').checked) {
        pokemonJugador = 'Metagross'
    } else if (document.getElementById('Grookey').checked) {
        pokemonJugador = 'Grookey'
    } else if (document.getElementById('Chikorita').checked) {
        pokemonJugador = 'Chikorita'
    } else {
        alert("Selecciona un Pokemon")
        return
    }

    spanPokemonJugador.innerHTML = pokemonJugador
    extraerAtaques(pokemonJugador)
    sectionseleccionarPokemon.style.display = "none"
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(pokemonJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    })

    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            ataqueJugador = e.target.textContent.toUpperCase()
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarPokemonEnemigo(enemigo) {
    spanPokemonEnemigo.innerHTML = enemigo.nombre
    divFotoJugador.innerHTML = `<img src="${pokemonJugadorObjeto.imagen}" alt=${pokemonJugadorObjeto.nombre}>`
    divFotoEnemigo.innerHTML = `<img src="${enemigo.imagen}" alt=${enemigo.nombre}>`
    ataquesPokemonEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesPokemonEnemigo.length - 1)
    ataqueEnemigo = ataquesPokemonEnemigo[ataqueAleatorio].nombre.toUpperCase()
    combate()
}

function combate() {
    if (ataqueJugador === ataqueEnemigo) {
        crearMensaje("EMPATE")
    }
    else if (
        (
            (ataqueJugador == "CHUZOS" || ataqueJugador == "CANTO HELADO" || ataqueJugador == "TRIPLE AXEL") &&
            (ataqueEnemigo == "COLA DRAGON" || ataqueEnemigo == "ATAQUE ALA" || ataqueEnemigo == "HOJA AFILADA" || ataqueEnemigo == "TERREMOTO")
        ) ||
        (
            ataqueJugador == "TERREMOTO" &&
            (ataqueEnemigo == "IMPACTRUENO" || ataqueEnemigo == "CHISPA" || ataqueEnemigo == "PUÑO METEORO" || ataqueEnemigo == "PUÑO BALA" || ataqueEnemigo == "LANZA ROCAS")
        ) ||
        (
            (ataqueJugador == "TRITURAR" || ataqueJugador == "PULSO UMBRIO" || ataqueJugador == "DESARME") &&
            (ataqueEnemigo == "CABEZAZO ZEN")
        ) ||
        (
            (ataqueJugador == "BOLA SOMBRA" || ataqueJugador == "RENCOR REPRIMIDO") &&
            (ataqueEnemigo == "CABEZAZO ZEN" || ataqueEnemigo == "BOLA SOMBRA" || ataqueEnemigo == "RENCOR REPRIMIDO")
        ) ||
        (
            (ataqueJugador == "HOJA AFILADA" || ataqueJugador == "HIERBA LAZO" || ataqueJugador == "ENERGIBOLA" || ataqueJugador == "LATIGO CEPA" || ataqueJugador == "HOJA MAGICA") &&
            (ataqueEnemigo == "TERREMOTO" || ataqueEnemigo == "LANZA ROCAS" || ataqueEnemigo == "RAYO METEORICO")
        ) ||
        (
            ataqueJugador == "ATAQUE ALA" &&
            (ataqueEnemigo == "HOJA AFILADA" || ataqueEnemigo == "LATIGO CEPA" || ataqueEnemigo == "CORTE FURIA" || ataqueEnemigo == "HIERBA LAZO")
        ) ||
        (
            (ataqueJugador == "IMPACTRUENO" || ataqueJugador == "CHISPA") &&
            (ataqueEnemigo == "ATAQUE ALA")
        ) ||
        (
            (ataqueJugador == "PUÑO METEORO" || ataqueJugador == "PUÑO BALA") &&
            (ataqueEnemigo == "CHUZOS" || ataqueEnemigo == "LANZA ROCAS" || ataqueEnemigo == "CANTO HELADO")
        ) ||
        (
            (ataqueJugador == "RAYO METEORICO" || ataqueJugador == "LANZA ROCAS") &&
            (ataqueEnemigo == "ATAQUE ALA" || ataqueEnemigo == "TRIPLE AXEL")
        ) ||
        (
            ataqueJugador == "CORTE FURIA" &&
            (ataqueEnemigo == "HOJA MAGICA" || ataqueEnemigo == "LATIGO CEPA")
        ) ||
        (
            ataqueJugador == "CABEZAZO ZEN" &&
            (ataqueEnemigo == "ATAQUE RAPIDO" || ataqueEnemigo == "PLACAJE" || ataqueEnemigo == "GOLPE CUERPO")
        ) ||
        (
            (ataqueJugador == "ATAQUE RAPIDO" || ataqueJugador == "PLACAJE" || ataqueJugador == "GOLPE CUERPO" || ataqueJugador == "ARAÑAZO") &&
            (ataqueEnemigo == "ARAÑAZO" || ataqueEnemigo == "CORTE FURIA")
        ) ||
        (
            ataqueJugador == "COLA DRAGON" &&
            (ataqueEnemigo == "IMPACTRUENO" || ataqueEnemigo == "CHISPA")
        )
    ) {
        crearMensaje("¡SÚPER EFECTIVO!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (
        (
            (ataqueEnemigo == "CHUZOS" || ataqueEnemigo == "CANTO HELADO" || ataqueEnemigo == "TRIPLE AXEL") &&
            (ataqueJugador == "COLA DRAGON" || ataqueJugador == "ATAQUE ALA" || ataqueJugador == "HOJA AFILADA" || ataqueJugador == "TERREMOTO")
        ) ||
        (
            ataqueEnemigo == "TERREMOTO" &&
            (ataqueJugador == "IMPACTRUENO" || ataqueJugador == "CHISPA" || ataqueJugador == "PUÑO METEORO" || ataqueJugador == "PUÑO BALA" || ataqueJugador == "LANZA ROCAS")
        ) ||
        (
            (ataqueEnemigo == "TRITURAR" || ataqueEnemigo == "PULSO UMBRIO" || ataqueEnemigo == "DESARME") &&
            (ataqueJugador == "CABEZAZO ZEN")
        ) ||
        (
            (ataqueEnemigo == "BOLA SOMBRA" || ataqueEnemigo == "RENCOR REPRIMIDO") &&
            (ataqueJugador == "CABEZAZO ZEN" || ataqueJugador == "BOLA SOMBRA" || ataqueJugador == "RENCOR REPRIMIDO")
        ) ||
        (
            (ataqueEnemigo == "HOJA AFILADA" || ataqueEnemigo == "HIERBA LAZO" || ataqueEnemigo == "ENERGIBOLA" || ataqueEnemigo == "LATIGO CEPA" || ataqueEnemigo == "HOJA MAGICA") &&
            (ataqueJugador == "TERREMOTO" || ataqueJugador == "LANZA ROCAS" || ataqueJugador == "RAYO METEORICO")
        ) ||
        (
            ataqueEnemigo == "ATAQUE ALA" &&
            (ataqueJugador == "HOJA AFILADA" || ataqueJugador == "LATIGO CEPA" || ataqueJugador == "CORTE FURIA" || ataqueJugador == "HIERBA LAZO")
        ) ||
        (
            (ataqueEnemigo == "IMPACTRUENO" || ataqueEnemigo == "CHISPA") &&
            (ataqueJugador == "ATAQUE ALA")
        ) ||
        (
            (ataqueEnemigo == "PUÑO METEORO" || ataqueEnemigo == "PUÑO BALA") &&
            (ataqueJugador == "CHUZOS" || ataqueJugador == "LANZA ROCAS" || ataqueJugador == "CANTO HELADO")
        ) ||
        (
            (ataqueEnemigo == "RAYO METEORICO" || ataqueEnemigo == "LANZA ROCAS") &&
            (ataqueJugador == "ATAQUE ALA" || ataqueJugador == "TRIPLE AXEL")
        ) ||
        (
            ataqueEnemigo == "CORTE FURIA" &&
            (ataqueJugador == "HOJA MAGICA" || ataqueJugador == "LATIGO CEPA")
        ) ||
        (
            ataqueEnemigo == "CABEZAZO ZEN" &&
            (ataqueJugador == "ATAQUE RAPIDO" || ataqueJugador == "PLACAJE" || ataqueJugador == "GOLPE CUERPO")
        ) ||
        (
            (ataqueEnemigo == "ATAQUE RAPIDO" || ataqueEnemigo == "PLACAJE" || ataqueEnemigo == "GOLPE CUERPO" || ataqueEnemigo == "ARAÑAZO") &&
            (ataqueJugador == "ARAÑAZO" || ataqueJugador == "CORTE FURIA")
        ) ||
        (
            ataqueEnemigo == "COLA DRAGON" &&
            (ataqueJugador == "IMPACTRUENO" || ataqueJugador == "CHISPA")
        )
    ) {
        crearMensaje("No fue muy efectivo")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    else {
        crearMensaje("EMPATE")
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo <= 0) {
        crearMensajeFinal("¡FELICIDADES HAS GANADO!")
    } else if (vidasJugador <= 0) {
        crearMensajeFinal("LO SIENTO, HAS PERDIDO")
    }
}

function crearMensaje(resultado) {
    let nuevoataqueJugador = document.createElement("p")
    let nuevoataqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoataqueJugador.innerHTML = "Tu Pokemon ataco con " + ataqueJugador
    nuevoataqueEnemigo.innerHTML = "El Pokemon del enemigo ataco con " + ataqueEnemigo

    ataquesJugador.appendChild(nuevoataqueJugador)
    ataquesEnemigo.appendChild(nuevoataqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"

    botones.forEach((boton) => {
        boton.disabled = true
    })
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    pokemonJugadorObjeto.x = pokemonJugadorObjeto.x + pokemonJugadorObjeto.velocidadx
    pokemonJugadorObjeto.y = pokemonJugadorObjeto.y + pokemonJugadorObjeto.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height)
    if (pokemonJugadorObjeto.x < 0) pokemonJugadorObjeto.x = 0
    if (pokemonJugadorObjeto.y < 0) pokemonJugadorObjeto.y = 0
    if (pokemonJugadorObjeto.x + pokemonJugadorObjeto.ancho > mapa.width) {
        pokemonJugadorObjeto.x = mapa.width - pokemonJugadorObjeto.ancho
    }
    if (pokemonJugadorObjeto.y + pokemonJugadorObjeto.alto > mapa.height) {
        pokemonJugadorObjeto.y = mapa.height - pokemonJugadorObjeto.alto
    }
    pokemonJugadorObjeto.pintarPokemon()
    zoruaEnemigo.pintarPokemon()
    emolgaEnemigo.pintarPokemon()
    weavileEnemigo.pintarPokemon()
    tyrantrumEnemigo.pintarPokemon()
    metagrossEnemigo.pintarPokemon()
    grookeyEnemigo.pintarPokemon()
    chikoritaEnemigo.pintarPokemon()

    if (pokemonJugadorObjeto.velocidadx !== 0 || pokemonJugadorObjeto.velocidady !== 0) {
        revisarColision(zoruaEnemigo)
        revisarColision(emolgaEnemigo)
        revisarColision(weavileEnemigo)
        revisarColision(tyrantrumEnemigo)
        revisarColision(metagrossEnemigo)
        revisarColision(grookeyEnemigo)
        revisarColision(chikoritaEnemigo)
    }
}

function moverDerecha() {
    pokemonJugadorObjeto.velocidadx = 5

}

function moverIzquierda() {
    pokemonJugadorObjeto.velocidadx = -5
}

function moverAbajo() {
    pokemonJugadorObjeto.velocidady = 5
}

function moverArriba() {
    pokemonJugadorObjeto.velocidady = -5
}

function detenerMovimiento() {
    pokemonJugadorObjeto.velocidadx = 0
    pokemonJugadorObjeto.velocidady = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "W":
            moverArriba()
            break
        case "w":
            moverArriba()
            break
        case "S":
            moverAbajo()
            break
        case "s":
            moverAbajo()
            break
        case "A":
            moverIzquierda()
            break
        case "a":
            moverIzquierda()
            break
        case "D":
            moverDerecha()
            break
        case "d":
            moverDerecha()
            break
    }

}

function iniciarMapa() {
    pokemonJugadorObjeto = obtenerObjetoPokemon(pokemonJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoPokemon() {
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador == pokemones[i].nombre) {
            return pokemones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaPokemon = pokemonJugadorObjeto.y
    const abajoPokemon = pokemonJugadorObjeto.y + pokemonJugadorObjeto.alto
    const izquierdaPokemon = pokemonJugadorObjeto.x
    const derechaPokemon = pokemonJugadorObjeto.x + pokemonJugadorObjeto.ancho

    if (
        abajoPokemon < arribaEnemigo ||
        arribaPokemon > abajoEnemigo ||
        derechaPokemon < izquierdaEnemigo ||
        izquierdaPokemon > derechaEnemigo
    ) {
        return;
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionseleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    sectionpantallaInicio.style.display = 'none'
    seleccionarPokemonEnemigo(enemigo)
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaPokemon = pokemonJugadorObjeto.y
    const abajoPokemon = pokemonJugadorObjeto.y + pokemonJugadorObjeto.alto
    const izquierdaPokemon = pokemonJugadorObjeto.x
    const derechaPokemon = pokemonJugadorObjeto.x + pokemonJugadorObjeto.ancho

    if (
        abajoPokemon < arribaEnemigo ||
        arribaPokemon > abajoEnemigo ||
        derechaPokemon < izquierdaEnemigo ||
        izquierdaPokemon > derechaEnemigo
    ) {
        return;
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionseleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    sectionpantallaInicio.style.display = 'none'
    seleccionarPokemonEnemigo(enemigo)
}
window.addEventListener("load", pantallaInicio)
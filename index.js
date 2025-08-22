const divparatemperatura = document.getElementById("temperatura")
const noche = document.getElementById("noche")
const eliminador = document.getElementById("eliminar")

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas,US&appid=092d0bdfb66c511f17742250733ffd1c&units=metric')

.then(response => {
    if (!response.ok) throw new Error('Error');
    return response.json();
})
.then(data => {
    console.log(data);
    
    const temperatura = data.main.temp;
    
    divparatemperatura.innerHTML = `
        <img class="tempDiv__img img--termometro" src="termometro.png">
        <p class="temperatura">
        ${temperatura}°C
        <p>
    `
})
.catch(error => {
    console.error("Error al obtener el clima:", error);
});

noche.addEventListener("click",()=>{
    window.location.href = "trabajoFinalNoche.html";
})

eliminador.addEventListener("click",()=>{
    eliminador.remove();
})

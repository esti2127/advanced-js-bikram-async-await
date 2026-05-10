//DESARROLLA AQUI TUS SOLUCIONES

/**Declaramos la función (función declarada) que nos devolverá una promeso que deberemos resolver */

const getRandomPokemon = async () => { 
    /**Try para el caso en el que todo vaya bien */
    try {
        /**La idea es generar un id aleatorio entre 1 y el límite de la pokeDex, que según google es de 1025 pokemons.*/
        const pokedexCantidad = 1025;
        /** No existe el pokemon con id 0, así que, al número que sale después de haber multiplicado el número random entre 0 y 1 que te devuelve math.random() con el 1025 de la cantidad de los pokemons y de haber pasado ese número a entero con el floor, hay que sumarle 1.*/
        const randomId = Math.floor(Math.random() * (pokedexCantidad)) + 1;

        /**Fetch hace la llamada a la API. Ahora, se usa el id que ha salido de manera random en la URL para que salga el bicho */

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        /**First things first el caso excepcional (la negación en este caso). Si, por ejemplo, el pokemon no existe, resp.ok será false. */
        if (!resp.ok) {
        /**El throw le pasa el error al catch. El status es el código de respuesta (ejemplo: 200: todo bien, o 404: page not found*/
            throw (resp.status);
        }

        /**El await le dice a JS que se espere hasta recibir la respuesta de la API y seguir leyendo la siguiente línea (sin el await la respuesta estaría vacía). El json lo usamos para convertir los datos que nos llegan de la API en un objeto. */

        const data = await resp.json();

        //console.log(data)

        return data;
    /**Catch para el caso en el que de un error */

    }
    catch (error) {
        console.log(`Error ${error} al obtener el pokemon`)

    }
};

/**Llamamos a la función */

getRandomPokemon().then((bicho) => {
    console.log("El bicho con el nombre:", bicho.name,); //el .name porque queremos el nombre del pokemon

});












const getImageAndName = async () => {
    try {

        const pokedexCantidad2 = 1025;

        const randomId2 = Math.floor(Math.random() * (pokedexCantidad2)) + 1;

        const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId2}`)

        if (!resp2.ok) {
            throw resp2.status;
        }

        const data2 = await resp2.json();

        // const pokemonInfo = {
        //     nombre: data2.name,
        //     /**haciendo un console.log del data anterior he visto que había URLs tanto en species como en sprites. Species me llevaba a otra página con info del pokemon y sprites me abría la foto de un pokemon. Habían un montón de propiedades con la URL del pokemon. Algunas tenían la foto con el pokemon de espaldas y otras con el pokemon de frente y otras con el pokemon con caracteristicas especiales (Frikadas varias). Por convencionalismo elegi la de frente en default. Perdón por el texto tan largo. */
        //     imagen: data2.sprites.front_default,
        // }


        // return pokemonInfo; ----> El json ya me está dando un objeto, así que esto se puede desestructurar:

        const {name: nombre, sprites: {front_default: imagen}} = data2;

        /**Y así usamos el formato que nos da el ejercicio */

        return { nombre, imagen };

    }
    catch (error2) {
        console.log(`Error ${error2} al obtener el pokemon`)

    }
};

getImageAndName().then((bicho2) => {
    console.log(`Nombre del bicho: ${bicho2.nombre}`, `URL de la imagen: ${bicho2.imagen}`);

});









const printImageAndName = async (pokemon) => {

    try {

        const pokedexCantidad3 = 1025;

        const randomId3 = Math.floor(Math.random() * (pokedexCantidad3)) + 1;

        const resp3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId3}`)

        if (!resp3.ok) {
            throw resp3.status;
        }

        const data3 = await resp3.json();

        const pokemonInfo2 = {
            nombre: data3.name,
            imagen: data3.sprites.front_default,
        }

        /**Sin los parentesis no me coge el return */

        return (

            `<section>
    <img src="${pokemonInfo2.imagen}" alt="${pokemonInfo2.nombre}">
    <h1>${pokemonInfo2.nombre}</h1>
    </section>`)

    }

    catch (error2) {
        console.log(`Error ${error2} al obtener el pokemon`)

    }

};

/**Llamamos a la función. printearInfo contiene el string de la section*/

printImageAndName().then((printearInfo) => {
    /**Aquí añado el printearInfo (el string) en el body del documento visual del HTML*/

    document.body.innerHTML += printearInfo;

});




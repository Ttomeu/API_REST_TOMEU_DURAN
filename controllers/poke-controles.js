const pokemonsjson = require ('../data/pokemons.json')
const pokemon = require("../models/pokemon");

//LLISTAR TOTS EL POKEMONS
exports.listapokemons = async (req, res) => {


    let pokemons = []
    for (let i = 0; i < pokemonsjson.length; i++) {
        let poke = new pokemon(pokemonsjson[i].Nom, pokemonsjson[i].Tipo)
        pokemons.push(poke)

    }
    return res.json(pokemons)
}

//LLISTAR PER ID
exports.listarperid = async (req, res) => {

    const id = req.params.id;
    let resultat = null;

    for (let i = 0; i < pokemonsjson.length; i++) {

        if (pokemonsjson[i].id == id) {

            resultat = new pokemon(
                pokemonsjson[i].id,
                pokemonsjson[i].Nom,
                pokemonsjson[i].Tipo,
                pokemonsjson[i].atac,
                pokemonsjson[i].vida
            );

        }

    }

    return res.json(resultat);
}

// LLISTAR PER NOM
exports.listarpernom = async (req, res) => {

    const nom = req.params.nom;

    for (let i = 0; i < pokemonsjson.length; i++) {

        if (pokemonsjson[i].Nom == nom) {

            let poke = new pokemon(
                pokemonsjson[i].id,
                pokemonsjson[i].Nom,
                pokemonsjson[i].Tipo,
                pokemonsjson[i].atac,
                pokemonsjson[i].vida
            );

            return res.json(poke);
        }
    }
    return res.json(null);
}

exports.listarpertipo = async (req, res) => {
    const tip =[];
    const filtrpTipo = req.query.Tipo;

    for (let i = 0; i < pokemonsjson.length; i++) {

            let poke = new pokemon(
                pokemonsjson[i].id,
                pokemonsjson[i].Nom,
                pokemonsjson[i].Tipo,
                pokemonsjson[i].atac,
                pokemonsjson[i].vida
            );
            console.log(poke);
            if(filtrpTipo !== undefined){
                if(poke.Tipo == filtrpTipo) {
                    tip.push(poke);
                }
            }



    }
    return res.json(tip);


}







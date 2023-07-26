const axios = require('axios')
const errorHandler = require("../utils/errors")

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

// **** Version asyncAwait ****
const getCharById = async (req, res) => {
    const id = parseInt(req.params.id)
    
    try {
        const response = await axios(`${URL_BASE}${id}`);
        
        const { name, species, status, origin, image, gender } = response.data

        const character = {id, name, species, status, origin, image, gender }

        return res.status(200).json(character)
    
    } catch(error) {
        errorHandler(res,error)
    }
}

module.exports = getCharById


// **** Version Promises ****

// const getCharById = (req, res) => {
    
//     const id = parseInt(req.params.id)
//     axios(`${URL_BASE}${id}`)
//     .then(({ data }) => {
//         const { status, name, species, origin, image, gender } = data
//         const character = { id, status, name, species, origin, image, gender}
//         return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
//     })
//     .catch((error)=>{
//         res.status(500).json({error:error.message})
//     })
// }



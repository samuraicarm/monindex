const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]


app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')
    console.log('validate bearer token middleware')
    if (!authToken || authToken.split(' ')[1] !== apiToken) {
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    // move to the next middleware
    next()
})

function handleGetTypes(req, res) {
    res.json(validTypes)
}

app.get('/types', handleGetTypes)

app.get('/pokemon', function handleGetPokemon(req, res) {
    let response = POKEDEX.pokemon;

    // filter our pokemon by name if name query param is present
    if (req.query.name) {
        response = response.filter(pokemon =>
            // case insensitive searching
            pokemon.name.toLowerCase().includes(req.query.name.toLowerCase())
        )
    }

    // filter our pokemon by type if type query param is present
    if (req.query.type) {
        response = response.filter(pokemon =>
            pokemon.type.includes(req.query.type)
        )
    }

    res.json(response)
})
console.log(res.json);

const PORT = 8000

module.exports = app;
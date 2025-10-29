const comicsController = {}

comicsController.getComics = (req, res) => {
    res.json({mensaje: "Hola mundo!"})
}

module.exports = comicsController
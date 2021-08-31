const Film = require("../models/film");

const addFilm = async(name) => {
    const film = Film.build({name});
    await film.save();
    console.log(`Added: ${film.name}`);
}

const editFilm = async(oldName, newName) => {
    const films = await Film.update(
        {name: newName},
        {where: {name: oldName}}
    );

    console.log(`Edited: ${films} film(s)`);
}

const showFilm = async(name) => {
    const films = await Film.findAll({where: {name}});

    for (let film of films) {
        console.log(`Showing: ${film.name}`);
    }
}

const removeFilm = async(name) => {
    const films = await Film.destroy({where: {name}});
    console.log(`Removed: ${films} film(s)`);
}

module.exports = {
    addFilm,
    editFilm,
    showFilm,
    removeFilm
}

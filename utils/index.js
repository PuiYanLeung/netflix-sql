const Song = require("../models/song");
const Album = require("../models/album");
const Artist = require("../models/artist");

const addSong = async(name) => {
    const song = Song.build({name});
    await song.save();
    console.log(`Added: ${song.name}`);
}

const editSong = async(oldName, newName) => {
    const songs = await Song.update(
        {name: newName},
        {where: {name: oldName}}
    );

    console.log(`Edited: ${songs} songs(s)`);
}

const showSong = async(name) => {
    const songs = await Song.findAll({where: {name}});

    for (let song of songs) {
        console.log(`Showing: ${song.name}`);
    }
}

const removeSong = async(name) => {
    const songs = await Song.destroy({where: {name}});
    console.log(`Removed: ${songs} songs(s)`);
}

module.exports = {
    addSong,
    editSong,
    showSong,
    removeSong,
}

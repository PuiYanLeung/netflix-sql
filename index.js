require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const { Sequelize } = require("sequelize");
const { connection } = require("./db");
const {addFilm, editFilm, showFilm, removeFilm} = require("./utils");

const main = async() => {
    const argv = yargs(hideBin(process.argv)).argv;

    try {
        await connection.authenticate();

        if (argv.add && argv.name) {
            //node index.js --add --name 'Test film 4'
            //test pui_edit branch
            
            const { _, add, ...options } = {...argv};
            delete options['$0'];
            console.log(options);
            await addFilm(argv.name); 

        }

        if (argv.edit && argv.name && argv.newName) {
            await editFilm(argv.name, argv.newName);
        }

        if (argv.show && argv.name) {
            await showFilm(argv.name);
        }

        if (argv.remove && argv.name) {
            await removeFilm(argv.name);
        }

        //await connection.close();
        process.exit();
    } catch (error) {
        console.log(error)
    }
}

main();
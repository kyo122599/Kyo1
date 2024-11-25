
const OrientDBClient = require('orientjs').OrientDBClient;


class DBManager {
    #dbConfig;
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    prepareDataBase = async (dbConfig) => {
        this.#dbConfig = dbConfig;
        await this.#run();
    }

    #run = async () => {
        let { client, pool } = await this.setupDatabase();
        this.#orientDB = { client, pool };
    };

    setupDatabase = async () => {
        let client = await OrientDBClient.connect({
            host: this.#dbConfig.host,
            port: this.#dbConfig.port,
            pool: {
                max: 10
            }
        });

        let exists = await client.existsDatabase({
            name: this.#dbConfig.name,
            username: this.#dbConfig.rootUser,
            password: this.#dbConfig.rootPassword
        });

        if (!exists) {
            await client.createDatabase({
                name: this.#dbConfig.name,
                username: this.#dbConfig.rootUser,
                password: this.#dbConfig.rootPassword
            });
            console.log(`[*]DB \'` + this.#dbConfig.name + `\' GENERADA CORRECTAMENTE`);
        }

        let pool = await client.sessions({
            name: this.#dbConfig.name,
            username: this.#dbConfig.user,
            password: this.#dbConfig.password,
            pool: {
                max: 25
            }
        });

        let session = await pool.acquire();
        await session.close();
        console.log(`[*]CONEXION ESTABLECIDA CON LA BD \'` + this.#dbConfig.name + `\'`);
        return { client, pool };
    };


    getConnection = async () => {
        return await this.#orientDB;
    }

}

module.exports = DBManager;
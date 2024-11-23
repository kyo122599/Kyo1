class UsuariosModel {
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;
    }

    // Obtener todos los usuarios
    fetchUsersAll = async () => {
        const session = await this.#orientDB.pool.acquire();
        const data = await session.select().from('cliente').all();
        session.close();
        return data;
    }

    // Crear un usuario
    createUsers = async (object) => {
        const session = await this.#orientDB.pool.acquire();
        const idRecord = await session.create('Vertex', 'cliente').set(object).one();
        session.close();
        return idRecord;
    }

    // Actualizar un usuario
    updateUsers = async (id_cliente, object) => {
        const session = await this.#orientDB.pool.acquire();
        try {
            const result = await session.update('cliente')
                .set(object)
                .where({ id_cliente })
                .return('AFTER')
                .one();

            return result;
        } catch (error) {
            throw new Error('Error actualizando el cliente');
        } finally {
            session.close();
        }
    };

    // Eliminar un usuario
    deleteUser = async (id_cliente) => {
        const session = await this.#orientDB.pool.acquire();
        const deletedCount = await session.delete('Vertex', 'cliente').where({ id_cliente }).one();
        session.close();
        return deletedCount;
    };
}

module.exports = new UsuariosModel();

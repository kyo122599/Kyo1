class VehiculosModel {
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;
    }

    // Obtener todos los vehículos
    fetchVehiclesAll = async () => {
        let session = await this.#orientDB.pool.acquire();
        let data = await session.select().from('vehiculo').all();
        session.close();
        return data;
    }

    // Crear un nuevo vehículo
    createVehicle = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'vehiculo').set(object).one();
        session.close();
        return idRecord;
    }

    // Actualizar un vehículo por ID
    updateVehicle = async (id_vehiculo, object) => {
        let session = await this.#orientDB.pool.acquire();
        try {
            let result = await session.update('vehiculo')
                .set(object)
                .where({ 'id_vehiculo': id_vehiculo })
                .return('AFTER')
                .one();

            return result;
        } catch (error) {
            throw new Error('Error actualizando el vehículo');
        } finally {
            session.close();
        }
    };

    // Eliminar un vehículo por ID
    deleteVehicle = async (id_vehiculo) => {
        let session = await this.#orientDB.pool.acquire();
        let deletedCount = await session.delete('Vertex', 'vehiculo').where({ id_vehiculo }).one();
        session.close();
        return deletedCount;
    }
}

module.exports = new VehiculosModel();

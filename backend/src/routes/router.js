const express = require('express');

class Router {
    #router;
    #UsuariosControllers;
    #VehiculosControllers;

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);
    }

    attachControllers = async (oUsuariosControllers, oVehiculosControllers) => {
        this.#UsuariosControllers = oUsuariosControllers;
        this.#VehiculosControllers = oVehiculosControllers;
    }

    prepareRouting = async () => {
        // Rutas para usuarios
        this.#router.get('/usuarios', this.#UsuariosControllers.fetchUsers);
        this.#router.post('/usuarios', this.#UsuariosControllers.createUsers);
        this.#router.put('/usuarios/:id_cliente', this.#UsuariosControllers.updateUsers);
        this.#router.delete('/usuarios/:id_cliente', this.#UsuariosControllers.deleteUsers);

        // Rutas para vehículos
        this.#router.get('/vehiculos', this.#VehiculosControllers.fetchVehicles);
        this.#router.post('/vehiculos', this.#VehiculosControllers.createVehicle);
        this.#router.put('/vehiculos/:id_vehiculo', this.#VehiculosControllers.updateVehicle);
        this.#router.delete('/vehiculos/:id_vehiculo', this.#VehiculosControllers.deleteVehicle);
    }

    getRouter = () => {
        return this.#router;
    }
}

module.exports = Router;

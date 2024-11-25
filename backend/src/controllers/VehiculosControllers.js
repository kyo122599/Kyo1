const VehiculosModel = require("../models/VehiculosModel");

class VehiculosControllers {

    constructor() {
        Object.preventExtensions(this);
    }

    // Obtener todos los vehículos
    fetchVehicles = async (req, resp) => {
        try {
            let data = await VehiculosModel.fetchVehiclesAll();
            resp.status(200).json(data);
        } catch (error) {
            resp.status(500).json({ message: 'Error al obtener los vehículos', error: error.message });
        }
    }

    // Crear un nuevo vehículo
    createVehicle = async (req, resp) => {
        try {
            let record = await VehiculosModel.createVehicle(req.body);
            resp.status(201).json(record);
        } catch (error) {
            resp.status(500).json({ message: 'Error al crear el vehículo', error: error.message });
        }
    }

    // Actualizar un vehículo
    updateVehicle = async (req, resp) => {
        try {
            let record = await VehiculosModel.updateVehicle(req.params.id_vehiculo, req.body);
            if (record) {
                resp.status(200).json({ message: 'Vehículo actualizado', record });
            } else {
                resp.status(404).json({ message: 'Vehículo no encontrado' });
            }
        } catch (error) {
            resp.status(500).json({ message: 'Error al actualizar el vehículo', error: error.message });
        }
    }

    // Eliminar un vehículo
    deleteVehicle = async (req, resp) => {
        try {
            const deletedCount = await VehiculosModel.deleteVehicle(req.params.id_vehiculo);
            resp.status(200).json({
                message: `Vehículo con ID ${req.params.id_vehiculo} se eliminó`,
                deletedCount
            });
        } catch (error) {
            resp.status(500).json({ message: 'Error al eliminar el vehículo', error: error.message });
        }
    }
}

module.exports = VehiculosControllers;

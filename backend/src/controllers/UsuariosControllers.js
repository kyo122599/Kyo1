class UsuariosControllers {

    constructor() {
        Object.preventExtensions(this);
    }

    // Obtener todos los usuarios
    fetchUsers = async (req, resp) => {
        const data = "Acabas De Precionar La Función Fetch 😏";
        resp.status(200).json({ message: data });
    }

    // Crear un nuevo usuario
    createUsers = async (req, resp) => {
        const data = "Acabas De Precionar La Función Create 😢";
        resp.status(200).json({ message: data });
    }

    // Actualizar un usuario
    updateUsers = async (req, resp) => {
        const data = "Acabas De Precionar La Función Update 😒";
        resp.status(200).json({ message: data });
    }

    // Eliminar un usuario
    deleteUsers = async (req, resp) => {
        const data = "Acabas De Precionar La Función Delete 💀";
        resp.status(200).json({ message: data });
    }
}

module.exports = UsuariosControllers;

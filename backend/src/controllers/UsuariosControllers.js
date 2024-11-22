class UsuariosControllers {
    constructor() {
        Object.preventExtensions(this);
    }

    // Obtener todos los usuarios
    fetchUsers = async (req, resp) => {
        const data = "📋 ¡Consulta exitosa! Aquí están los usuarios disponibles.";
        resp.status(200).json({ message: data });
    }

    // Crear un nuevo usuario
    createUsers = async (req, resp) => {
        const data = "✅ ¡Usuario creado con éxito! 🎉";
        resp.status(200).json({ message: data });
    }

    // Actualizar un usuario
    updateUsers = async (req, resp) => {
        const data = "🔄 ¡Actualización completada! Los datos del usuario se han modificado correctamente.";
        resp.status(200).json({ message: data });
    }

    // Eliminar un usuario
    deleteUsers = async (req, resp) => {
        const data = "🗑️ ¡Usuario eliminado correctamente! Si fue un error, puedes crearlo nuevamente.";
        resp.status(200).json({ message: data });
    }
}

module.exports = UsuariosControllers;

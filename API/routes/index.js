const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = () => {
    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
    pacienteController.nuevoCliente
    );

    //Obtiene todos los pacientes
    router.get('/pacientes',
    pacienteController.obtenerPacientes
    );

    //Obtiene un paciente por su id
    router.get('/pacientes/:id',
    pacienteController.obtenerUnPaciente
    );

    //Actualizar un paciente con el id
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
    );

    //Eliminar un paciente por su id
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    );

    return router
}
const Paciente = require('../models/Paciente');

exports.nuevoCliente = async (req, res, next) => {
    //crear objeto de paciente con los datos del req.body
    const paciente = new Paciente(req.body); 
    console.log(req.body);
    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agrego correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerPacientes = async (req, res, next) => {
    
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);

    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerUnPaciente = async (req, res, next) => {
    
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);

    } catch (error) {
        console.log(error);
        next();
    }

}

exports.actualizarPaciente = async (req, res, next) => {
    
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);

    } catch (error) {
        console.log(error);
        next();
    }

}

exports.eliminarPaciente = async (req, res, next) => {
    
    try {
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente ha sido eliminado'});

    } catch (error) {
        console.log(error);
        next();
    }

}
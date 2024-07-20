import Joi from "joi";

export const schemaFormAddPaciente = Joi.object({
    mascota : Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty" : "El nombre de la mascota es requerida",
            "string.max" : "Maximo 20 caracteres",
        }),
    duenio : Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty" : "El nombre del dueño es requerido",
            "string.max" : "Maximo 20 caracteres",
        }),
    email : Joi.string()
        .email({tlds : false})
        .required()
        .messages({
            "string.empty" : "El email del dueño es obligatorio",
            "string.email" : "El formato es incorrecto"
        }),
    raza : Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty" : "la Raza del animal es requerido",
            "string.max" : "Maximo 20 caracteres",
        })        
})
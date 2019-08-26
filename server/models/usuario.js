const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un ROL valido'
}

mongoose.set('useCreateIndex', true);

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El mail es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos,

    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' })

module.exports = mongoose.model('User', usuarioSchema);
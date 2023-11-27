const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'silakan isikan nama']
    },
    kelamin: {
        type: String,
        required: [true, 'silakan isikan kelamin']
    },
    hp: {
        type: String,
        required: [true, 'silakan isikan nomor hp']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silakan isikan email valid!']
    },
    alamat: {
        type: String,
        required: [true, 'silakan isikan alamat']
    },
})
UserSchema.method("toJSON", function(){
    const{__v, _id, ...object} = this.toObject()
    object.id = _id

    return object
})

module.exports = mongoose.model('User', UserSchema)
import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: [true, 'nome obrigatório']},
    age:{type: Number},
    country: {type: String}
}, {versionKey: false});

const author = mongoose.model('authors', authorSchema)

export default author;
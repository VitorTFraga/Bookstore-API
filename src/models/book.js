import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({

    id:{type: mongoose.Schema.Types.ObjectId},
    title:{type: String, required: [true,'titulo obrigatorio']},
    pages: {
        type: Number,
        min: [10,'numero minimo de pgs é 10. valor fornecido: {VALUE}'],
        max:[1000,'numero máximo de pgs é 1000. valor fornecido: {VALUE}']
    },
    price: {type: Number, required:[true, 'preço obrigatorio']},
    genres: {type: String},
    publisher: {type: String,
        required: [true, 'editora obrigatoria'],
        enum: {values:['Companhia das Letras','Editora Rocco', 'Editora Intrínseca'],
            message:'a editora "{VALUE}" nao é um valor permitido.'
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'autor(a) é obrigatório.'],
        ref: "author"
    }
    
}, {versionKey: false});

const book = mongoose.model('books', booksSchema);

export default book;
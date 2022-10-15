import mongoose from "mongoose";
//const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema(
    {
        judul: {
            type: String,
            required: true
        },
        pengarang: {
            type: String,
            required: true
        }
    }
    //{collection: "koleksiBuku"}
)

export default mongoose.model('Books', BookSchema)
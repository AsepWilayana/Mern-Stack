import BukuModel from '../model/index.js';

export const getBooks = async (req, res) => {
    try {
        const books = await BukuModel.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const saveBooks = async (req, res) => {
    const book = new BukuModel(req.body);
    console.log(req);
    try {
        const insertedbook = await book.save();
        res.status(201).json(insertedbook);
    } catch (error) {
        res.status(400).json({message: error});
    }
}

// export const deleteBuku = async (req, res) => {
//     BukuModel.findByIdAndDelete(req.params.id)
//     .then(() => res.status(200).json("Buku Berhasil Dihapus"))
//     .catch((error) => res.status(400).json(error.message))
// }

// export const updateBuku = async (req, res) => {
//     BukuModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then((books) => res.status(200).json(books))
//     .catch((error) => res.status(400).json(error.message))
// }


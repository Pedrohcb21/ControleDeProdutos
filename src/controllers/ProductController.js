const mongoose = require('mongoose');

const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
const nowDate = `${day}.${month}.${year}`;

const ProductModel = mongoose.model('Product', 
    {  
        dataDeRegistro: String,
        nome: String,
        marca: String,
        unidadeMedida: String,
        quantidade: Number,
        valorUnitario: Number  
    }
);

async function AddProductController(req, res) {
    try {
        const product = new ProductModel ({
            dataDeRegistro: nowDate,
            nome: req.body.nome,
            marca: req.body.marca,
            unidadeMedida: req.body.unidadeMedida,
            quantidade: req.body.quantidade,
            valorUnitario: req.body.valorUnitario
        })
    
        await product.save()
        
        return res.status(201).send('Register product')
    } catch (error) {
        throw error
    } 
};

async function FindAllProductController(req, res) {
    try {
        const findProducts =  await ProductModel.find()
        console.log(findProducts)

        return res.status(200).send(findProducts)
    } catch (error) {
        throw error
    }
};


async function FindOneProductController(req, res) {
    try {
        const findOneProducts = await ProductModel.findById(req.params.id)
        console.log(findOneProducts)

        return res.status(200).send(findOneProducts)
    } catch (error) {
        throw error
    }
};

async function UpdateProductController(req, res) {
    try {
        const UpdateProducts = await ProductModel.findByIdAndUpdate(req.params.id, {
            nome: req.body.nome,
            marca: req.body.marca,
            unidadeMedida: req.body.unidadeMedida,
            quantidade: req.body.quantidade,
            valorUnitario: req.body.valorUnitario
        })
        console.log(UpdateProducts)

        return res.status(200).send(UpdateProducts)
    } catch (error) {
        throw error
    }
};

async function DeleteProductController(req, res) {
    try {
        const deleteProducts = await ProductModel.findByIdAndDelete(req.params.id)
        console.log(deleteProducts)

        return res.status(200).send(deleteProducts)
    } catch (error) {
        throw error
    }    
};

module.exports = { 
    AddProductController, 
    FindAllProductController,
    FindOneProductController, 
    UpdateProductController,
    DeleteProductController
};
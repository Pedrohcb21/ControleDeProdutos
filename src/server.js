const app = require ('./app');
const mongoose = require ('mongoose');

const PORT = '3000';
const USER = 'pedrohcb21';
const PASSWORD = '66708msf';

app.listen (`${PORT}`, async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@productscontrol.ywz7i50.mongodb.net/?retryWrites=true&w=majority&appName=ProductsControl`)
      } catch (error) {
        handleError(error);
      }

    console.log("listenin on port 3000")
});



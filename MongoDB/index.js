const express = require("express")
const dbConnect = require("./mongoConnect")
const Product = require("./Product");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products)
})

app.post("/", async (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const price = req.body.price;

    const product = await Product.create({ name: name, price: price })

    res.send(product);
})

app.patch("/", async (req, res) => {
    console.log(req.body);
    const _id = req.body._id;
    const name = req.body.name
    const price = req.body.price;

    const product = await Product.findOneAndUpdate({ _id: _id }, { name: name, price: price }, { new: true });
    // const ack = await Product.updateOne({ _id: _id }, { name: name, price: price })
    //                       WHERE          SET
    res.send(product);
})

app.delete("/", async (req, res) => {
    console.log(req.body);
    const _id = req.body._id;

    const ack = await Product.deleteOne({ _id: _id })
    res.send(ack);
})


dbConnect.then(() => {
    console.log("database connection successful")

    app.listen(3000, () => {
        console.log("server is running on http://localhost:3000/");
    });
}).catch((error) => {
    console.log("problem to connect with database");
    console.log(error);
})


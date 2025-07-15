import express from "express";
import "dotenv/config";
import pool from "./db.js";
const { PORT } = process.env

const app = express();
app.use(express.json())

app.listen(PORT, () => {


    console.log(`Servidor está rodando na PORTA ${PORT}`)
})

app.get('/products', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id asc");

        res.status(200).json(result.rows)
    } catch (error) {
        console.log('Deu algum erro ao procurar os produtos', error)
        res.status(500).json({ error: "Erro ao buscar produtos" })

    }

})


app.post('/products', async (req, res) => {

    const { nameProduct, quantityProduct, priceProduct } = req.body

    try {
        const result = await pool.query(`INSERT INTO products(name, quantity, price) VALUES ($1, $2, $3) RETURNING *`,
            [nameProduct, quantityProduct, priceProduct])
        res.status(201).json(result.rows[0])
    } catch (error) {

    }


})
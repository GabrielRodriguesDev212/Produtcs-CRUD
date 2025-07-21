import express from "express";
import "dotenv/config";
import cors from 'cors'
import pool from "./db.js";
const { PORT } = process.env

const app = express();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

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

app.get('/products/:id', async (req, res) => {

    const { id } = req.params

    try {
        const result = await pool.query("SELECT * FROM products WHERE id = $1 ", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(200).json(result.rows[0])
    }
    catch (error) {
        console.log('Deu algum erro ao procurar o produto', error)
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
        res.status(500).json(error)
    }

})


app.delete('/products', async (req, res) => {

    const { id } = req.body

    try {
        const result = await pool.query(`DELETE from products WHERE id = $1 RETURNING *`,
            [id])

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });

        }
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json(error)
    }

})


app.put('/products/:id', async (req, res) => {

    const { id } = req.params
    const { name, price, quantity } = req.body

    try {
        const result = await pool.query(`UPDATE products SET name = $1, price = $2, quantity = $3 WHERE id = $4 RETURNING *`,
            [name, price, quantity, id])

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });

        }
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json(error)
    }

})





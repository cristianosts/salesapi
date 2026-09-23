import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import MonthlySales from './MonthlySales.js'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado ao MongoDB')
        
    } catch (error) {
        console.log('Erro ao conectar ao MongoDB')
        
    }
}

connectDB()

app.post('/sales', async (request, response) => {
    try {
        const newMonthlySale = await MonthlySales.create(request.body)
        response.json(newMonthlySale)
        
    } catch (error) {
        response.json({error: error})
    }
})

app.get('/sales', async (request, response) => {
    try {
        const getMonthlySales = await MonthlySales.find()
        response.json(getMonthlySales)
    } catch (error) {
        response.json({error: error})
    }
})

app.put('/sales/:id', async (request, response) => {
    try {
        const newMonthlySales = await MonthlySales.findByIdAndUpdate(request.params.id, request.body, {new: true})
        response.json(newMonthlySales)
    } catch (error) {
        response.json({error: error})
    }
})

app.delete('/sales/:id', async (request, response) => {
    try {
        const deleteMonthlySales = await MonthlySales.findByIdAndDelete(request.params.id, request.body, {new: true})
        response.json(deleteMonthlySales)
    } catch (error) {
        response.json({error: error})
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
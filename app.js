require ('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = 5000;

// Credencias
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

app.listen(PORT , () => {
    console.log("Rodando")
})

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.iqsezoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() =>{
    app.listen(PORT)
    console.log('Conectou ao banco!')
})
.catch((err) => console.log(err))

// Open Route - Public Route
app.get("/" , (req , res) =>{
    res.status(200).json({msg: 'Bem vindo a nossa API'})
})


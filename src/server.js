import express from 'express'

const app = express()
app.use(express.json())

app.use('/usuarios', useRoutes)

app.listen(3000, () => console.log('Servidor ON!'))
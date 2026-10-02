import express from 'express'
import { creatUser, getAllUSers, deleteUser } from './controllers/userController.js' 

const router = express.Router()

router.post('/cadastro', creatUser)
router.get('/todos', getAllUSers)
router.delete('/deletar', deleteUser)
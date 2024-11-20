import express from 'express'
import { login, verify } from '../controllers/authControllers.js'
import authMiddleware from '../middleware/authMiddlware.js'


const router = express.Router()

router.post('/login', login)
router.get('/verify', authMiddleware, verify)

export default router;

import express from 'express'
const router=express.Router()
import Controllers from '../Controllers/Controller.js';



router.post('/addreview',Controllers.Addreview)
router.get('/Getreviews',Controllers.Getreview)



export default router;
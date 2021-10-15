const express = require("express")
const router = express.Router()
const pool = require('../db');

router.post('/create', async (req, res, next)=>{
    try {
        await 
        res.json({success: true, msg: 'registered user'})
    } catch {
        console.error('error')
        res.json({success: false, msg: 'failed'})
    }
})

router.post('/update', (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    return res.json({success: false, msg: "wrong password"})
})

router.get('/getAll', (req, res, next)=>{
    res.json({success: true, msg: 'registered user'})
})

module.exports = router; 
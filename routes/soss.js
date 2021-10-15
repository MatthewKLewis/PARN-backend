const express = require("express")
const router = express.Router()
const pool = require('../db');

router.get('/getAll', (req, res, next)=>{
    return res.json({success: true, sos: "wrong password"})
})

router.post('/create', async (req, res, next)=>{
    try {
        console.log(req.body);
        const { description } = req.body;
        const newSos = await pool.query(`
            INSERT INTO sos (description) VALUES($1)
        `, [description])

        res.json({success: true, data: newSos})
    } catch (err) {
        console.error('error')
        res.json({success: false, msg: err.message})
    }
})

router.get('/getAll', (req, res, next)=>{
    res.json({success: true, msg: 'registered user'})
})

module.exports = router; 
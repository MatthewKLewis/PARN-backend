const express = require("express")
const router = express.Router()

//Register
router.post('/register', (req, res, next)=>{
    res.json({success: true, msg: 'registered user'})
})

router.post('/authenticate', (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    return res.json({success: false, msg: "wrong password"})
})

module.exports = router; 
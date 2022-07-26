const express = require("express");
const router = express.Router(); 

let BD = []

router.get('/users', (req, res)=>{
    return res.status(200).json(BD);
})

router.get('users/:id', (req, res)=>{
    const id = Number(req.params.id)
    const
    
})
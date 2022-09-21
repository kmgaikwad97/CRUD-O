const express = require('express');
const userData = require('../model/user')

const deleteUser = async(req,res)=>{
    try{
        const deleteUser = await userData.findByIdAndDelete(req.params.id);
        res.send(deleteUser);
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = { deleteUser }


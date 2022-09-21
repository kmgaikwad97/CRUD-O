const express = require('express');
const userData = require('../model/user')

const getUser = async(req,res)=>{
    try{
        const getUser = await userData.find({})
        res.send(getUser);
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { getUser }


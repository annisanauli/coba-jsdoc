const controllers = {}
//import model and sequelize
var sequelize = require('../config/database');
var User = require('../model/User');
var Role = require('../model/Role');

sequelize.sync()
  //CREATE NEW USER
  controllers.create = async (req,res) => {
    // data parameters from post
    const {name, email, password, phone, role } = req.body;
    console.log("Role es ==>"+role)
    const data = await User.create({
      name:name,
      email:email,
      password:password,
      phone:phone,
      roleId:role
    })
    .then(function(data){
      return data;
    })
    .catch(error=>{
      return res.status(500).json ({error: error.message});
    })
    // return res
    res.status(200).json({
       success:true,
       message:"Data successfully created",
       data:data
     })
  }

  //GET ALL DATA FROM USER
  controllers.list = async (req,res) => {
    const data = await User.findAll({
      include: [ Role ]
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return res.status(500).json ({error: error.message})
    })
    res.status(200).json({
      success:true,
      message:"Get all data is success",
      data:data
    })
  }
  
  //GET USER USING ID --> EDIT
  controllers.get = async (req,res) => {
    const { id } = req.params;
    const data = await User.findOne({
        where: { id: id },
        include: [ Role ]
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return error;
    })
    res.json({ success: true, data: data });
  }

  //DELETE USER
  controllers.delete = async (req, res) => {
    // parameter post
    const { id } = req.params;
    // delete sequelize
    const del = await User.destroy({
      where: { id: id}
    })
    res.status(200).json({success:true,deleted:del,message:"Deleted successful"});
  }
  
  module.exports = controllers;

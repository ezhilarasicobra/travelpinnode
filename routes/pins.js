const express=require('express')
const router=express.Router()
const Pin=require('../models/pins')

//creating a new pin

router.post('/',async(req,res)=>{
  const newPin=new Pin(req.body)

  try {
    const savedPin=await newPin.save()
    res.status(200).json(savedPin)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/',async(req,res)=>{
try {
  const Pins=await Pin.find()
  res.status(200).json(Pins)
} catch (error) {
  res.status(500).json(error)
}
})
module.exports=router;

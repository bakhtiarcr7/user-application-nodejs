const model=require('../models/UserModel')
const path=require('path')

const displayHomePage=async(req, res)=>{
    res.render('index', {name:'Bakhtiar'})
}

const displayAddUserPage=async(req, res)=>{
    res.render('addUserPage');
}

const addUserItem=async(req, res)=>{

    const {image}=req.files
    image.mv(path.resolve(__dirname,'../public/images',image.name),(error)=>{
        if(!error){

            model.create({...req.body,image:image.name},(error, item)=>{
                if(!error){
                    res.redirect('/api/viewAllUser')
                }
                else{
                    res.redirect('/api/displayAddUserPage')
                }
            })
        }
        else{
            console.log(error)
        }
    })
    

    //
}

const viewAllUser=async(req, res)=>{
    
    const data=await model.find()
    res.render('displayUsers', {data})
}

const deleteUser=async(req, res)=>{

    const {id}=req.query

    const deletedItem=await model.findByIdAndRemove(id)
    const data=await model.find()
    res.render('displayUsers', {data})
}

const updateUserPage=async(req, res)=>{

    const {id}=req.query

    const data=await model.findById(id)
    res.render('updateUser', {data})
}

const updateUserById=async(req, res)=>{

    const {name, email, phone, city, postalcode}=req.body
    const {image}=req.files
    const {id}=req.query

    image.mv(path.resolve(__dirname,'../public/images', image.name),(error)=>{
        if(!error){

            model.findByIdAndUpdate(id,{name:name,email:email,phone:phone,city:city,postalcode:postalcode,image:image.name},(error, doc)=>{
                
                if(!error){
                    res.redirect('/api/viewAllUser')
                }
                else{
                    res.redirect('/api/updateUser')
                }
            })

        }
        else{
            res.redirect('/api/updateUser')
        }
    })
}
module.exports={
    displayHomePage,
    displayAddUserPage,
    addUserItem,
    viewAllUser,
    deleteUser,
    updateUserPage,
    updateUserById
}


const express=require('express')
const controller=require('../controllers/UserController')
const Route=express()


Route.get('/', controller.displayHomePage)
Route.get('/displayAddUserPage', controller.displayAddUserPage)
Route.post('/addUserItem', controller.addUserItem)
Route.get('/viewAllUser', controller.viewAllUser)
Route.get('/deleteUser', controller.deleteUser)
Route.get('/updateUser', controller.updateUserPage)
Route.post('/updateUser', controller.updateUserById)


module.exports=Route
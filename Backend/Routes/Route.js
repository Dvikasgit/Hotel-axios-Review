import express, {Router} from 'express'
import { SignIn, Signup } from '../Controller/admincController.js'
import { getHotel, hotelById, hotelController } from '../Controller/hotelController.js'

const route = Router(express)

//Admin Route
route.post('/signup',Signup)
route.post('/signin',SignIn)


//Hotel Route 
route.post('/addhotel',hotelController);
route.get('/gethotel',getHotel);
route.get('/getById/:id',hotelById);
export default route
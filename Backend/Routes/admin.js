import express, {Router} from 'express'
import { SignIn, Signup } from '../Controller/admincController.js'

const route = Router(express)

route.post('/signup',Signup)
route.post('/signin',SignIn)

export default route
"use strict";

import { render } from "ejs";
import { Router } from "express";

import middlewares from "../../middlewares/index.js"


import adminHandler from "./adminHandler.js";

import controller from './adminController.js'

import temp_func from "./temp_func.js";

const router = Router();

//console.log(temp_func.clientList);

router.get('/adminDashboard', middlewares.checkNotAuthenticated, controller.adminDashboard);
router.get('/clientDetail', middlewares.checkNotAuthenticated, controller.clientDetail);
router.get('/clientList', middlewares.checkNotAuthenticated, controller.clientList)
router.post('/clientRegister', controller.clientRegister);
router.put('/clientEdit');



// router.get('/', controller.getAllCat);
// router.post('/', controller.createCatfact);
// router.put('/:id', controller.updateCatfact);
// router.delete('/:id', controller.deleteCatfact);



export default router;
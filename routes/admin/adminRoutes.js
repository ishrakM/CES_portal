"use strict";

import { Router } from "express";

import middlewares from "../../middlewares/index.js"


import controller from './adminController.js'

const router = Router();

router.get('/adminDashboard', middlewares.checkNotAuthenticated, controller.adminDashboard);
router.get('/clientDetail', middlewares.checkNotAuthenticated, controller.clientDetail);
router.get('/clientList', middlewares.checkNotAuthenticated, controller.clientList);
router.post('/clientRegister');
router.put('/clientEdit');



// router.get('/', controller.getAllCat);
// router.post('/', controller.createCatfact);
// router.put('/:id', controller.updateCatfact);
// router.delete('/:id', controller.deleteCatfact);



export default router;
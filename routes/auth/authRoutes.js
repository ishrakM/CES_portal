"use strict";

import { Router } from "express";

import middlewares from "../../middlewares/index.js"


import controller from './authController.js'

const router = Router();

router.get('/login', middlewares.checkNotAuthenticated, controller.login);
router.post('/adminDashboard')
// router.get('/', controller.getAllCat);
// router.post('/', controller.createCatfact);
// router.put('/:id', controller.updateCatfact);
// router.delete('/:id', controller.deleteCatfact);



export default router;

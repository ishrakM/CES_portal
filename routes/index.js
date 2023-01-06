'use strict'

import { Router } from 'express';

// Import routes
import { default as authrouter } from './auth/authRoutes.js'

import {default as admin} from './admin/adminRoutes.js'

const router = Router({
  caseSensitive: true
})

// Use imported routes in router
router.use(authrouter);
router.use(admin);

export default router;
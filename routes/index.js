'use strict'

import { Router } from 'express';

// Import routes
import { default as authrouter } from './auth/authRoutes.js'

const router = Router({
  caseSensitive: true
})

// Use imported routes in router
router.use(authrouter);

export default router;
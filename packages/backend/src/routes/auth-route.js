const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User Authentication
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               email: johndoe@example.com
 *               password: password123
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: johndoe@example.com
 *       "400":
 *         description: Bad Request
 *       "500":
 *         description: Server Error
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Log in a user
 *     description: Log in a user with email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               email: johndoe@example.com
 *               password: password123
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: johndoe@example.com
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized - Invalid credentials
 *       "500":
 *         description: Server Error
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Log out the current user
 *     description: Logs out the authenticated user and destroys their session.
 *     tags: [Auth]
 *     responses:
 *       "204":
 *         description: No Content - Logout successful
 *       "401":
 *         description: Unauthorized - No active session
 *       "500":
 *         description: Server Error
 */
router.post('/logout', authController.logout);

/**
 * @swagger
 * /api/v1/auth/validate-session:
 *   get:
 *     summary: Validate user session
 *     description: Validate if the user has an active session.
 *     tags: [Auth]
 *     responses:
 *       "200":
 *         description: OK - Session is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Session is active
 *                 userId:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         description: Unauthorized - No active session
 */
router.get('/validate-session', authController.validateSession);

/**
 * @swagger
 * /api/v1/auth/request-password-reset:
 *   post:
 *     summary: Request a password reset
 *     description: Send a password reset link to the user's email.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *             example:
 *               email: johndoe@example.com
 *     responses:
 *       "200":
 *         description: OK - Password reset link sent
 *       "400":
 *         description: Bad Request
 *       "404":
 *         description: Not Found
 *       "500":
 *         description: Server Error
 */
router.post('/request-password-reset', authController.requestPasswordReset);

/**
 * @swagger
 * /api/v1/auth/reset-password:
 *   post:
 *     summary: Reset password
 *     description: Reset the user's password using the provided token and new password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - password
 *             properties:
 *               token:
 *                 type: string
 *                 description: The password reset token
 *               password:
 *                 type: string
 *                 description: The new password
 *             example:
 *               token: abcdef123456
 *               password: newpassword123
 *     responses:
 *       "200":
 *         description: OK - Password reset successful
 *       "400":
 *         description: Bad Request
 *       "404":
 *         description: Not Found
 *       "500":
 *         description: Server Error
 */
router.post('/reset-password', authController.resetPassword);

module.exports = router;

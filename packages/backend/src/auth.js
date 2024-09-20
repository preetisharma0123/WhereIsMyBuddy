/* eslint-disable no-unused-vars */
const mongoose = require('mongoose'); 
const session = require('express-session');
const connectToDatabase = require('./config/database.config'); 

let lucia;
let MongodbAdapter;

(async function initialize() {
    try {
        // Connect to MongoDB
        await connectToDatabase();

        // Dynamically import Lucia and MongodbAdapter
        const { Lucia } = await import('lucia');
        const { MongodbAdapter: ImportedMongodbAdapter } = await import('@lucia-auth/adapter-mongodb');
        
        MongodbAdapter = ImportedMongodbAdapter;

        // Initialize Lucia with the adapter
        const adapter = new MongodbAdapter(
            mongoose.connection.collection('sessions'),
            mongoose.connection.collection('users')
        );

        lucia = new Lucia(adapter, {
            sessionCookie: {
                expires: false,
                attributes: {
                    secure: process.env.NODE_ENV === 'production',
                    httpOnly: true, // Prevent client-side access to the cookie
                    sameSite: 'strict', // SameSite policy for CSRF protection
                }
            }
        });

        // Middleware to handle Lucia authentication
        // This allows you to use Lucia for handling authentication in your Express app
        module.exports.luciaMiddleware = function () {
            return lucia.middleware();
        };

        module.exports.lucia = lucia;
    } catch (error) {
        console.error('Error initializing app:', error);
    }
})();

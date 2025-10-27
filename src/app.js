import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORGIN,
    credentials: true, 
}))

app.use(express.json({limit: "16kb"})); // to parse json bodies
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // to parse url-encoded bodies // extended: true allows rich objects and arrays to be encoded into the URL-encoded format
app.use(express.static('public')); // to serve static files from 'public' directory
// use method is used to add middleware, configuration set to express app
app.use(cookieParser()); // to parse cookies from incoming requests 
export { app }; 
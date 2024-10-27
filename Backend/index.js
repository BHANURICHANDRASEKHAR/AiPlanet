import express from 'express';
import MongooDB from './Db.js';
import Pdf_extract from './Components/Upload_Pdf.js';
import dotenv from 'dotenv'; 
import Ask_Questions from './Components/Ask_Questions.js';
import session from 'express-session';
import cors from 'cors'
dotenv.config();

const app = express();
MongooDB(); 
app.use(cors({
    origin: '', 
    credentials: true
}));
app.use(express.json()); 
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }, 
    })
);


// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from server');
});
app.get('/test_session', (req, res) => {
    if (req.session.pdfText) {
        res.send(`Stored PDF Text: ${req.session.pdfText}`);
    } else {
        res.send("No PDF text found in session.");
    }
});

app.use('/api/ask', Ask_Questions); 
app.use('/api/upload', Pdf_extract);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

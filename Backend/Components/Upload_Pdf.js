import express from 'express';
import multer from 'multer';
import pdf from 'pdf-parse';
import dotenv from 'dotenv';
import PdfDocument from '../DataBase_Models/Charts.js';

dotenv.config();

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.post("/", upload.single("file"), async (req, res) => {
    
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
  
    try {
       
        if (!req.file.buffer) {
            throw new Error("File buffer is empty.");
        }

        
        const data = await pdf(req.file.buffer).catch((error) => {
            throw new Error("Error during PDF parsing: " + error.message);
        });
   
      
        const newPdfDocument = new PdfDocument({
            fileName: req.file.originalname,
            title:req.file.filename,
            description: data.text,
        });
       
        await newPdfDocument.save();
        req.session.pdfText = data.text;

        res.send({status:true,data:newPdfDocument});
    } catch (err) {
        console.error("Error processing PDF:", err.message);
        res.status(500).send("Error processing PDF: " + err.message);
    }
});

export default router;

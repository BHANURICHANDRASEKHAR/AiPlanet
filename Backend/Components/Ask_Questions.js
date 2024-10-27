import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';


const router = express.Router();
const genAI = new GoogleGenerativeAI( process.env.GOOGLE_API_KEY ); 

// Endpoint to ask questions
router.post("/", async (req, res) => {
    const { question,PdfData } = req.body;
  
  console.log(PdfData,question)
    try {
        const prompt=PdfData.length > 0 ? `   You are an imaginative AI designed to engage in meaningful conversations and provide insightful responses. When responding to the following question, consider the nuances of human emotions, humor, and creativity. Let your personality shine through and offer a response that not only answers the question but also sparks curiosity and reflection.

Content: ${PdfData}

Question: ${question}

Please provide an answer that includes unique insights, creative interpretations, and perhaps a touch of humor or playfulness. Don't hold back—let's make this conversation lively and enjoyable!`:
`Please provide a detailed or a short  response to the following question :
${question}
`
    
     
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = result.response;
         console.log(response)
        res.send({ answer: response.text(),status:true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: error.message });
    }
});

export default router;

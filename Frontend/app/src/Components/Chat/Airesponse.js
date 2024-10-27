import axios from "axios";


export default async function getResponse(SetLoader, setMessages, PdfData, query) {

    try {
        const res = await axios.post(`http://localhost:5000/api/ask`, { question:query,PdfData:PdfData } ,{ withCredentials: true });
        if (res.data.status) {
          
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: res.data.answer,
                    sender: "AI",
                    sentTime: new Date().toLocaleTimeString(),
                },
            ]);
        } else {
            alert("Error: " + res.data);
        }
    } catch (error) {
        console.error(error);
        alert("Error: Unable to connect to the server.");
    } finally {
        SetLoader(false); 
    }
}

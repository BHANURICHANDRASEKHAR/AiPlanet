import axios from  'axios';
import { onSuccess,onFailure } from '../Alerts/alerts';
export default async function send_to_database(SetLoader,formData,setIsPdfUpload,SetPdfData)
{
   
    SetLoader(true);
    try{
        const response=await axios.post('https://aiplanet-7i46.onrender.com/api/upload',formData);
       
        if(response.data.status)
        {
            onSuccess("Data uploaded successfully");
            setIsPdfUpload(true)
            SetPdfData(response.data.data.description);
        }
        else{
            onFailure("Error uploading data");
        }
    }
    catch(error){
        onFailure("Error connecting to server");
    }
    finally {
        SetLoader(false); 
    }
}


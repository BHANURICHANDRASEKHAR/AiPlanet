import React, { useContext, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import send_to_database from './UploadToDatabse';
import {UserContext} from '../Context/UserContext'
const App = () => {
    const [Loading,SetLoader]=useState(false);
    const {isPdfUpload,setIsPdfUpload,PdfData,SetPdfData} =useContext(UserContext)
  const props = {
    multiple: false, 
    beforeUpload: (file) => {
      const isPDF = file.type === 'application/pdf';
      if (!isPDF) {
        message.error('You can only upload PDF files!');
      }
      return isPDF;
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      const formData = new FormData();
      formData.append('file', file); 
      await send_to_database(SetLoader,formData,setIsPdfUpload,SetPdfData);
    },
    showUploadList: false,
    
  };

  return (
    <Upload {...props}>
      <Button disabled={Loading} icon={<UploadOutlined />}>{Loading ? 'Loading...' : 'Upload PDF'}</Button>
    </Upload>
  );
};

export default App;

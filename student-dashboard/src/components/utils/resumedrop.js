import React, { useState, useEffect } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import { useHttpClient } from '../hooks/http-hook';

const DropzoneAreaExample = props => {
  // eslint-disable-next-line
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const uploadResume = async () => {
          try {
              const responseData = await sendRequest(
                process.env.REACT_APP_FLASK_URL + '/resume_upload',
              );
              console.log(responseData);
          } catch (err) {}
      };
      uploadResume();
  }, [sendRequest]);
  const [files, setFiles] = useState([]);

  const handleChange = (fileInput) => {
    setFiles(fileInput);
  }

  return ( 
    <DropzoneArea 
        onChange={files => {handleChange(files)}}
      />
  )
}

export default DropzoneAreaExample;
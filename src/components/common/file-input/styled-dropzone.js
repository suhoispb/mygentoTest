import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import './styled-dropzone.css'

const baseStyle = {
  flex: 1,
  display: 'flex',  
  justifyContent: 'space-around',
  padding: '5px',
  borderWidth: 2,
  borderRadius: 3,
  borderColor: '#eeeeee',
  borderStyle: 'dotted',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({acceptedFiles: 'image/*'});

  const files = acceptedFiles.map( file => (
  <li key={file.path}>
    {file.path} 
  </li>
));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  return (
    <section className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div className="plus">+</div>
        <div className="loading_header"><p>Загрузите резюме</p></div>
      </div>
      <aside>
        <ul className="list-group">{files}</ul>
      </aside>
    </section>
  );
}

export default StyledDropzone;
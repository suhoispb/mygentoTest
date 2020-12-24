import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './file-input.css'

class FileInput extends Component {
  constructor({props}) {
    super({props});
  }
  
  checkFiles = () => this.props.arrWithFiles.map( file => (
    <div className="styledChecFiles">
    <li key={file.path}>
      {file.path} 
    </li>
    <button onClick = { () => this.props.deleteResume(true)} type="button" className="btnResume">&#x2716;</button>
    </div>
  ));
  render() {
    const {onChange, arrWithFiles, deleteResume} = this.props;
    return ( 
      <Dropzone onDrop={onChange} arrWithFiles={arrWithFiles} deleteResume={deleteResume}>
        {({getRootProps, getInputProps}) => (
          <section className="dropzoneContainer">
            
            {   arrWithFiles.length===0 &&(
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()}  />
                        <div className="plus">+</div>
                        <div className="loading">Загрузите резюме</div>
                        <div></div>
                </div>
            )
            }    
            <aside>
              {arrWithFiles.length>0 &&(
                <div className="renderFiles">
                    {this.checkFiles()}
                </div>
              )
              }
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default FileInput;
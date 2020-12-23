import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './file-input.css'

class FileInput extends Component {
  constructor({onChange, deleteArr}) {
    super({onChange, deleteArr});
    this.state = {
      files: []
    };
    this.onDrop = (files) => {
      this.setState({files})
    };
  }

  deleteResume = () => {
    this.setState({files:''});
  }

  checkFiles = () => this.state.files.map( file => (
    <div className="styledChecFiles">
    <li key={file.path}>
      {file.path} 
    </li>
    <button onClick = { () => this.deleteResume(true)} type="button" className="btnResume">X</button>
    </div>
  ));
  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            
            {   this.state.files.length===0 &&(
                <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <div className="plus">+</div>
                <div className="loading">Загрузите резюме</div>
                <div></div>
                </div>
            )
            }    
            <aside>
              {this.state.files.length>0 &&(
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


// function StatusDescription(props: {status: Status;}): 
//     div {
//     return {props.status};
// }
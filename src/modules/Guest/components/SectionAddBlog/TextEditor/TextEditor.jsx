import React, { useEffect, useRef } from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './TextEditor.css';
import img from '../../../Assets/Vector.svg';

const TextEditor = () => {
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    DecoupledEditor
      .create(editorRef.current, {
        toolbar: {
          items: [
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'alignment',
            '|',
            'indent',
            'outdent',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'imageUpload',
            '|',
          ]
        }
      })
      .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className='BA-TheToolBar'>
        <div id="toolbar-container"></div>
      </div>
      <div className='BA-TheContent'>
        <button className='BA-BtnAddCover'>
          <label htmlFor="fileInput" className="custom-file-upload d-flex justify-content-center align-items-center">
            <img src={img} alt="" />
            <p className='BA-ParagraphAddCover'>Add Cover</p>
          </label>
          <input type="file" id="fileInput" ref={fileInputRef} style={{ display: "none" }} />
          <p className='BA-ParagraphAddCover1'>730x284</p>
        </button>
        <textarea className='BA-EditorTextarea' onFocus={(e) => e.target.select()}>Title</textarea>
        <div id="editor" ref={editorRef}>
          <textarea className='BA-Pareditor'>Write Here.....</textarea>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
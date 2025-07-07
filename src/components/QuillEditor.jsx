import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// Use forwardRef to property forward the ref to the DOM element
const QuillEditor = forwardRef(
  ({ value, onChange, placeholder, className, height = 400 }, ref) => {
    // create separate ref for the ReactQuill component
    const quillRef = useRef();

    const [editorValue, setEditorValue] = useState(value || '');

    // update local state when prop value change
    useEffect(() => {
      setEditorValue(value || '');
    }, [value]);

    // Create a memorized onChange handle
    const handleChange = () => {};

    // Set up editor modules
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
      ],
    };

    // Set up editor formats
    const formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'indent',
      'link',
      'image',
      'code-block',
      'script',
    ];
    return (
      <div className={className || ''} style={{ height: `${height}px` }}>
        <ReactQuill
          ref={quillRef}
          value={editorValue}
          onChange={handleChange}
          placeholder={placeholder || 'Write your content here...'}
          theme="snow"
          style={{ height: `${height - 42}px` }}
          modules={modules}
          formats={formats}
        />
      </div>
    );
  }
);

export default QuillEditor;

import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import CodeMirror from '@uiw/react-codemirror'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { javascript } from '@codemirror/lang-javascript';
export default function Editor(props) {

    const [open, setOpen] = useState(true)

    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                > <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>

            <CodeMirror
                value={value}
                height="200px"
                className='code-mirror-wrapper'
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
        </div>
    )
}

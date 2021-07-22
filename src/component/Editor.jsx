import React ,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2'

const Editor = ({lang,title,value,onChange}) => {
    const [open, setOpen] = useState(true)
    const HandelChange=(editor, data, value)=>
    {
        onChange(value)

    }
    return (
        <>
        <div className={`code-here ${open ? '' : 'collapsed'}`}>
            <div className="top">
                <h4>{title}</h4>
                <button className="btn btn-outline-success ml-2 mr-2" onClick={() => setOpen(prevOpen => !prevOpen)}> 
                {
                    open ? <i class="fa fa-arrow-left" aria-hidden="true"></i> : <i class="fa fa-arrow-right" aria-hidden="true"></i>
                }
              
                </button>

            </div>
            <div className="code">
                <CodeMirror
                onBeforeChange={HandelChange}
                value={value}
                
               className="ind-code-box"
               options={{
                   lineWrapping:true,
                   lint:true,
                   mode: lang,
                   theme:'material',
                   lineNumbers:true
               }} 
                />

            </div>
        </div>
            
        </>
    )
}

export default Editor

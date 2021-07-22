import React,{useEffect, useState} from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Editor from './component/Editor'
import useLocalStorage from './component/useLocalStorage'


import TabEditor from './component/TabEditor'
const App = () => {
  const [view, setView] = useState(false)
  const [opentab, setOpentab] = useState(true)
  const [bootstrap, setBootstrap] = useState(false)

  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')

  // const [html, setHtml] = useState( '')
  // const [css, setCss] = useState( '')
  // const [js, setJs] = useState( '')
 
  const [srcCode, setCode] = useState('')
  
  useEffect(()=>{
    const writecode=setTimeout(()=>{
      if(bootstrap)
      {
        setCode(`<html>
      <head>
     
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" >
      <style>${css}</style>
      </head>
        <body>${html}</body>
        
        <script>${js}</script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" ></script>
      </html>`)
      }
      else{
        setCode(`<html>
        <head>
       
       
        <style>${css}</style>
        </head>
          <body>${html}</body>
          
          <script>${js}</script>
        </html>`)
      }
      
    },250)
    return ()=>clearTimeout(writecode)

  },[html,css,js])
  return (
   
    <>
    <Navbar view={view} setView={setView} bootstrap={bootstrap} setBootstrap={setBootstrap} srcCode={srcCode} />

    {
      view ? (
        <>
        <div className="tab-box">
        <div className= {`tab-view code-tab ${opentab ? '' : 'opentab-collapsed'}`}>
         <div className="text-right">
           <button className="btn btn-outline-light m-1" onClick={() => setOpentab(!opentab)}>{opentab ? <i className="fa fa-arrow-left" aria-hidden="true"></i> : <i className="fa fa-arrow-right" aria-hidden="true"></i>}</button>
         </div>
          <TabEditor 
           lang="xml"
           title="HTML"
           value={html}
           onChange={setHtml}
          />
          <TabEditor
          lang="css"
          title="CSS"
          value={css}
          onChange={setCss}
          />
          <TabEditor 
          lang="javascript"
          title="JS"
          value={js}
          onChange={setJs}
          />

        </div>
        <div className={`tab-view tab-run-code ${opentab ? '' : 'runtab-collapsed'}`}>
        <iframe
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          loading="lazy"
          width="100%"
          height="100%"
          
        />
        </div>
        </div>

        </>
      ):
      (
        <>
        <div className="code-box box-col">
      <Editor
      
      lang="xml"
      title="HTML"
      value={html}
      onChange={setHtml}
       />
       <Editor
          lang="css"
          title="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          lang="javascript"
          title="JS"
          value={js}
          onChange={setJs}
        />
    </div>
    <div className="code-box run-cod">
    <iframe
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
     
      </div>

        </>
      )
    }
    


      
    </>
  )
}

export default App

import React from 'react'
import ReactTooltip from "react-tooltip";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = ({view,setView,bootstrap ,setBootstrap,srcCode}) => {
    const cleanCode=()=>{
         localStorage.setItem('codepen-clone-html','""')
         localStorage.setItem('codepen-clone-css','""')
         localStorage.setItem('codepen-clone-js','""')
         window.location.reload()
        
    }
    const notify=()=>{
      toast(`You Successfully copied it`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
   
    return (
        <>
       

        <div className="nav">
            <h1>CodePen</h1>
            <div className="boc">
                {/* <button className="btn btn-outline-warning ml-1 mr-1" onClick={showModel}>Show Code</button> */}
                <div class="modal" id="myModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h1 className="modal-title">
            Your Code
          </h1>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
       
        <div className="modal-body p-2">
            <p>
        {srcCode}
            </p>
         
        </div>
        
      
        <div className="modal-footer">
        <CopyToClipboard text={srcCode}>
        <button type="button" className="btn btn-danger m-2" onClick={notify} >Copy It</button>
       </CopyToClipboard>
         
        </div>
        
      </div>
    </div>
  </div>
                <button type="button" className="btn btn-outline-warning ml-1 mr-1" data-toggle="modal" data-target="#myModal">Show Code</button>

               
<button className="btn btn-outline-danger ml-1 mr-1" onClick={cleanCode}>Clean</button>

                <button data-tip data-for='happyFace' className="btn btn-outline-success ml-1 mr-1" onClick={()=>setBootstrap(!bootstrap)}>{bootstrap ? "Remove Bs4" : "Use Bs4"}</button>
                <ReactTooltip place="bottom" id='happyFace' type="dark">
                    <span>Want to Use Bootstrap4? If Yes Click on It</span>
                    
                    </ReactTooltip>
            <button className="btn btn-outline-success ml-1 mr-1" onClick={()=>setView(!view)}>
               {
                   view ?(
                       <> <svg viewBox="0 0 20 20" className="rotate-cc90" width="20" height="20">

                       <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z">
                           
                       </path>
                       </svg>

                       </>
                   ) :
                   (
                       <>
                        <svg viewBox="0 0 20 20"  width="20" height="20">

<path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z">
    
</path>
</svg>

                       </>
                   )
               }

                 </button>
            </div>
    
        </div>
            <ToastContainer/>
        </>
    )
}

export default Navbar


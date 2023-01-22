import styled from '@emotion/styled'
import React from 'react'
import "./Error404.css";


const Error404 = () => {
  return (
   <div className='cont'>
    <div id="error-page">
         <div class="content">
            <h2 class="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            {/* <div class="btns">
               <a >return home</a>
               <a >report problem</a>
            </div> */}
         </div>
      </div>
    </div>
  )
}

export default Error404;

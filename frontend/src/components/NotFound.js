import { Container } from '@mui/material';
import React from 'react';
import pagenotfoundImage from "../components/utils/404-page-not-found.png";

const NotFound = () => {
    return (
        
            <div className="pageNotFound">
                <h1>Oops..! 404 Page Not Found</h1>
                <p>Looks like you came to wrong page on our server</p>
                <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
                
            </div>
        
    )
}

export default NotFound;
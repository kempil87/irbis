import React from "react";
import "./Footer.css"

export const Footer = () => {


    return (
        <>
            <div className="footer">
                <h3>footer</h3>
                <div  onClick={() => window.scrollTo(0, 0)}>go to top</div>
            </div>
        </>
    )


}

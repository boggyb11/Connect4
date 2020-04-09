
import React from "react";
// import globalStyles from "../Styling/GlobalStyles";
// import _JSXStyle from "styled-jsx/style";

export const Grid = () => {
    return (
        <>
            {/* <h2>Connect 4 Grid</h2>
            <div className="GameBoard">

            </div>
            <style jsx global>{globalStyles}</style> */}
            <p>only this paragraph will get the style :)</p>

            { /* you can include <Component />s here that include
     other <p>s that don't get unexpected styles! */ }

            <style jsx>{`
  p {
    color: red;
  }
`}</style>
        </>
    );
}
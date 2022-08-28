import preloader from "../../../assets/images/preloader.gif";
import * as React from "react";

const Preloader = (props) => {
    return <div style={ {backgroundColor: "white"} }><img alt={''} src={preloader}/></div>
}

export default Preloader;
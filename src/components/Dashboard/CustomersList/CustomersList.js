import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./CustomersList.module.scss";

const CustomersList = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return <div className={`${classes.customerslist} ${themeClass}`}></div>;
};

export default CustomersList;

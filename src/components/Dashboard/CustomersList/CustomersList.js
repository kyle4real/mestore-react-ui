import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./CustomersList.module.scss";

const CustomersList = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.customerslist} ${themeClass}`}>
            <div className={classes.customerslist__header}>
                <h2 className={`${classes.customerslist__header__title} ${themeClass}`}>
                    Customers List
                </h2>
            </div>
        </div>
    );
};

export default CustomersList;

import React, { useContext } from "react";
import UiContext from "../../store/ui-context";

import classes from "./Dashboard.module.scss";
import Earnings from "./Earnings/Earnings";

import Header from "./Header/Header";
import Totals from "./Totals/Totals";

const Dashboard = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.dashboard__container} ${themeClass}`}>
            <div className={classes.dashboard}>
                <Header />
                <Totals />
                <Earnings />
            </div>
        </div>
    );
};

export default Dashboard;

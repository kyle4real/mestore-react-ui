import React, { useContext } from "react";
import UiContext from "../../../../store/ui-context";

import classes from "./SalesTable.module.scss";

const SalesTable = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <table className={`${classes.table} ${themeClass}`}>
            <thead>
                <tr className={`${classes.table__head} ${themeClass}`}>
                    <th>Product Name</th>
                    <th>Sales</th>
                    <th>Stock</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Adidas</td>
                    <td>568</td>
                    <td>321</td>
                    <td>$45.76</td>
                    <td>No Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>Nike Air Jordan</td>
                    <td>330</td>
                    <td>645</td>
                    <td>$415.01</td>
                    <td>In Stock</td>
                </tr>
            </tbody>
        </table>
    );
};

export default SalesTable;

// <div className={classes.table}>
//     <div className={`${classes.table__head} ${themeClass}`}>
//         <div className={classes.col}>
//             <h4 className={classes.title}>Product Name</h4>
//         </div>
//         <div className={classes.col}>
//             <h4 className={classes.title}>Sales</h4>
//         </div>
//         <div className={classes.col}>
//             <h4 className={classes.title}>Stock</h4>
//         </div>
//         <div className={classes.col}>
//             <h4 className={classes.title}>Amount</h4>
//         </div>
//         <div className={classes.col}>
//             <h4 className={classes.title}>Status</h4>
//         </div>
//     </div>
//     <div className={classes.table__data}>
//         <div className={classes.table__data__row}></div>
//     </div>
// </div>

import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./ProductSales.module.scss";

const ProductSales = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return <div className={`${classes.productsales} ${themeClass}`}></div>;
};

export default ProductSales;

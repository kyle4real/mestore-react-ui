import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./CustomersList.module.scss";

const customersData = [
    { id: 1, customerName: "Brooklyn Simmons", email: "brooklyn.s@gmail.com", img: "" },
    { id: 2, customerName: "Jacob Jones", email: "jacob.j@gmail.com", img: "" },
    { id: 3, customerName: "Leslie Alexander", email: "leslie.a@gmail.com", img: "" },
    { id: 4, customerName: "Theresa Webb", email: "theresa.w@gmail.com", img: "" },
    { id: 5, customerName: "Albert Flores", email: "albert.f@gmail.com", img: "" },
];

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
            <div className={classes.list}>
                {customersData.map(({ id, customerName, email, img }) => (
                    <div className={classes.list__item} key={id}>
                        <div className={classes.list__item__img}>{img}</div>
                        <div className={classes.list__item__info}>
                            <span className={`${classes.name} ${themeClass}`}>{customerName}</span>
                            <span className={`${classes.email} ${themeClass}`}>{email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersList;

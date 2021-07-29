import React, { Fragment } from "react";
import AppBar from "../components/AppBar/AppBar";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
    return (
        <Fragment>
            <AppBar />
            <Dashboard />
        </Fragment>
    );
};

export default Home;

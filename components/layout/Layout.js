import React from 'react'
import classes from "./Layout.module.css"
import Navbar from './Navbar'
import Main from "./Main"

const Layout = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <Main />
        </div>
    )
}

export default Layout

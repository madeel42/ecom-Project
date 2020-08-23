import React from "react"
import Sidebar from './sidebar/sidebar'
import ProductComponent from './products/product'
import classes from './productsmain.module.css'
const MainProductsComp = () => {
    return (
        <div className={classes.mainProductWrapper}>
            <Sidebar/>
            <ProductComponent/>
        </div>
    )
}
export default MainProductsComp
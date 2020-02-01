import React from "react"
import {useHistory} from "react-router"
import AddCard from "./add-card"
import ProductCard from "./product-card";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "nowrap column"
    }
})

const Home = () => {
    const history = useHistory()
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <ProductCard product = {product1}/>
            <ProductCard product={product2}/>
            <AddCard onAdd={() => history.push({pathname: "/product/form"})}/>
        </div>
    )
}

const product1 = {
    name: "Lenovo HW10 Bluetooth Watch IP68 Waterproof Sport Smartwatch Fitness",
    img: "https://www.directcell.ca/wp-content/uploads/2019/11/Lenovo20HW1020Bluetooth20Watch20IP6820Waterproof20Sport20Smartwatch20Fitness.jpg"
}

const product2 = {
    name: "Samsung Galaxy Buds 2019, Bluetooth True Wireless Earbuds - International Version - Black",
    img: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/143/14348/14348301.jpg"
}

export default Home

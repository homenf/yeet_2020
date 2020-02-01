import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  }
})

const AddProduct = () => {
  const styles = useStyles()
  return <div className={styles.container}>Form Page</div>
}

export default AddProduct

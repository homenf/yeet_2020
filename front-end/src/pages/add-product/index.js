import React from "react"
import { makeStyles, Typography, Container } from "@material-ui/core"
import Form from "./form"
import { withFormik } from "formik"
import Badges from "./badges"

const useStyles = makeStyles({
  container: {
    padding: "0 45px"
    // width: "100vw"
  },
  titleContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20
  },
  title: {
    marginBottom: 20
  },
  badgesContainer: {
    position: "absolute",
    top: 225,
    right: 150
  }
})

const AddProduct = ({ values, handleChange }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title} variant="h4">
          Add a New Product
        </Typography>
        <Typography variant="subtitle1">
          Add a detailed description to make your product shine out from others!
        </Typography>
      </div>
      <Form values={values} handleChange={handleChange} />
      <div className={classes.badgesContainer}>
        <Badges values={values} />
      </div>
    </div>
  )
}

const formSchema = {
  mapPropsToValues: () => ({
    productDescription: "",
    included: ""
  })
}

export default withFormik(formSchema)(AddProduct)

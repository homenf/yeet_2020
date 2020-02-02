import React from "react"
import { makeStyles, Typography, Container } from "@material-ui/core"
import ProgressBar from "../../components/progressBar"
import Form from "./form"
import { withFormik } from "formik"
import Badges from "./badges"

const useStyles = makeStyles({
  container: {
    padding: "0 45px",
    width: "100%"
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
    top: 250,
    right: 125
  }
})

const AddProduct = ({ values, handleChange }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <ProgressBar />
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
    included: "",
    specifications: "",
    category: ""
  })
}

export default withFormik(formSchema)(AddProduct)

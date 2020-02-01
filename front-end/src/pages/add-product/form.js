import React from "react"
import {
  makeStyles,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core"

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  titleContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    width: "100%"
  },
  input: {
    marginBottom: 20
  },
  productInput: {
    width: 600
  }
})

const Form = ({ values: { productDescription, included }, handleChange }) => {
  const classes = useStyles()
  return (
    <div>
      <form className={classes.form}>
        <FormControl className={classes.input}>
          <TextField
            className={classes.productInput}
            value={productDescription}
            name="productDescription"
            onChange={handleChange}
            id="standard"
            label="Product Description"
            rows={6}
            variant="outlined"
            multiline
          />
          <FormHelperText id="my-helper-text">
            Add a short focused description to let your customers get an idea of
            your product
          </FormHelperText>
        </FormControl>
        <FormControl>
          <TextField
            className={classes.productInput}
            value={included}
            name="included"
            onChange={handleChange}
            id="standard"
            label="What's included"
            rows={6}
            variant="outlined"
            multiline
          />
          <FormHelperText id="my-helper-text">
            Add additional accesories included with you product
          </FormHelperText>
        </FormControl>
      </form>
    </div>
  )
}

export default Form

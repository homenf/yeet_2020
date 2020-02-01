import React from "react"
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Fab
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles({
  card: {
    display: "flex",
    width: 400,
    justifyContent: "center",
    padding: 10
  },
  content: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center"
  },
  title: {
    marginBottom: 20
  },
  button: {
    backgroundColor: "rgb(255,242,0)",
    color: "rgb(0,70,190)"
  }
})

const AddCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h6">
          Add a New Product
        </Typography>

        <Fab size="medium" className={classes.button} aria-label="add">
          <AddIcon />
        </Fab>
      </CardContent>
    </Card>
  )
}

export default AddCard

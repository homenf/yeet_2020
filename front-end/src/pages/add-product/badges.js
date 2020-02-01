import React from "react"
import { makeStyles, Card, CardContent, Badge } from "@material-ui/core"
import clsx from "clsx"

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
    alignItems: "center",
    width: "50%"
  },
  title: {
    marginBottom: 20
  },
  shape: {
    backgroundColor: "red",
    width: 40,
    height: 40
  },
  shapeCircle: {
    borderRadius: "50%"
  },
  badge: {
    color: "green"
  }
})

const Badges = ({ values }) => {
  const classes = useStyles()
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />

  return (
    <Card className={classes.card}>
      {Object.keys(values).map(key => (
        <CardContent className={classes.content}>
          <Badge
            className={classes.badge}
            color="primary"
            overlap="circle"
            badgeContent={values[key] ? "✓" : null}
          >
            {circle}
          </Badge>
        </CardContent>
      ))}
    </Card>
  )
}

export default Badges

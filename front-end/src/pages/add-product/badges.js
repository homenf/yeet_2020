import React from "react"
import {
  makeStyles,
  Card,
  CardContent,
  Badge,
  Typography
} from "@material-ui/core"
import clsx from "clsx"
import {
  ImportContactsRounded,
  SubjectRounded,
  AspectRatio,
  Category
} from "@material-ui/icons"

const Badges = ({ values }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content} style={{ width: "100%" }}>
        <Typography className={classes.title} variant="subtitle1" align="left">
          Badges
        </Typography>
      </CardContent>
      {Object.keys(values).map(key => (
        <CardContent key={key} className={classes.content}>
          <Badge
            className={classes.badge}
            color="primary"
            overlap="circle"
            badgeContent={
              values[key].length > schema[key].badgeValidation ? "✓" : null
            }
          >
            <div className={clsx(classes.shape, classes.shapeCircle)}>
              {schema[key].icon}
            </div>
          </Badge>
        </CardContent>
      ))}
    </Card>
  )
}

const schema = {
  productDescription: { icon: <ImportContactsRounded />, badgeValidation: 80 },
  included: { icon: <SubjectRounded />, badgeValidation: 80 },
  specifications: { icon: <AspectRatio />, badgeValidation: 80 },
  category: { icon: <Category />, badgeValidation: 0 }
}

const useStyles = makeStyles({
  card: {
    display: "flex",
    width: 300,
    justifyContent: "flex-start",
    padding: 10,
    flexFlow: "row wrap"
  },
  content: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    width: "50%"
  },
  title: {
    fontWeight: 500
  },
  shape: {
    backgroundColor: "yellow",
    width: 50,
    height: 50,
    display: "flex",
    flexGrow: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  shapeCircle: {
    borderRadius: "50%"
  },
  badge: {
    color: "blue"
  }
})
export default Badges

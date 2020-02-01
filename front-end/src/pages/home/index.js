import React from "react"
import { useHistory } from "react-router"
import AddCard from "./add-card"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  }
})

const Home = () => {
  const history = useHistory()
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <AddCard onAdd={() => history.push({ pathname: "/product/form" })} />
    </div>
  )
}

export default Home

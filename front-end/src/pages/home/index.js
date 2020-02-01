import React from "react"
import AddCard from "./add-card"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  }
})

const Home = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <AddCard />
    </div>
  )
}

export default Home

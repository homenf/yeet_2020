import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Layout from "./components/layout"
import Home from "./pages/home"
import { Switch, Route } from "react-router-dom"
import AddProduct from "./pages/add-product"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/product/form">
          <AddProduct />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

import * as React from "react"
import { About } from "../components/About"
import { Header } from "../components/Header"
import '../styles/global.css'


// markup
const IndexPage = () => {
  return (
      <main >
        <Header></Header>
        <About></About>
      </main>
  )
}

export default IndexPage

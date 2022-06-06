import * as React from "react"
import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Review } from "../components/Review"
import '../styles/global.css'


// markup
const IndexPage = () => {
  return (
      <main >
        <Header></Header>
        <About></About>
        <Review></Review>
        <Footer></Footer>
      </main>
  )
}

export default IndexPage

import * as React from "react"
import Helmet from "react-helmet"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Review } from "../components/Review"
import '../styles/global.css'


// markup
const IndexPage = () => {
  return (
      <main >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ремонт бытовой техники по Воронежской области</title>
          <meta name="keywords" content="Ремонт стиральных машин, Ремонт бытовой техники, Воронежская область, Лиски, Острогожск, Нововоронеж, Воронеж, Бобров, Ремонт бытовой техники по Воронежской области, мастер, мастер по ремонту бытовой техники, починить стиральную машину, стиральная машина" />
          <meta name="description" content="Ремонт бытовой техники по Воронежской области. Консультация бесплатно. Ремонт в день обращения. Выезд мастера в г. Лиски, Острогожск, Нововоронеж, Воронеж, Бобров, и прилегающие города и села." />
        </Helmet>
        <Header></Header>
        <About></About>
        <Review></Review>
        <Contact></Contact>
        <Footer></Footer>
      </main>
  )
}

export default IndexPage

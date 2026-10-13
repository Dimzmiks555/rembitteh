import React from 'react'
import Helmet from 'react-helmet'
import '../styles/global.css'
export default function NotFound(){return <main className="container section"><Helmet><title>Страница не найдена</title><meta name="robots" content="noindex"/></Helmet><p className="eyebrow">ОШИБКА 404</p><h1>Такой страницы нет.</h1><p style={{margin:'24px 0'}}>Вернитесь на главную, чтобы связаться с мастером.</p><a className="button" href="/">На главную</a></main>}

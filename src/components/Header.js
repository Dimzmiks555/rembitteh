import React from 'react'
import LOGO from '../images/LOGO.svg'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <div className='logo'>
                    <img src={LOGO}></img>
                </div>
                <ul>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Преимущества</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <div>
                    <h2>+7 920 464 57-92</h2>
                </div>
            </nav>
            <div className='hero'>
                <h1>Ремонт стиральных машин в городе Лиски</h1>
                <h2>На дому</h2>
                <h2>Консультация бесплатно</h2>
                <button>Оставить заявку</button>
            </div>
        </div>
    </header>
  )
}

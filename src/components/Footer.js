import React from 'react'
import LOGO from '../images/LOGO.svg'

export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <nav>
                <div className='logo'>
                    <img src={LOGO}></img>
                    <h3>Ремонт бытовой техники</h3>
                </div>
                <ul>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    {/* <li>
                        <a href="#">Преимущества</a>
                    </li> */}
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <div>
                    <h2>+7 920 464 57-92</h2>
                    <h3>alexa.afa@yandex.ru</h3>
                </div>
            </nav>
        </div>
    </footer>
  )
}

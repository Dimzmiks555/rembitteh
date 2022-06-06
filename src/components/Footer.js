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
                        <a href="#about">О нас</a>
                    </li>
                    <li>
                        <a href="#reviews">Отзывы</a>
                    </li>
                    {/* <li>
                        <a href="#">Преимущества</a>
                    </li> */}
                    <li>
                        <a href="#contact">Контакты</a>
                    </li>
                </ul>
                <div>
                    <h2><a href='tel:89204645792'>+7 920 464 57-92</a></h2>
                    <h3><a href='mailto:alexa.afa@yandex.ru'>alexa.afa@yandex.ru</a></h3>
                </div>
            </nav>
        </div>
    </footer>
  )
}

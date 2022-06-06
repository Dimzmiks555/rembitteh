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
            <div className='hero'>
                <h1>Ремонт стиральных машин по Воронежской области</h1>
                <h2>Консультация бесплатно. Ремонт в день обращения</h2>
                <h2>Выезд мастера в г. Лиски, Острогожск, Нововоронеж, Воронеж, Бобров, и прилегающие города и села.</h2>
                <button><a href='#contact'>Оставить заявку</a></button>
            </div>
        </div>
    </header>
  )
}

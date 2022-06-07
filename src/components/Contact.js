import React from 'react'

import Main from '../images/master.png'
import smm from '../images/smm.png'

export const Contact = () => {





  return (
    <div className='section' id="contact">
        <div className='container'>
            <h2>Контакты</h2>
            <div className='contact_block'>
                <div>
                    <img src={Main}></img>
                </div>
                <div>
                    <h1>Александр</h1>
                    <p>Вы можете связаться с нами, просто позвонив на номер телефона, указанный ниже, отправить письмо на почту, или воспользоваться WhatsApp, Viber или Telegram!   </p>
                    <h2>Телефон</h2>
                    <h3><a href='tel:89204645792'>+7 920 464 57-92</a></h3>
                    <h2>Электронная почта</h2>
                    <h3><a href='mailto:alexa.afa@yandex.ru'>alexa.afa@yandex.ru</a></h3>
                    <img id="smm" src={smm}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

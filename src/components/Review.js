import React from 'react'

import Person1 from '../images/person_1.jpg'
import Person2 from '../images/person_2.jpg'
import Person3 from '../images/person_3.jpg'
import Person4 from '../images/person_4.jpg'

export const Review = () => {



    const cards = [
        {
        id: 1,
        title: "Иван",
        desc: "Мы профессионалы своего дела, работаем на результат, решим проблему с поломкой в самые оптимальные сроки",
        image: Person1
        },
        {
        id: 2,
        title: "Юлия",
        desc: "Наша работа подкреплена гарантией на 6 месяцев - и это не пустые слова!",
        image: Person2
        },
        {
        id: 3,
        title: "Дмитрий",
        desc: "У нас существует система скидок на проведение работ по ремонту, пенсионерам скидки",
        image: Person3
        },
        {
        id: 4,
        title: "Сергей",
        desc: "С нами вы не ощутите дискомфорта и не превратите квартиру в место нашествия. Аккуратность и уважение к заказчику.",
        image: Person4
        },
    ]


  return (
    <div className='section' id="reviews">
        <div className='container'>
            <h2>Отзывы довольных клиентов</h2>
            <div className='review_block'>
                {
                    cards.map(card => (
                        <div className='review_card' id={"card_" + card?.id}>
                            <div className='card_promo'>
                                <div>
                                    <img src={card?.image}></img>
                                </div>
                                <h4>
                                    {card?.title}
                                </h4>
                            </div>
                            <div className='card_info'>
                                <p>
                                    {card?.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

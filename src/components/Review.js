import React from 'react'

import Person1 from '../images/person_1.jpg'
import Person2 from '../images/person_2.jpg'
import Person3 from '../images/person_3.jpg'
import Person4 from '../images/person_4.jpg'
import Person5 from '../images/person_5.webp'

export const Review = () => {



    const cards = [
        {
        id: 1,
        title: "Иван",
        desc: "Приехал мастер Александр, отремонтировал машинку. Очень вежливый и аккуратный, спасибо ему большое .",
        image: Person1
        },
        {
        id: 2,
        title: "Юлия",
        desc: "Оставили заявку, в течение часа мастер приехал и устранил течь в машинке, огромное спасибо вам.",
        image: Person2
        },
        {
        id: 3,
        title: "Дмитрий",
        desc: "Хороший честный мастер, по больше бы таких, все быстро и недорого сделал, спасибо.",
        image: Person3
        },
        {
        id: 4,
        title: "Сергей",
        desc: "Быстрый и недорогой ремонт , очень хороший сервис.",
        image: Person4
        },
        {
        id: 5,
        title: "Елена",
        desc: "Оперативно решили проблему со стиральной машиной, очень рекомендую, 5 баллов!",
        image: Person5
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

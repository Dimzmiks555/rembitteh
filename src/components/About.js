import React from 'react'

export const About = () => {



    const cards = [
        {
        id: 1,
        title: "Качество",
        desc: "Мы профессионалы своего дела, работаем на результат, решим проблему с поломкой в самые оптимальные сроки",
        },
        {
        id: 2,
        title: "Гарантия",
        desc: "Наша работа подкреплена гарантией на 6 месяцев - и это не пустые слова!",
        },
        {
        id: 3,
        title: "Лояльность",
        desc: "У нас существует система скидок на проведение работ по ремонту, пенсионерам скидки",
        },
        {
        id: 4,
        title: "Аккуратность",
        desc: "С нами вы не ощутите дискомфорта и не превратите квартиру в место нашествия. Аккуратность и уважение к заказчику.",
        },
    ]


  return (
    <div className='section' id="about">
        <div className='container'>
            <h2>Почему стоит выбрать нас</h2>
            <div className='about_block'>
                {
                    cards.map(card => (
                        <div className='about_card' id={"card_" + card?.id}>
                            <div className='card_promo'>
                                {/* <img src="../images/nice.png"></img> */}
                            </div>
                            <div className='card_info'>
                                <h4>
                                    {card?.title}
                                </h4>
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

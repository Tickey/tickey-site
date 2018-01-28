import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {IndexLink} from 'react-router';
import {SecondNav} from '../../components/reusable/';
import classes from './Campaign.scss';
import {Button} from '../../components/form-components';
import Stores from '../reusable/Stores/Stores';
import Step from '../reusable/Steps/Step';
import stepOneImg from './img/phone_view_1.png';
import stepTwoImg from './img/phone_view_2.png';
import stepThreeImg from './img/phone_view_3.png';

export default class Campaign extends Component {

    render() {
        const metroStations = ['Люлин',
            'Константин Величков',
            'Сердика 1 и 2',
            'Софийски Университет',
            'Летище София',
            'НДК',
            'Витоша',
            'Бизнес парк'
        ];


        return (
            <div>
                <section className={classes['blue-gradient']}>
                    <SecondNav/>
                    <section className={classes['main-slogan']}>
                        <div className={classes.name}/>
                        <h1 className="centered uppercase">ПЛАТИ БИЛЕТА<br/>
                            <span className={classes['yellow-highlight']}>В СОФИЯ</span><br/>
                            <span className={classes['thinner']}>през смартфона</span>
                        </h1>
                    </section>
                    <p className="gray-text centered strong mt-20">Системата на TICKEY работи в:</p>
                    <section className={classes['station']}>
                        <div className={classes.metro}>
                            <div className={classes.logo}/>
                            <div className={`gray-text text-16 ${classes.info}`}>в 9 метростанции</div>
                            <a href="#metro" className="strong base-link red-text text-14 right-align d-block">виж кои</a>
                        </div>
                        <div className={classes.cgm}>
                            <div className={classes.logo}/>
                            <div className={`gray-text text-16 ${classes.info}`}>в автобусни линии</div>
                            <div className={`strong text-16`}>84,184,384</div>
                            <a href="#bus" className="strong base-link red-text text-14 right-align d-block">виж кои</a>
                        </div>
                        <div className={classes['how-it-works']}>
                            <Button type="gray-bordered" label="КАК РАБОТИ" addedClass="strong"/>
                        </div>
                    </section>
                    <section className={classes.partners}>
                        <h2 className="gray-text centered strong mt-20 text-14">В партньорство с:</h2>
                        <div className={`${classes['sofia-partners']} d-table`}>
                            <div className={`${classes['sofia-municipality']} d-cell`}/>
                            <div className={`${classes['cgm-text']} d-cell`}/>
                            <div className={`${classes['metropoliten']} d-cell`}/>
                        </div>
                        <Stores/>
                    </section>
                    <section className={classes['stations-info']}>
                        <div className={classes['metro-stations']}>
                            <div className={classes['metro-logo']} id="metro"/>
                            <h3 className={`text-16 centered gray-text strong ${classes.title}`}>Системата на TICKEY работи пилотно
                                в следните станции:</h3>
                            <p className={`${classes['info-text']} text-14 gray-text centered`}>*През приложението може да закупите само
                                единични билети + билет за багаж.</p>
                            <ol start="1">
                                {metroStations.map(station => <li>{station}</li>)}
                            </ol>
                            <p className="red-text strong centered text-16">Коя е твоята станция?</p>
                        </div>

                        <div className={classes['bus-stations']}>
                            <div className={classes['bus-logo']} id="bus"/>
                            <h3 className={`text-16 centered gray-text strong ${classes.title}`}>Център за градска мобилност ЕАД</h3>
                            <p className={`${classes['info-text']} text-14 gray-text centered`}>*През приложението може да закупите само
                                единични билети + билет за багаж.</p>
                            <p className={`${classes['info-text']} text-14 gray-text centered`}>*Автобусите са обозначени със стикери.
                                Автобусите без стикери не са в обхвата
                                на TICKEY.</p>

                            <p className="centered text-20">Системата на TICKEY работи
                                единствено в автобусни линии </p>
                            <p className={`${classes.stations} strong centered text-26`}>84,184,384</p>

                            <p className="red-text strong centered text-16">Коя е твоята станция?</p>
                        </div>
                    </section>


                    <section className={classes.download}>
                        <h3 className="text-20 centered">Свали <strong>TICKEY</strong> безплатно
                            на своя смартфон</h3>
                        <Button type="green" label="Изтегли"/>
                    </section>
                </section>


                <section className={`${classes.steps} mt-10`}>
                    <p className="red-text text-16 strong ml-10">прочети за 3 мин</p>
                    <p className="thinner gray-text uppercase text-20 ml-20">С ТРИ ЛЕСНИ СТЪПКИ КУПУВАШ
                        ПЪРВИЯ СИ БИЛЕТ ПРЕЗ ТЕЛЕФОНА</p>
                    <Step name="Стъпка 1" title={<strong><span>РЕГИСТ</span>РАЦИЯ</strong>} imgSource={stepOneImg}>
                        <p className="centered text-14">
                            В приложението TICKEY регистрацията е възможна по два начина:
                        </p>
                        <ul className="centered text-14 no-list">
                            <li>1. Регистрация през Facebook акаунт;</li>
                            <li>2. Регистрация през e-mail адрес;</li>
                        </ul>
                    </Step>
                    <Step name="Стъпка 2" title={<span><strong><span>Метод</span> за</strong>плащане</span>} imgSource={stepTwoImg}>
                        <p className="centered text-14">ПЛАЩАМ С КАРТА ИЛИ С PAYPAL</p>
                        <p className="centered text-14">Преди да купиш билет през TICKEY трябва да добавиш Метод за плащане в твоя TICKEY профил. Можеш да добавиш повече от един платежен инструмент.
                            Това може да бъде - дебитна
                            карта, кредитна карта или PayPal профил. Избра ли?</p>
                        <div className={classes.partners}/>
                        <p className="red-text centered strong">Как да добавя картата си?</p>
                    </Step>
                    <Step name="Стъпка 3" title={<span><strong><span>Купи б</span>илет</strong>с един линк</span>} imgSource={stepThreeImg}>
                        <p className="centered text-14">След като имаш добавен платежен инструмент, влез в автобуса или застани първи пред турникета в метрото. На екрана ще се изпише станцията или
                            автобуса, в който си. След като
                            информацията е коректна, виждаш цената на билета в големия зелен бутон и го натискаш, за да потвърдиш плащането на билета.</p>
                        <p className="red-text centered strong">Какво е “Моето пътуване?</p>
                        <p className="red-text centered strong">Как да добавя багаж към пътуването си?</p>
                    </Step>
                </section>

                <section className={classes.privacy}>
                    <p className="red-text strong centered">важно</p>
                    <h3 className="text-26 centered"><strong>КОЙ ЗАЩИТАВА</strong> МОИТЕ ДАННИ <strong>И ДАННИТЕ НА МОЯТА КАРТА</strong></h3>
                    <p className="centered text-14">TICKEY не съхранява информация за Вашите карти на своите сървъри. Данните за вашите карти се предоставят директно на партньорите ни от Braintree.
                        Компанията Braintree е
                        собственост на PayPal и предоставят най-високата степен на защита на чувствителната информация свързана с онлайн плащанията.</p>
                    <div className={`${classes['btn-wrapper']} center-block mt-10`}>
                        <Button type="gray-bordered" label="Прочети" addedClass="strong"/>
                    </div>
                </section>
                <section className={classes['another-questions']}>
                    <h4 className="text-16 centered strong">ИМАШ ОЩЕ ВЪПРОСИ, НА КОИТО НЕ СМЕ ОТГОВОРИЛИ?</h4>
                    <p className="text-14 centered">Отиди към FAQ и виж какво са попитали другите или ни пиши.</p>
                    <div className={`col-xs-6 col-md-6 mt-10`}>
                        <Button type="gray-bordered" label="FAQ" addedClass="strong"/>
                    </div>
                    <div className={`col-xs-6 col-md-6  mt-10`}>
                        <Button type="gray-bordered" label="Пиши ни" addedClass="strong"/>
                    </div>
                </section>
            </div>
        );
    }
}

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
                    <section className={`${classes['main-slogan']} wrapper-middle`}>
                        <div className={classes.name}/>
                        <h1 className="centered uppercase">ПЛАТИ БИЛЕТА
                            <span className={classes['yellow-highlight']}>В СОФИЯ</span>
                        </h1>
                        <h2><span className={classes['thinner']}>през смартфона</span></h2>
                    </section>
                    <h3 className="gray-text centered strong mt-20 mb-20 wrapper-middle">Системата на TICKEY работи в:</h3>
                    <section className={`${classes['station']} wrapper-middle`}>
                        <div className={classes['stations-box']}>
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
                        </div>
                        <div className={classes['how-it-works']}>
                            <Button type="gray-bordered" label="КАК РАБОТИ" addedClass="strong"/>
                        </div>
                    </section>
                    <section className={`${classes.partners} clearfix`}>
                        <h3 className="gray-text centered strong mt-20 text-14">В партньорство с:</h3>
                        <div className={`${classes['sofia-partners']} d-table`}>
                            <div className={`${classes['sofia-municipality']} d-cell`}/>
                            <div className={`${classes['cgm-text']} d-cell`}/>
                            <div className={`${classes['metropoliten']} d-cell`}/>
                        </div>

                        <div className={classes['stores-wrapper']}>
                            <Stores/>
                        </div>

                    </section>
                    <section className={`${classes['stations-info']} wrapper clearfix`}>
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


                    <section className={`${classes.download} wrapper-small`}>
                        <h3 className="text-20 centered">Свали <strong>TICKEY</strong> безплатно
                            на своя смартфон</h3>
                        <Button type="green" label="Изтегли"/>
                    </section>
                </section>


                <section className={`${classes.steps} mt-10`}>
                    <h3 className="red-text text-16 strong wrapper">прочети за 3 мин</h3>
                    <h6 className="thinner gray-text uppercase text-20 wrapper">С ТРИ ЛЕСНИ СТЪПКИ КУПУВАШ
                        ПЪРВИЯ СИ БИЛЕТ ПРЕЗ ТЕЛЕФОНА</h6>
                    <Step name="Стъпка 1" title={<strong><span>РЕГИСТ</span>РАЦИЯ</strong>} imgSource={stepOneImg}>
                        <div className={classes['step-inner-info']}>
                            <h3 className="centered text-14">
                                В приложението TICKEY регистрацията е възможна по два начина:
                            </h3>
                            <ul className="centered text-14 no-list">
                                <li>1. Регистрация през Facebook акаунт;</li>
                                <li>2. Регистрация през e-mail адрес;</li>
                            </ul>
                        </div>
                    </Step>
                    <Step name="Стъпка 2" title={<span><strong><span>Метод</span> за</strong>плащане</span>} imgSource={stepTwoImg}>
                        <div className={classes['step-inner-info']}>
                            <h4 className="centered text-14">ПЛАЩАМ С КАРТА ИЛИ С PAYPAL</h4>
                            <h4 className="centered text-14">Преди да купиш билет през TICKEY трябва да добавиш Метод за плащане в твоя TICKEY профил. Можеш да добавиш повече от един платежен
                                инструмент.
                                Това може да бъде - дебитна
                                карта, кредитна карта или PayPal профил. Избра ли?</h4>
                            <div className={classes.partners}/>
                        </div>
                        <div className={classes['step-red-text']}>
                            <h3 className="red-text centered strong">Как да добавя картата си?</h3>
                        </div>
                    </Step>
                    <Step name="Стъпка 3" title={<span><strong><span>Купи б</span>илет</strong>с един линк</span>} imgSource={stepThreeImg}>
                        <div className={classes['step-inner-info']}>
                            <h4 className="centered text-14">След като имаш добавен платежен инструмент, влез в автобуса или застани първи пред турникета в метрото. На екрана ще се изпише станцията
                                или
                                автобуса, в който си. След като
                                информацията е коректна, виждаш цената на билета в големия зелен бутон и го натискаш, за да потвърдиш плащането на билета.</h4>
                            <span>Гледай видеото</span>
                        </div>
                        <div className={classes['step-red-text']}>
                            <h3 className="red-text centered strong">Какво е “Моето пътуване?</h3>
                            <h3 className="red-text centered strong">Как да добавя багаж към пътуването си?</h3>
                        </div>
                    </Step>
                </section>

                <section className={`${classes.privacy}`}>
                    <div className="wrapper-middle">
                        <p className="red-text strong centered">важно</p>
                        <h3 className="text-26 centered"><strong>КОЙ ЗАЩИТАВА</strong> МОИТЕ ДАННИ <strong>И ДАННИТЕ НА МОЯТА КАРТА</strong></h3>
                        <p className="centered text-14">TICKEY не съхранява информация за Вашите карти на своите сървъри. Данните за вашите карти се предоставят директно на партньорите ни от
                            Braintree.
                            Компанията Braintree е
                            собственост на PayPal и предоставят най-високата степен на защита на чувствителната информация свързана с онлайн плащанията.</p>
                        <div className={`${classes['btn-wrapper']} center-block mt-10`}>
                            <Button type="gray-bordered" label="Прочети" addedClass="strong"/>
                        </div>
                    </div>
                </section>
                <section className={`${classes['another-questions']}`}>
                    <div className="wrapper-small">
                        <h4 className="text-16 centered strong">ИМАШ ОЩЕ ВЪПРОСИ, НА КОИТО НЕ СМЕ ОТГОВОРИЛИ?</h4>
                        <p className="text-14 centered">Отиди към FAQ и виж какво са попитали другите или ни пиши.</p>
                        <div className={`col-xs-6 col-md-6 mt-10`}>
                            <Button type="gray-bordered" label="FAQ" addedClass="strong"/>
                        </div>
                        <div className={`col-xs-6 col-md-6  mt-10`}>
                            <Button type="gray-bordered" label="Пиши ни" addedClass="strong"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

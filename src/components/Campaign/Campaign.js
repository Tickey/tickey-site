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
                <SecondNav/>
                <section className={classes['main-slogan']}>
                    <div className={classes.name}/>
                    <h1 className="centered">ПЛАТИ БИЛЕТА<br/>
                        <span className={classes['yellow-highlight']}>В СОФИЯ</span><br/>
                        <span className={classes['thinner']}>през смартфона</span>
                    </h1>
                </section>
                <p className="gray-text centered strong mt-20">Системата на TICKEY работи в:</p>
                <section className={classes['station']}>
                    <div className="metro">
                        <div className={classes.logo}/>
                        <div className={`gray-text`}>в 9 метростанции</div>
                        <Button type="red" label="виж кои"/>
                    </div>
                    <div className="cgm">
                        <div className={classes.logo}/>
                        <div className={`gray-text`}>в 9 метростанции</div>
                        <div className={`additional-info`}/>
                        <Button type="red" label="виж oще"/>
                    </div>
                    <Button type="gray-bordered" label="КАК РАБОТИ" addedClass="strong"/>
                </section>
                <section className={classes.partners}>
                    <div className={classes['sofia-partners']}>
                        <h2>В партньорство с:</h2>
                        <div className={classes['sofia-municipality']}/>
                        <div className={classes['cgm-text']}/>
                        <div className={classes['metro-text']}/>
                    </div>
                    <Stores/>
                </section>
                <section className={classes['stations-info']}>
                    <div className={classes['metro-stations']}>
                        <div className={classes['metro-logo']}/>
                        <h3 className={`gray-text strong ${classes.title}`}>Системата на TICKEY работи пилотно
                            в следните станции:</h3>
                        <p className={`${classes['info-text']}`}>*През приложението може да закупите само
                            единични билети + билет за багаж.</p>
                        <ol start="1">
                            {metroStations.map(station => <li>{station}</li>)}
                        </ol>
                        <p className="red-text">Коя е твоята станция?</p>
                    </div>

                    <div className={classes['bus-stations']}>
                        <div className={classes['bus-logo']}/>
                        <h3 className={`gray-text strong ${classes.title}`}>Център за градска мобилност ЕАД</h3>
                        <p className={`${classes['info-text']}`}>*През приложението може да закупите само
                            единични билети + билет за багаж.</p>
                        <p className={`${classes['info-text']}`}>*Автобусите са обозначени със стикери.
                            Автобусите без стикери не са в обхвата
                            на TICKEY.</p>

                        <p className="big-text">Системата на TICKEY работи
                            единствено в автобусни линии </p>
                        <p className={classes.stations}>84,184,384</p>

                        <p className="red-text">Коя е твоята станция?</p>
                    </div>
                </section>


                <section className={classes.download}>
                    <h3>Свали <strong>TICKEY</strong> безплатно
                        на своя смартфон</h3>
                    <Button type="green" label="Изтегли"/>
                </section>

                <section className={classes.steps}>
                    <p className="red-text">прочети за 3 мин</p>
                    <p className="thiner">С ТРИ ЛЕСНИ СТЪПКИ КУПУВАШ
                        ПЪРВИЯ СИ БИЛЕТ ПРЕЗ ТЕЛЕФОНА</p>
                    <Step name="Стъпка 1" title="РЕГИСТРАЦИЯ" imgSource={stepOneImg}>
                        <p className="centered">
                            В приложението TICKEY регистрацията е възможна по два начина:
                        </p>
                        <ol start="1">
                            <li>1. Регистрация през Facebook акаунт;</li>
                            <li>2. Регистрация през e-mail адрес;</li>
                        </ol>
                    </Step>
                    <Step name="Стъпка 2" title="Метод за плащане" imgSource={stepTwoImg}>
                        <p>ПЛАЩАМ С КАРТА ИЛИ С PAYPAL</p>
                        <p>Преди да купиш билет през TICKEY трябва да добавиш Метод за плащане в твоя TICKEY профил. Можеш да добавиш повече от един платежен инструмент. Това може да бъде - дебитна
                            карта, кредитна карта или PayPal профил. Избра ли?</p>
                        <div className={classes.partners}/>
                        <p className="red-text">Как да добавя картата си?</p>
                    </Step>
                    <Step name="Стъпка 3" title="Купи билет с един линк" imgSource={stepThreeImg}>
                        <p>След като имаш добавен платежен инструмент, влез в автобуса или застани първи пред турникета в метрото. На екрана ще се изпише станцията или автобуса, в който си. След като
                            информацията е коректна, виждаш цената на билета в големия зелен бутон и го натискаш, за да потвърдиш плащането на билета.</p>
                        <p className="red-text">Какво е “Моето пътуване?</p>
                        <p className="red-text">Как да добавя багаж към пътуването си?</p>
                    </Step>
                </section>
                <section className={classes.privacy}>
                    <p className="red-text">важно</p>
                    <h3><strong>КОЙ ЗАЩИТАВА</strong> МОИТЕ ДАННИ <strong>И ДАННИТЕ НА МОЯТА КАРТА</strong></h3>
                    <p>TICKEY не съхранява информация за Вашите карти на своите сървъри. Данните за вашите карти се предоставят директно на партньорите ни от Braintree. Компанията Braintree е
                        собственост на PayPal и предоставят най-високата степен на защита на чувствителната информация свързана с онлайн плащанията.</p>
                    <Button type="gray-bordered" label="Прочети"/>
                </section>
                <section className={classes['another-questions']}>
                    <h4>ИМАШ ОЩЕ ВЪПРОСИ, НА КОИТО НЕ СМЕ ОТГОВОРИЛИ?</h4>
                    <p>Отиди към FAQ и виж какво са попитали другите или ни пиши.</p>
                    <Button type="gray-bordered" label="FAQ"/>
                    <Button type="gray-bordered" label="Пиши ни"/>
                </section>
            </div>
        );
    }
}

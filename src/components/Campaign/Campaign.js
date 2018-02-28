import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {IndexLink} from 'react-router';
import {SecondNav} from '../../components/reusable/';
import classes from './Campaign.scss';
import {Button} from '../../components/form-components';
import Stores from '../reusable/Stores/Stores';
import Step from '../reusable/Steps/Step';
import stepOneImg from './img/1.gif';
import stepTwoImg from './img/2.gif';
import stepThreeImg from './img/3.gif';
import * as Scroll from 'react-scroll';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import Modal from '../Modals/Modal';
import Slider from 'react-slick';

export default class Campaign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoMetroModal: false,
            videoBusModal: false

        };
        this.scrollToSteps = this.scrollToSteps.bind(this);
        this.toggleMetroVideo = this.toggleMetroVideo.bind(this);
        this.toggleBusVideo = this.toggleBusVideo.bind(this);
    }


    scrollToSteps = () => {
        /*scroller.scrollTo('stepsScrollElement', {
            duration: 1500,
            delay: 100,
            smooth: true,
            containerId: 'steps',
            offset: 50
        })*/
    }

    toggleMetroVideo = () => {
        this.setState({
            videoMetroModal: !this.state.videoMetroModal
        })
    }

    toggleBusVideo = () => {
        this.setState({
            videoBusModal: !this.state.videoBusModal
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            fade: true
        };
        const {onDownloadClick, writeUs, type} = this.props;
        const metroStations = ['Люлин',
            'Константин Величков',
            'Сердика 1',
            'Сердика 2',
            'Софийски Университет',
            'Летище София',
            'НДК',
            'Витоша',
            'Бизнес парк',
            'стадион "Васил Левски"',
            'Опълченска',
            'Лъвов мост',
            'Младост 1',
            'Цариградско шосе'
        ];


        return (
            <div className={classes[type]}>
                {this.state.videoMetroModal &&
                <Modal title="Как работи Tickey в метрото" onCloseClick={this.toggleMetroVideo}>
                    <iframe max-width="560" width="100%" height="315" src="https://www.youtube.com/embed/WHVLaoy1LLo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
                </Modal>
                }

                {this.state.videoBusModal &&
                <Modal title="Как работи Tickey в автобусите" onCloseClick={this.toggleBusVideo}>
                    <iframe max-width="560" width="100%" height="315" src="https://www.youtube.com/embed/mMyOyE_dZm4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
                </Modal>
                }
                <section className={`${classes['blue-gradient']}`}>
                    <SecondNav onDownloadClick={onDownloadClick}/>
                    <section className={`${classes['main-slogan']} wrapper-middle`}>
                        <div className={classes.name}/>
                        <h1 className="h1 centered uppercase">ПЛАТИ БИЛЕТА {type && type === "sofia" ? "В София" : "Във Варна"}
                        </h1>
                        <h2 className="h2 centered uppercase"><span className={classes['thinner']}>през смартфона</span></h2>
                    </section>
                    <h3 className="h3 gray-text centered strong mt-10 mb-10 wrapper-middle">Системата на TICKEY работи в:</h3>
                    <section className={`${classes['station']} wrapper-middle`}>
                        {type && type === "sofia" &&
                        <div className={classes['stations-box']}>
                            <div className={classes.metro}>
                                <div className={classes.logo}/>
                                <div className={`gray-text text-16 ${classes.info}`}>14 метростанции</div>
                                <a href="#metro" className="strong base-link red-text text-14 right-align d-block">виж кои</a>
                            </div>
                            <div className={classes.cgm}>
                                <div className={classes.logo}/>
                                <div className={`gray-text text-16 ${classes.info}`}>автобусни линии</div>
                                <div className={`strong text-16`}>84,184,384</div>
                                {/*<a href="#bus" className="strong base-link red-text text-14 right-align d-block">виж кои</a>*/}
                            </div>
                        </div>
                        }
                        <div className={classes['how-it-works']}>
                            {type && type === "sofia" && <Button type="gray-bordered" label="КАК РАБОТИ В МЕТРОТО" addedClass="strong" onClick={this.toggleMetroVideo}/>}
                            <Button type="gray-bordered" label="КАК РАБОТИ В АВТОБУСИТЕ" addedClass="strong" onClick={this.toggleBusVideo}/>
                        </div>
                    </section>
                    <section className={`${classes.partners} clearfix`}>
                        <h3 className="h3 gray-text centered strong mt-20">В партньорство с:</h3>

                        {type && type === "sofia" ?
                            <div className={`${classes['sofia-partners']} d-table`}>
                                <div className={`${classes['sofia-municipality']} d-cell`}/>
                                <div className={`${classes['cgm-text']} d-cell`}/>
                                <div className={`${classes['metropoliten']} d-cell`}/>
                            </div> :
                            <div className={`${classes['varna-partners']} d-table`}>
                                <div className={`${classes['varna-municipality']} d-cell`}/>
                            </div>
                        }
                        <div className={classes['stores-wrapper']}>
                            <Stores/>
                        </div>

                    </section>
                    {type && type === "sofia" &&
                    <section className={`${classes['stations-info']} wrapper clearfix`}>
                        <div className={classes['metro-stations']}>
                            <div className={classes['metro-logo']} id="metro"/>
                            <h3 className={`h3 centered gray-text ${classes.title}`}>Системата на TICKEY работи пилотно
                                в следните станции:</h3>
                            <p className={`${classes['info-text']} text-14 gray-text centered clearfix`}>*През приложението може да закупите само
                                по една карта за екнократно пътуване.</p>
                            <ol start="1">
                                {metroStations.map(station => <li className="strong">{station}</li>)}
                            </ol>
                            <p className={`${classes['bottom-red-text']} red-text strong centered text-16`}>Виж на картата</p>
                        </div>

                        <div className={classes['bus-stations']}>
                            <div className={classes['bus-logo']} id="bus"/>
                            <h3 className={`h3 centered gray-text ${classes.title}`}>Център за градска мобилност ЕАД</h3>
                            <p className={`${classes['info-text']} text-14 gray-text centered`}>*През приложението може да закупите само
                                по една или повече карти за еднократно пътуване</p>
                            <p className={`${classes['info-text']} text-14 gray-text centered`}>*Автобусите са обозначени със стикери.
                                Автобусите без стикери не са в обхвата
                                на TICKEY.</p>

                            <p className="centered text-20">Към момента системата на TICKEY работи единствено в автобусни линии </p>
                            <p className={`${classes.stations} strong centered text-26`}>84, 184, 384</p>

                            {/*<p className={`${classes['bottom-red-text']} red-text strong centered text-16`}>Коя е твоята линия?</p>*/}
                        </div>
                    </section>}

                    <section className={`${classes.download} wrapper-small centered`}>
                        <h3 className="h3 centered gray-text">Свали <strong>TICKEY</strong> безплатно
                            на своя смартфон</h3>
                        <Button type="green" label="Изтегли" onClick={onDownloadClick}/>
                    </section>
                </section>


                <section className={`${classes.steps} mt-10`} name="stepsScrollElement">
                    <h3 className="h3 red-text strong wrapper">прочети за 3 мин</h3>
                    <h6 className="h6 thinner gray-text uppercase wrapper mb-20">KУПИ ПЪРВИЯ СИ БИЛЕТ ПРЕЗ СМАРТФОНА В ТРИ ЛЕСНИ СТЪПКИ, А ВСЕКИ СЛЕДВАЩ САМО С ЕДИН КЛИК</h6>
                    <Step name="Стъпка 1" title={<strong><span>РЕГИСТ</span>РАЦИЯ</strong>} imgSource={stepOneImg}>
                        <div className={classes['step-inner-info']}>
                            <h4 className="h4 centered">
                                В приложението TICKEY регистрацията е възможна по два начина:
                            </h4>
                            <ul className="centered text-14 no-list">
                                <li>1. Регистрация през Facebook профил;</li>
                                <li>2. Регистрация през e-mail адрес.</li>
                            </ul>
                        </div>
                    </Step>
                    <Step name="Стъпка 2" title={<span><strong><span>Метод</span> за</strong> плащане</span>} imgSource={stepTwoImg}>
                        <div className={classes['step-inner-info']}>
                            <h4 className="h4 centered">ПЛАЩАМ С КАРТА ИЛИ С PAYPAL</h4>
                            <h4 className="h4 centered">Преди да купиш билет през TICKEY трябва да добавиш Метод за плащане в твоя TICKEY профил. Можеш да добавиш повече от един платежен
                                инструмент (дебитна
                                карта, кредитна карта или PayPal профил). Избра ли?</h4>
                            <div className={classes.partners}/>
                        </div>
                        <div className={classes['step-red-text']}>
                            <h3 className="h3 red-text centered strong">Как да добавя картата си?</h3>
                        </div>
                    </Step>
                    <Slider {...settings}>
                        <div>
                            <Step name="Стъпка 3" title={<span><strong><span>Купи б</span>илет</strong> с един клик</span>} imgSource={stepThreeImg}>
                                <div className={classes['step-inner-info']}>
                                    <h4 className="h4 centered">След като имаш добавен платежен инструмент, влез в автобуса или застани първи пред турникета в метрото. На екрана ще се изпише станцията
                                        или
                                        автобуса, в който си. След като
                                        информацията е коректна, виждаш цената на билета в големия зелен бутон и го натискаш, за да потвърдиш плащането на билета.</h4>
                                    {/*<span>Гледай видеото</span>*/}
                                </div>
                                <div className={classes['step-red-text']}>
                                    <h3 className="h3 red-text centered strong">В метрото</h3>
                                </div>
                            </Step>
                        </div>
                        <div>
                            <Step name="Стъпка 3" title={<span><strong><span>Купи б</span>илет</strong> с един клик</span>} imgSource={stepThreeImg}>
                                <div className={classes['step-inner-info']}>
                                    <h4 className="h4 centered">dasdasdaddната на билета в големия зелен бутон и го натискаш, за да потвърдиш плащането на билета.</h4>
                                    {/*<span>Гледай видеото</span>*/}
                                </div>
                                <div className={classes['step-red-text']}>
                                    <h3 className="h3 red-text centered strong">В автобуса</h3>
                                </div>
                            </Step>
                        </div>
                    </Slider>
                </section>

                <section className={`${classes.privacy}`}>
                    <div className="wrapper-middle">
                        <p className="red-text strong centered">важно</p>
                        <h3 className="h3 centered"><strong>КОЙ ЗАЩИТАВА</strong> МОИТЕ ДАННИ <strong>И ДАННИТЕ НА МОЯТА КАРТА</strong></h3>
                        <p className="centered text-14">TICKEY не съхранява информация за Вашите карти на своите сървъри. Данните за вашите карти се предоставят директно на партньорите ни от
                            Braintree. Компанията Braintree е собственост на PayPal и има най-високата степен на защита на чувствителната информация, свързана с онлайн плащанията.</p>
                        <p className="centered text-14">
                            Платформата Braintree притежава т.нар. PCI DSS Compliance сертификат за сигурност от най-високо ниво. Сертификатът се изисква от всяка компания, която оперира директно с
                            информацията за Вашите банкови карти. На Braintree се доверяват компании на световния пазар като Uber, AirBnB и Skyscanner.
                        </p>
                        {/*                        <div className={`${classes['btn-wrapper']} center-block mt-10`}>
                            <Button type="gray-bordered" label="Прочети" addedClass="strong"/>
                        </div>*/}
                    </div>
                </section>
                <section className={`${classes['another-questions']}`}>
                    <div className="wrapper-small">
                        <h4 className="h4 centered strong">ИМАШ ОЩЕ ВЪПРОСИ, НА КОИТО НЕ СМЕ ОТГОВОРИЛИ?</h4>
                        <p className="text-14 centered">Отиди към FAQ и виж какво са попитали другите или ни пиши.</p>
                        <div className={`col-xs-6 col-md-6 mt-10`}>
                            <Button type="gray-bordered" label="FAQ" addedClass="strong"/>
                        </div>
                        <div className={`col-xs-6 col-md-6  mt-10`}>
                            <Button type="gray-bordered" label="Пиши ни" addedClass="strong" onClick={writeUs}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

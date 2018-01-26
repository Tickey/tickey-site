import React, {Component, PropTypes} from 'react';
import classes from './Accordion.scss';
import AccordeonItem from './AccordeonItem';
import {Scrollbars} from 'react-custom-scrollbars';

class AccordeonWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoPanelHeight: null
        }
    }

    componentDidMount() {
        this.setState({
            infoPanelHeight: document.body.offsetHeight - 50
        })
    }

    render() {
        const {data} = this.props;

        const accordionInfo = [
            {
                name: 'Chart properties',
                info: [
                    {
                        id: 11,
                        description: 'User name:',
                        value: data && data.name
                    },
                    {
                        id: 12,
                        description: 'User place of birth:',
                        value: data && data.birthplace
                    },
                    {
                        id: 10,
                        description: 'Born date:',
                        value: data && data.birthday
                    },
                    {
                        id: 1,
                        description: 'Type:',
                        value: data && data.type
                    },
                    {
                        id: 2,
                        description: 'Profile:',
                        value: data && data.profile
                    },
                    {
                        id: 3,
                        description: 'Authority:',
                        value: data && data.authority
                    },
                    {
                        id: 4,
                        description: 'Definition:',
                        value: data && data.definition
                    },
                    {
                        id: 5,
                        description: 'Strategy:',
                        value: 'To Respond'
                    },
                    {
                        id: 6,
                        description: 'Theme',
                        value: 'Frustration'
                    },
                    {
                        id: 7,
                        description: 'Incarnation Cross:',
                        value: data && data.cross
                    }
                ]
            }
        ];

        const channelsInfo = [
            {
                name: 'Channels',
                info: data.channels
            }
        ]

        const gatesInfo = [
            {
                name: 'Gates',
                info: data.activations
            }
        ]

        return (
            <Scrollbars style={{height: this.state.infoPanelHeight}} autoHide={true} autoHideDuration={200} autoHideTimeout={1000} universal>
                <div className="accordion-wrapper" ref={(wrapper) => {
                    this.wrapper = wrapper;
                }}>
                    {accordionInfo.map(accordeonRow => {
                        return <AccordeonItem data={accordeonRow} type="chartProps" key={accordeonRow.id} accordionChange={this.accordionChange}/>
                    })}

                    {channelsInfo.map(accordeonRow => {
                        return <AccordeonItem data={accordeonRow} type="Channels" accordionChange={this.accordionChange}/>
                    })}

                    {gatesInfo.map(accordeonRow => {
                        return <AccordeonItem data={accordeonRow} type="Gates" accordionChange={this.accordionChange}/>
                    })}
                </div>
            </Scrollbars>
        )
            ;
    }
}

export default AccordeonWrapper;

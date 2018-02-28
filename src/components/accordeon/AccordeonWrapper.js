import React, {Component, PropTypes} from 'react';
import classes from './Accordion.scss';
import AccordeonItem from './AccordeonItem';

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
                        value: "test"
                    },
                    {
                        id: 12,
                        description: 'User place of birth:',
                        value: "test"
                    },
                    {
                        id: 10,
                        description: 'Born date:',
                        value: "test"
                    },
                    {
                        id: 1,
                        description: 'Type:',
                        value: "test"
                    },
                    {
                        id: 2,
                        description: 'Profile:',
                        value: "test"
                    },
                    {
                        id: 3,
                        description: 'Authority:',
                        value: "test"
                    },
                    {
                        id: 4,
                        description: 'Definition:',
                        value: "test"
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
                        value: "test"
                    }
                ]
            }
        ];


        return (
            <div className="accordion-wrapper" ref={(wrapper) => {
                this.wrapper = wrapper;
            }}>
                {accordionInfo.map(accordeonRow => {
                    return <AccordeonItem data={accordeonRow} type="chartProps" key={accordeonRow.id} accordionChange={this.accordionChange}/>
                })}
            </div>
        )
            ;
    }
}

export default AccordeonWrapper;

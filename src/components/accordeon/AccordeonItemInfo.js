import React, {Component, PropTypes} from 'react';
import classes from './Accordion.scss';
import KnowLedge from './Knowledge';

class AccordeonItemInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, type} = this.props;
        if (type === "Gates") {
            const position = data.knowledge && data.knowledge.indexOf("ЛИНИЯ");
            return (
                <KnowLedge data={data} position={position}/>
            )
        }
        if (type === "Channels") {
            return (
                <div className={classes.row} key={data.id}>
                    <div className={classes.value}>{data.name}</div>
                    <div className={classes.description}>
                        {data.gates && data.gates[0].type},<br/>
                        {data.gates && data.gates[0].planet} ,<br/>
                        {data.gates && data.gates[0].flow} ,<br/>
                        {data.gates && data.gates[0].sign} ,<br/>
                        {data.gates && data.gates[0].tag}
                    </div>
                </div>
            )
        }
        return (
            <div className={classes.row} key={data.id}>
                <div className={classes.value}>{data && data.description}</div>
                <div className={classes.description}>{data && data.value}</div>
            </div>
        )

    }
}

export default AccordeonItemInfo;

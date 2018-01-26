import React, {Component, PropTypes} from 'react';
import classes from './Accordion.scss';
import AccordeonItemInfo from './AccordeonItemInfo';

class AccordeonItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            active: false
        };
    }

    onClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const {data, type} = this.props;
        return (
            <div className={`${classes.accordion} ${this.state.active ? classes.active : ''}`}>
                <button className={`${classes['accordion-btn']} tap-highlight`} onClick={this.onClick}>
                    <h4 className={`${classes['accordion-title']} heading-18-22 blue-text`}>{data.name}</h4>
                </button>
                <div className={`${classes['accordion-text']} heading-15-18 gray-text`}>
                    {data.info.map(item => {
                        return <AccordeonItemInfo data={item} type={type} key={item.id}/>
                    })}
                </div>
            </div>


        );
    }
}

export default AccordeonItem;

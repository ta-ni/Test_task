import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getEmployees} from '../actions';
import User from './User';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.filter = this.filter.bind(this);
        this.setMenu = this.setMenu.bind(this);
    }

    componentWillMount() {
        getEmployees()
            .then((employees) => this.setState({employees}));
    }

    filter(param) {
        this.setState({param});
    }

    setMenu(params) {

        let {data, even} = params,
            classList;

        return data.map((item, index) => {

            if (even) {
                classList = index % 2 === 0 ? 'list__menu-item list__menu-item_next ' : 'list__menu-item ';
            } else {
                classList = index % 2 !== 0 ? 'list__menu-item list__menu-item_next ' : 'list__menu-item ';
            }

            return <li onClick={() => this.filter(item)}
                       className={classList}
                       key={item}>
                {item}
            </li>
        })
    }

    render() {
        if (!this.state.employees.length) {
            return null;
        }

        let {cities, categories} = this.props;

        return (
            <div className="list">
                <div className="list__container">
                    <div className="list__header">
                        <p className="list__title">List of VGS employees</p>
                        <div className="list__field-block">
                            <input placeholder="Name or email, e.g. Theresa…" className="list__field"/>
                        </div>
                        <ul className="list__menu">
                            {this.setMenu({
                                data: categories,
                                filterType: 'city',
                                even: true,
                            })}
                        </ul>
                        <ul className="list__menu">
                            {this.setMenu({
                                data: cities,
                                filterType: 'category',
                            })}
                        </ul>
                    </div>
                </div>

                <div className="list__line"/>

                <div className="list__container clearfix">
                    <div className="list__subtitle">{`${this.state.employees.length} employees was found`}</div>
                    <button className="list__button">Add employee</button>
                </div>

                <div className="list__content clearfix">
                    {this.state.employees.map((employee) => {
                        return <User key={employee.id} employee={employee} />
                    })
                    }
                </div>
            </div>
        )
    }
}

List.propTypes = {
    cities: PropTypes.array,
    categories: PropTypes.array,
};

export default connect((state) => ({
    cities: state.cities,
    categories: state.categories,
}))(List);
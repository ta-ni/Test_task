import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let {employee} = this.props;

        return (
            <div className="user clearfix">
                <div className="user__container">
                    <div className="user__column user__column_md">
                        <div className="user__avatar-wrapper">
                            <div style={{'backgroundImage': `url(${employee.avatar})`}}
                                 className="user__avatar"/>
                        </div>

                    </div>
                    <div className="user__column user__column_lg">
                        <p className="user__name">{employee.name}</p>
                        <p className="user__category">{employee.category}</p>
                        <div tabIndex="0" className="user__location">
                            <span className="user__city">{employee.location.city}</span>
                            <span className="user__place">{employee.location.place}</span>
                        </div>
                        <div className="user__info">
                            <div className="user__info-content">
                                <p className="user__info-text">Brativ Rohatyntsiv St, 21</p>
                                <p className="user__info-text">L'viv, 79000</p>
                                <p className="user__info-text">Ukraine</p>
                            </div>
                        </div>
                    </div>
                    <div className="user__column user__column_sm user__column_center-text">
                        <p className="user__column-title">Local time</p>
                        <p className="user__time">{employee.location.time}</p>
                    </div>
                    <div className="user__column user__column_lg user__column_right-text">
                        <p className="user__phone">{employee.contacts.phone}</p>
                        <p className="user__email">{employee.contacts.email}</p>
                    </div>
                    <div className="user__column user__column_xs user__column_right-text">
                        <div tabIndex="0" className="user__more"/>
                        <div className="user__menu">
                            <p className="user__menu-text">Edit</p>
                            <p className="user__menu-text">Move to…</p>
                            <p className="user__menu-text user__menu-text_important">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

User.propTypes = {
    employee: PropTypes.object,
};

export default User;
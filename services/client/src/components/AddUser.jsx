import React from 'react';
import PropTypes from 'prop-types';

const AddUser = (props) => {
    return (
        <form onSubmit={(event) => props.addUser(event)}>
            <div className="field">
                <input
                    name="username"
                    className="input is-large"
                    type="text"
                    placeholder="Enter a username"
                    required
                    value={props.username}
                    onChange={props.handleChange}
                />
            </div>
            <div className="field">
                <input
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Enter a email address"
                    required
                    value={props.email}
                    onChange={props.handleChange}
                />
            </div>
            <input
                type="submit"
                className="button is-primaty is-large is-fullwidth"
                value="Submit"
            />
        </form>
    )
};

AddUser.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
};

export default AddUser;
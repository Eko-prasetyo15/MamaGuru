import React from "react";
import PropTypes from "prop-types";
import Header from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Component(props) {
    const { children } = props;

    return (
        <div className="container py-3">
            <Header />
            <div className="wrapper">{children}</div>
        </div>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

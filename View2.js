/* This view library can show/hide elements. */

import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';

const View2 = (props) => {
    const { children, hide, style } = props;
    if (hide) {
        return null;
    }
    return (
        <View {...this.props} style={style}>
            {children}
        </View>
    );
};

View2.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
        ])),
    ]).isRequired,
    /* style: View.PropTypes.style, */
    hide: PropTypes.bool,
};

export default View2;
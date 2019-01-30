/* This is a customized button that is cross platformed and used with extended stylesheet */
import React from 'react';
import { View, TouchableHighlight, TouchableNativeFeedback, Text, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $buttonColor: '#317af7',
    $buttonTextColor: '#ffffff',
    $buttonUnderlayColor: '#7BAAF9',
    button: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        '@media ios': {
            borderRadius: 4,
        },
        '@media android': {
            borderRadius: 7,
            elevation: 3,
        },
        alignItems: 'center',
    },
    btnenabled: {
        backgroundColor: '$buttonColor',
    },
    btndisabled: {
        backgroundColor: '#30c2f7',
    },
    text: {
        color: '$buttonTextColor',
        fontSize: 16,
        fontFamily: 'HelveticaNeue-Bold',
    },
});

export const Button = ({ text, onPress, disabled }) => {
    if (Platform.OS === 'ios') {
        return (
            <TouchableHighlight
                onPress={onPress} disabled={disabled}
                style={[styles.button, disabled == true ? styles.btndisabled : styles.btnenabled]}
                underlayColor={styles.$buttonUnderlayColor}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableHighlight>
        );
    }

    return (

        <TouchableNativeFeedback
            onPress={onPress} disabled={disabled}
            background={TouchableNativeFeedback.Ripple(styles.$buttonUnderlayColor)}
        >
            <View style={[styles.button, disabled == true ? styles.btndisabled : styles.btnenabled]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};
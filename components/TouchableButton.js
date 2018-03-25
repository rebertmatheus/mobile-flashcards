import React from 'react'
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native'
import { white, blue, lightBlue } from '../utils/colors'

export default function TouchableButton ({childrenText, onPress, styleButton = {}, styleText = {}}) {
    return (
        <TouchableOpacity onPress={onPress} style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, styleButton]} >
            <Text style={[styles.textDefault, styleText]}>{childrenText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textDefault: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: blue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },

    androidSubmitBtn: {
        backgroundColor: blue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 55,
        paddingRight: 55,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'

    }
})
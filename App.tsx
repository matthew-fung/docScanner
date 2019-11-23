import React, { Fragment } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>Hello World</View>
            </SafeAreaView>
        </Fragment>
    )
}

export default App

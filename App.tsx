import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Home from './src/screens/Home'


const App: React.FC = () => {

    return (
        <View style={styles.container} >
            <Home />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default App

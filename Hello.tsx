import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Hello: React.FC = () => {

    return (
        <View style={styles.container} >
            <Text>Hellooooooo </Text>
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


export default Hello
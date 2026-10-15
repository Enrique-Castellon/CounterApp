import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface Props {
    //Propiedades
    label: string;
    position?: 'left'|'right',
    //Metodos
    onPress?: () => void;
    onLongPress?: () => void;
}
export default function FAB({label,onLongPress,onPress}: Props) {
    return (
    <View>
        <Pressable style={styles.floatingButton} onPress={onPress} onLongPress={onLongPress}>
            <Text >+1</Text>
        </Pressable>
    </View>
    )
}
const styles = StyleSheet.create({
    floatingButton:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#480cdf',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4
    }
})
import React from 'react'
import { Alert, Text, StyleSheet } from 'react-native'

const AlertBtn = () => {
   const showAlert = () => {
      Alert.alert(
         'Coming soon...'
      )
   }
   return (
         <Text>Alert</Text>
   )
}

const styles = StyleSheet.create ({
   button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})

export {AlertBtn};

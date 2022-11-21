import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../helper'

export const Login = () => {
  return (
    <View style = {styles.container}>
      <View>
        <Text>index</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.BACKGROUND
  }
})
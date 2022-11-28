import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../helper'

export const Home = () => {
  return (
    <View style= {styles.container}>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.BACKGROUND
    }
})
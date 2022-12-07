import { View, Text } from 'react-native'
import React from 'react'
import MainNAvigation from 'app/navigation/MainNAvigation'
import { Provider } from "react-redux";
import store from 'app/redux/index'

export default function App() {
  console.log();
  return (
    <MainNAvigation />
  )
}
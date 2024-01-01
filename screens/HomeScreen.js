import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {
  const handleLogout= async () =>{
    await signOut(auth)
  }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center" >
      <Text className='text-lg'>HomeScreen - </Text>
      <TouchableOpacity
      onPress={handleLogout}
      className="p-2 bg-red-400 rounded-lg">
        <Text className="text-lg font-bold text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
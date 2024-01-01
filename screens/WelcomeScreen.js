import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <StatusBar style='light' />
      <View className="flex-1 mx-4 justify-around">
        <Text className="text-white text-center font-bold text-4xl">Let's Get Started</Text>
        <View>
          <Image
            style={{ width: 350, height: 350 }}
            source={require('../assets/images/welcome.png')} />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
          onPress={()=>navigation.navigate('SignUp')}
          className="bg-yellow-400 mx-7 rounded-xl p-3">
            <Text className="text-center text-gray-700 font-bold text-xl tracking-wide">Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center space-x-1">
            <Text className="text-white font-semibold">Already have an account?</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
            >
              <Text className="text-yellow-400 font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
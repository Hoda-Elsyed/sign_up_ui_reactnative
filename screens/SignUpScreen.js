import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'


export default function SignUpScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log('got error: ' ,error.message)
      }
    }
  }
  return (
    <View className='flex-1' style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className=' flex-row m-4 mx-4'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-tr-xl rounded-bl-xl'>
            <ArrowLeftIcon size={24} color={'black'} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            style={{ width: 200, height: 140, marginBottom: 10 }}
            source={require('../assets/images/signup.png')} />
        </View>
      </SafeAreaView>

      <View className="bg-white flex-1 px-7 pt-7"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        {/* form */}
        <View className='form space-y-2'>
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className='p-4 bg-gray-100 mb-3 rounded-2xl'
            value='Hoda Elsyed'
            placeholder='Enter your name'
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className='p-4 bg-gray-100 mb-3 rounded-2xl'
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder='Enter email address'
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className='p-4 bg-gray-100 mb-7 rounded-2xl'
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder='Enter password'
          />

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-yellow-400  rounded-xl p-3">
            <Text className="text-center text-gray-700 font-bold tracking-wide">Sign Up</Text>
          </TouchableOpacity>

        </View>
        <Text className="py-5 text-center text-gray-700 font-bold text-lg">Or</Text>

        <View className="flex-row items-center justify-around">
          <TouchableOpacity className="p-1 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/apple.png')} className='w-10 h-10' />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/facebook.png')} className='w-10 h-10' />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/google.png')} className='w-10 h-10' />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center  mt-5 space-x-1 ">
          <Text className="text-gray-500 font-semibold">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-yellow-400 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
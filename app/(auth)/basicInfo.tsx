import * as React from 'react'
import { useState, useEffect} from 'react'
import { TextInput, View, Alert, StyleSheet, AppState} from 'react-native'
import { supabase } from '@/lib/supabaseClient'
import { Session } from '@supabase/supabase-js'
import DateTimePicker from '@react-native-community/datetimepicker';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})



export default function fillOutBasicInfo({ session }: { session: Session }) {
    const [firstName, setFirstName] = useState(true)
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState(new Date)
    const [gender, setdGender] = useState('')
    const [intro, setIntro] = useState('')
    const [formError, setFormError] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if (session) getProfile()
    }, [session])

    async function getProfile() {
      try {
        setLoading(true)
        if (!session?.user) throw new Error('No user on the session!')
  
        const { data, error, status } = await supabase
          .from('profiles')
          .select(`firstName, middleName, lastName, dateOfBirth, gender, intro`)
          .eq('id', session?.user.id)
          .single()
        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
          setFirstName(data.firstName)
          setMiddleName(data.middleName)
          setLastName(data.lastName)
          setdateOfBirth(data.dateOfBirth)
          setdGender(data.gender)
          setIntro(data.intro)
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    async function updateProfile({
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      intro,

    }: {
      firstName: string
      middleName: string
      lastName: string
      dateOfBirth: Date
      gender: string
      intro: string
    }) {
      try {
        setLoading(true)
        if (!session?.user) throw new Error('No user on the session!')
  
        const updates = {
          id: session?.user.id,
          firstName,
          middleName,
          lastName,
          dateOfBirth,
          gender,
          intro,
        }
  
        const { error } = await supabase.from('profiles').upsert(updates)
  
        if (error) {
          throw error
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
        setLoading(false)
      }
    }
  

  return (
    <View style={styles.container}>
      <View>
        <TextInput value={firstName || ''} disabled />
      </View>
      <View >
        <TextInput value={username || ''} onChangeText={(text) => setUsername(text)} />
      </View>
      <View >
        <TextInput value={website || ''} onChangeText={(text) => setWebsite(text)} />
      </View>
      <View >
        <TextInput value={website || ''} onChangeText={(text) => setWebsite(text)} />
      </View>
      <View >
        <TextInput value={website || ''} onChangeText={(text) => setWebsite(text)} />
      </View>
      <View >
        <TextInput value={website || ''} onChangeText={(text) => setWebsite(text)} />
      </View>

      <View >
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
          disabled={loading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
  },
  text: {
    fontSize: 15,
    color: "black",
    fontWeight: "regular",
    marginBottom: 10,
  },
  textlarge: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 30,
  },
  Pressable: {
    width: '80%',
    padding: 10,
    margin: 20,
    borderRadius: 67.18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#395873',
  },
  textInput: {
    backgroundColor: "#F7F8F8", // Corrected color value with '#'
    borderRadius: 14,
    padding: 12,
    margin: 8,
    width: '80%', // Optionally, set width to maintain layout consistency
  }
})
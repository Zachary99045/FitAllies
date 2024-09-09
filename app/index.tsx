import * as Linking from 'expo-linking';
import React,{useEffect, useState} from 'react';
import {supabase} from '@/lib/supabaseClient'
import {router, Redirect } from "expo-router";
import {Session} from '@supabase/supabase-js'
import {Alert} from 'react-native'

const StartPage = () => {
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<Session | null>(null);
  
  const getProfile = async (session: Session | null) => {
    if (!session || !session.user) {
      throw new Error('No user on the session!');
    }
    try {
      const { data, error, status } = await supabase
        .from('profiles')
        .select()
        .eq('id', session?.user.id)
        .single();

      console.log('Fetched Profile Data:', data);
      console.log('Supabase Error:', error);
      console.log('Supabase Status:', status);
      if (error && status !== 406) {
        throw error
      }
      
      if (data) {
        console.log(data)
        console.log(data.firstName)
        if (!data.firstName) {
          router.push("/basicInfo");
        } else {
          router.replace("/home");
        }
      }
      
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  
  useEffect(() => {
    supabase.auth.onAuthStateChange( async (_event, session) => {
      if(session) {
        const { data: sessionData } = await supabase.auth.getSession();
        setSession(sessionData.session);
        
        console.log("yes session:", session.user)
        if (session) {
          await getProfile(session);
        } else {
          console.log('No session available.');
        }

      }else{
        console.log("no user");
        router.replace("/login");
      }
    })
  }, [])

};
export default StartPage;

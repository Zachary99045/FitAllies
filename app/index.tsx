
import {useEffect} from 'react';
import {supabase} from '@/lib/supabaseClient'
import {router} from "expo-router";

const StartPage = () => {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if(session) {
        router.replace("/home");
      } else {
        console.log("no user")
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      if(session) {
        router.replace("/home");
      }else{
        console.log("no user");
        router.replace("/login");
      }
    })
  }, [])
};
export default StartPage;
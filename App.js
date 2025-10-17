import 'react-native-url-polyfill/auto'

import { ActualClockIn } from './views/ActualCI';
import { LastClockOuts } from './views/LastCO';
import { NewClockIn } from './views/NewCI';

import { useState, useCallback, useEffect } from 'react';
import { globalStyles } from './globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Auth from './components/Auth'
import { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import { LogOut } from './lib/LogOut';


export default function App() {
  const [actualView, setActualView] = useState('LastClockOuts');
  const [session, setSession] = useState(null)

  const goActual = useCallback(() => setActualView('ActualClockIn'), [setActualView]);
  const goUltimas = useCallback(() => setActualView('LastClockOuts'), [setActualView]);
  const goNew = useCallback(() => setActualView('NewClockIn'), [setActualView]);

  const views = {
    ActualClockIn: <ActualClockIn nav={goUltimas} />,
    LastClockOuts: <LastClockOuts nav={goNew} />,
    NewClockIn: <NewClockIn nav={goActual} />
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  {
    return (
      <SafeAreaView style={globalStyles.view}>
        {(session && session.user) ? (views[actualView]) : (<Auth />)}
      </SafeAreaView>
    );
  }
}



/*
export default function App() {

  return (
    <View>
      
      
    </View>
  )
}*/
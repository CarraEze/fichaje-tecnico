import 'react-native-url-polyfill/auto'

import { ActualClockIn } from './views/ActualCI';
import { LastClockOuts } from './views/LastCO';
import { NewClockIn } from './views/NewCI';

import { useState, useCallback, useEffect } from 'react';
import { globalStyles } from './globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Auth from './components/Auth'
import { supabase } from './lib/supabase'


export default function App() {
  const [actualView, setActualView] = useState('LastClockOutsView');
  const [session, setSession] = useState(null)
  const [clockInTS, setClockInTS] = useState(null);
  const [lastClockOuts, _setLastClockOuts] = useState([]);

  const setLastClockOuts = (newClockOut) => {
    if (lastClockOuts.length >= 5) {
      _setLastClockOuts(lastClockOuts.slice(1).concat([newClockOut]));
    } else {
      _setLastClockOuts(lastClockOuts.concat([newClockOut]));
    }
  }

  const goActual = useCallback(() => setActualView('ActualClockIn'), [setActualView]);
  const goUltimas = useCallback(() => setActualView('LastClockOutsView'), [setActualView]);
  const goNew = useCallback(() => setActualView('NewClockIn'), [setActualView]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const views = {
    ActualClockIn: <ActualClockIn
      nav={goUltimas}
      clockInTS={clockInTS}
      //id_user={session.user.id} REVISAR ASINCRONISMO, ROMPE PORQUE SESSION ES NULL
      setLastClockOuts={setLastClockOuts} />,
    LastClockOutsView: <LastClockOuts nav={goNew} data={lastClockOuts}  />,
    NewClockIn: <NewClockIn nav={goActual} setClockInTS={setClockInTS} />
  };

  {
    return (
      <SafeAreaView style={globalStyles.view}>
        {(session && session.user) ? (views[actualView]) : (<Auth />)}
      </SafeAreaView>
    );
  }
}
import { Outlet, useNavigation, useSubmit } from 'react-router-dom';
import { getAuthToken } from '../util/auth';
import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";

function RootLayout() {
  // const navigation = useNavigation();
  const token =getAuthToken();
  const submit = useSubmit();

  useEffect(()=>{
    if(!token){
      return ;
    }
    setTimeout(()=>{
      submit(null,{action:"/logout", method:"post"});
    },1*60*60*1000);
  },[token,submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

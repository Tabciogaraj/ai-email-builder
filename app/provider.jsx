"use client";

import React, { useContext, useEffect, useState } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({ children }) {
    
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [userDetail,setUserDetail]=useState();
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const storage = JSON.parse(localStorage.getItem('userDetail'));
          console.log('Pobrano z localStorage:', storage); 
          if (storage) {
            setUserDetail(storage);
          } else {
            console.log('Brak danych w localStorage.');
          }
        }
      }, []);
      
      console.log('Aktualny userDetail:', userDetail); // Debugowanie
    
    return (
        <ConvexProvider client={convex}>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
               <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
                <div>{children}</div>
                </UserDetailContext.Provider>
            </GoogleOAuthProvider>
        </ConvexProvider>

    )
}

export default Provider;
export const useUserDetail=()=>{
    return useContext(UserDetailContext);
}
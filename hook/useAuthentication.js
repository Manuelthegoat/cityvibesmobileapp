import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState(User);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if(user){
      setUser(user)
    }else{
      setUser(undefined)
    }
    });
    return unsubscribe
  }, []);
  return { user };
}

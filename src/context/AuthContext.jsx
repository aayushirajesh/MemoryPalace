import {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../services/supabase";
import { logout as logoutService,} from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getUser() {

      const {data: { user }} = await supabase.auth.getUser();
      /*
        Prevent unverified users
        from entering app
      */
      if (user && !user.email_confirmed_at) {
        setUser(null);
      } 
      else {
        setUser(user);
      }
      setLoading(false);
    }

    getUser();

    const {data: { subscription }} = supabase.auth.onAuthStateChange(
      (_, session) => {

        const currentUser =
          session?.user ?? null;
        /*
          Check email verification
        */
        if (
          currentUser &&
          !currentUser.email_confirmed_at
        )
        {
          setUser(null);
        }
        else {
          setUser(currentUser);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();

  }, []);

  async function logout() {
    try {
      await logoutService();
    } 
    catch (error) {
      console.error(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
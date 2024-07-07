import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CR_Context = createContext();

const GlobalContext = ({ children }) => {
  const [postView, setPostView] = useState([]);
  const [postId, setPostId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const pTid = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(() => {
    pTid
    token
    if (token) {
      getToken(token);
    }
  }, []);

  const getToken = async (token) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL+'/login/datas', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setLoggedIn(true);
        setTokenData(data.userData);
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.log('TokenErr', error);
    }
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    getToken(token);
  };

  const logout = () => {
    
     setShowPopover(true)
  
  };

  const ContextValues = {
    postView, setPostView,
    postId, setPostId,
    loggedIn, setLoggedIn,
    tokenData, setTokenData,
    login, logout,
    pTid,token,
    showPopover, setShowPopover
  };

  return (
    <CR_Context.Provider value={ContextValues}>
      {children}
    </CR_Context.Provider>
  );
};

export default GlobalContext;

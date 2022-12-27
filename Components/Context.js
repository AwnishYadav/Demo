
import React, { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios';

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false);
  const [key , setKey] = useState('');
  const [val,setVal]=useState()
  const [page, setPage] = useState([]);

  // calling post using api for showing
  useEffect(() => {
    let cancel = false;
    (async () => {
      try{
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAeKi5xDy8EyDOcNDjOGTrzeqjDVeGKgR0&channelId=${key}&part=snippet,id&order=rating&maxResults=5`
      );
      if (cancel) return;
      setResponse(res.data.items)
       }
       catch (e) {
        alert('Id not correct')
      }
    }
   
    )();
    return () => {
      cancel = true;
    }
  }, [key]);
  return (
    <NewsContext.Provider
      value={{
        response,
        text,
        setText,
        setKey,
        val,
        setVal,
        key,
        page,
        setPage,
        loading
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;

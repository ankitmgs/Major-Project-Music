import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MusicPlayer from './MusicPlayer';

const Main = ({selMusic, setSelMusic}) => {
  return (
    <div>
        <Header />
        <Outlet />
        <MusicPlayer selMusic={selMusic}/>
    </div>
  )
}

export default Main;
'use client';
import { useState, useEffect } from 'react';
import TablePhone from './Componentes/pages/pageTablePhone/homePhone';
import TableDesk from './Componentes/pages/pageTable/homeDesktop';

const Home = () => {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    
    const checkWindowSize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 375);
      }
    };

    
    checkWindowSize();

    
    window.addEventListener('resize', checkWindowSize);

    // Limpeza ao desmontar o componente
    return () => window.removeEventListener('resize', checkWindowSize);
 }, []);

 return (
    <>
      {isMobile ? <TablePhone /> : <TableDesk />}
    </>
 );
};

export default Home;
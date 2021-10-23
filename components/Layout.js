import { useState, useEffect } from 'react';

import { useRouter } from 'next/dist/client/router';

import styles from '../styles/components/Layout.module.css';
import Header from './Header';

import AdminPanelNavbar from './Navbars/AdminPanel/Navbar';
import UserNavbar from './Navbars/User/Navbar';
import PathIndicator from './PathIndicator';

export default function Layout({ children }) {
  const size = useWindowSize();
  const isAdminPanel = useRouter().pathname.split('/').includes('admin_panel');

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.pathIndicator}>
        <PathIndicator />
      </div>
      {size.width > 520 && (
        <div className={styles.navbar}>
          {isAdminPanel ? <AdminPanelNavbar /> : <UserNavbar />}
        </div>
      )}
      <div className={styles.article}>{children}</div>
    </div>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

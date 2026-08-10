import { createContext, useContext, useState, useEffect } from 'react';
import { getMenu } from '../lib/apiV/pageinfo';

const MenuContext = createContext();

export function MenuProvider({ children, initialMenu = [] }) {
  const [menuItems, setMenuItems] = useState(initialMenu);

  useEffect(() => {
    if (initialMenu.length > 0) return;
    let cancelled = false;
    getMenu().then((items) => {
      if (!cancelled && items?.length > 0) setMenuItems(items);
    });
    return () => {
      cancelled = true;
    };
  }, [initialMenu]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
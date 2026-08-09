import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children, initialMenu = [] }) {
  const [menuItems, setMenuItems] = useState(initialMenu);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
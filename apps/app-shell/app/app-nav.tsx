"use client";

import { useEffect } from 'react';
import { NavLink } from 'react-router';

export function AppNav() {
  useEffect(() => {
    console.log("I'm a client component!");
  }, []);
  
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
    </nav>
  );
}

'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TopBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('light-mode', !isDark);
    
    if (isDark) {
      document.body.style.filter = 'sepia(30%) hue-rotate(-10deg) brightness(90%)';
    } else {
      document.body.style.filter = 'none';
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.body.classList.toggle('dark-mode', newDarkMode);
    document.body.classList.toggle('light-mode', !newDarkMode);
    
    if (newDarkMode) {
      document.body.style.filter = 'sepia(30%) hue-rotate(-10deg) brightness(90%)';
    } else {
      document.body.style.filter = 'none';
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '8px 30px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: darkMode ? '#fff8e1' : 'white',
      filter: darkMode ? 'sepia(20%) hue-rotate(-5deg)' : 'none'
    }}>
      
      {/* Logo más compacto */}
      <div style={{ marginLeft: '10px', flexShrink: 0 }}>
        <Image 
          src="/cc.svg" 
          alt="Logo CC" 
          width={80} 
          height={50}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Menú CENTRADO más compacto */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '40px'
      }}>
        <span style={{
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer',
          color: darkMode ? '#5a4a00' : '#333',
          padding: '4px 8px',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>Inicio</span>
        <span style={{
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer',
          color: darkMode ? '#5a4a00' : '#333',
          padding: '4px 8px',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>Nosotros</span>
        <span style={{
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer',
          color: darkMode ? '#5a4a00' : '#333',
          padding: '4px 8px',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>Profesionales</span>
      </div>

      {/* Botones más compactos */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginRight: '10px',
        flexShrink: 0
      }}>
        {/* Botón de modo oscuro/claro más pequeño */}
        <button onClick={toggleDarkMode} style={{
          padding: '6px',
          borderRadius: '50%',
          backgroundColor: darkMode ? '#5a4a00' : '#e5e7eb',
          color: darkMode ? '#ffd700' : '#333',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          transition: 'all 0.3s ease',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Botones rectos sin bordes redondeados */}
        <div style={{ display: 'flex', height: '32px' }}>
          {/* Botón Registrar */}
          <button style={{
            width: '75px',
            height: '100%',
            backgroundColor: '#0F6C71',
            color: 'white',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0'
          }}>
            Registrar
          </button>

          {/* Botón Ingresar */}
          <button style={{
            width: '75px',
            height: '100%',
            backgroundColor: '#26C4C3',
            color: 'white',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0'
          }}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}
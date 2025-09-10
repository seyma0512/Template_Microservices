'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#235875', color: 'white', padding: '1.5rem', textAlign: 'center', width: '100%' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <p style={{ fontSize: '0.80rem', lineHeight: '0.10rem', color: 'white' }}>
          <span style={{ fontWeight: '600', color: 'white' }}>© {year} Clínica Calma,</span>
          <span style={{ color: 'white' }}> División de Fundación Calma </span>
          <span style={{ color: 'white' }}>@Copyright</span>
        </p>
      </div>
    </footer>
  );
}
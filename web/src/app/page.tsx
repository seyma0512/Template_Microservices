'use client';
import { useState } from 'react';
import { ColorDto } from '@repo/shared/dto/color.dto';

export default function HomePage() {
  const [color, setColor] = useState('');
  const [response, setResponse] = useState<ColorDto | null>(null);

  const sendColor = async () => {
    try {
      const res = await fetch("http://localhost:4000/colors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: color } as ColorDto),
      });

      const data: ColorDto = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Enviar un color</h1>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Escribe un color"
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <button onClick={sendColor} style={{ padding: "0.5rem 1rem" }}>
        Enviar
      </button>

      {response && (
        <p style={{ marginTop: "1rem" }}>
          Color recibido: {response.name}
          Mensage: {response.message}
        </p>
      )}
    </div>
  );
}

'use client';
import { useEffect } from 'react';

export default function UnityGame() {
  useEffect(() => {
    // Charger le Unity WebGL script
    const script = document.createElement('script');
    script.src = '/JEU4_jeu/Build/JEU4_jeu.loader.js'; // Chemin vers UnityLoader.js
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script quand le composant est démonté
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="unity-container" style={{ width: '960px', height: '600px', margin: 'auto' }}>
      <iframe
        src="/JEU4_jeu/index.html" // URL vers le fichier généré de Unity
        width="960"
        height="600"
        frameBorder="0"
        style={{ border: 'none' }}
        title="Unity Game"
      />
    </div>
  );
}

import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="tavernepic" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <img
        src="/images/taverne2.jpg"
        alt="Background Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <a
        href="/Beasts"
        style={{
          position: 'absolute',
          top: '2%',
          left: '5%',
          width: '15%',
          height: '30%',
          boxSizing: 'border-box', // Rahmen wird in die Gesamtgröße des Bereichs einbezogen
        }}
      />
      <a
        href="/Dicegame"
        style={{
          position: 'absolute',
          top: '60%',
          left: '0%',
          width: '25%',
          height: '30%',
          boxSizing: 'border-box', // Rahmen wird in die Gesamtgröße des Bereichs einbezogen
        }}
      />
      <a
        href="/Map"
        style={{
          position: 'absolute',
          top: '21%',
          left: '31%',
          width: '25%',
          height: '28%',
          boxSizing: 'border-box', // Rahmen wird in die Gesamtgröße des Bereichs einbezogen
        }}
      />

      <a
        href="/Map"
        style={{
          position: 'absolute',
          top: '21%',
          left: '62%',
          width: '37%',
          height: '30%',
          boxSizing: 'border-box', // Rahmen wird in die Gesamtgröße des Bereichs einbezogen
        }}
      />

      <a
        href="/Dicegame"
        style={{
          position: 'absolute',
          top: '60%',
          left: '45%',
          width: '25%',
          height: '30%',
          boxSizing: 'border-box', // Rahmen wird in die Gesamtgröße des Bereichs einbezogen
        }}
      />
    </div>
  );
}


export default Home;
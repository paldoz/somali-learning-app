// src/Dictionary.js
import React from 'react';
import { CABITAAN, DHARKA, QALABKAWAXBARASHADA, RAASHIIN, SIYAASADA } from './Words';

// const dictionaryWords = [
//   { word: "Shaah", meaning: "Tea" },
//   { word: "Qaxwo", meaning: "Coffee" },
//   { word: "Casiir liin", meaning: "Lemon juice" },
//   { word: "Casiir cambe", meaning: "Mango juice" },
//   { word: "Casiir cananaas", meaning: "Pineapple juice" },
//   { word: "Casiir babaay", meaning: "Papaya juice" },
//   { word: "Casiir tufaax", meaning: "Apple juice" },
//   { word: "Biyo", meaning: "Water" },
//   { word: "Soda", meaning: "Soda" },
//   { word: "Caano", meaning: "Milk" },
//   { word: "Caano geel", meaning: "Camel milk" },
//   { word: "Caano fadhii", meaning: "Fermented milk" },
//   { word: "Casiir moos", meaning: "Banana juice" },
//   { word: "Casiir rummaan", meaning: "Pomegranate juice" },
//   { word: "Sharaab", meaning: "Syrup (drink)" },
//   { word: "Cabitaan", meaning: "Beverage" },
//   { word: "Jalaato", meaning: "Ice cream drink" },
//   { word: "Jalaato qado", meaning: "Milkshake" },
//   { word: "Safka", meaning: "Sorbet" },
//   { word: "Nectarka", meaning: "Nectar" },
// ];

const Dictionary = () => {
  return (
    <div style={{display: "flex", justifyContent:'space-around', textAlign:"center"}}>
    <div>
      <h2 style={{color:"black"}}>RAASHIIN</h2>
      {
        RAASHIIN.map((words)=><p style={{color: "black"}}>{words}</p>)
      }
    
    </div>
    <div>
      <h2 style={{color:"black"}}>CABITAAN</h2>
      {
        CABITAAN.map((words)=><p style={{color: "black"}}>{words}</p>)
      }
    
    </div>
    <div>
      <h2 style={{color:"black"}}>QALABKAWAXBARASHADA</h2>
      {
        QALABKAWAXBARASHADA.map((words)=><p style={{color: "black"}}>{words}</p>)
      }
    
    </div>
    <div>
      <h2 style={{color:"black"}}>DHARKA </h2>
      {
        DHARKA.map((words)=><p style={{color: "black"}}>{words}</p>)
      }
    
    </div>
    <div>
      <h2 style={{color:"black"}}>SIYAASADA </h2>
      {
        SIYAASADA.map((words)=><p style={{color: "black"}}>{words}</p>)
      }
    
    </div>
    </div>
  );
};

export default Dictionary;

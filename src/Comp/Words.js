export const RAASHIIN = [
    "bariis", "baasto", "cambuulo ", "bur", "sokor", "cusbo ", "cajiin ",
    "muufo", "canjeero", "salbuko", "malawax", "saliid",  
  
  ];
  
  export const CABITAAN = [
    "cambe", "Caano", "Caano geel ", "Caano fadhii#", "Casiir moos", "Jalaato", "cananaasGo", "babaay",  
    "liin",  "rummaan", 
   
  ];
  
  export const QALABKAWAXBARASHADA = [
    "qalin", "arday", "macalin", "maamule", "waardiye", "qalinqore", "qaliinbiire", 
    "tirtire", "sabuurad", "jeesto", "qalinqore", "BOOK", "BOORSO", "LAPTOP", 
    
  ];
  
  export const DHARKA = [
    "garan", "surwaal", "funaanad", "buumo", "nigis", "surwal-dumared", "shaar ", "shaati", 
    "macwiis", "maaliyad", "koofi", "okiyaalo", 
  ];
  
  export const SIYAASADA = [
    "madaxweyne", "wasiir", "gudoomiye", "taliye", "sargaal", "hal-xidigle", "labo-xidigle", "siyaasi", 
    "gudi", "golo", "rayid", "5G", "shacab", "askar", "ciidan ", "bolis", 
    "dalka", "xooga", "xilidhiban", 
  ];
  

function randomWord(type=SIYAASADA) {
  switch (type) {
      case 'RAASHIIN':
          return RAASHIIN[Math.floor(Math.random() * RAASHIIN.length)].toLowerCase();
      case 'CABITAAN':
          return CABITAAN[Math.floor(Math.random() * CABITAAN.length)].toLowerCase();
      case 'QALABKAWAXBARASHADA':
          return QALABKAWAXBARASHADA[Math.floor(Math.random() * QALABKAWAXBARASHADA.length)].toLowerCase();
      case 'networks':
          return DHARKA[Math.floor(Math.random() * DHARKA.length)].toLowerCase();
      case 'SIYAASADA':
      default:
          return SIYAASADA[Math.floor(Math.random() * SIYAASADA.length)].toLowerCase();
  }
}

    export { randomWord };
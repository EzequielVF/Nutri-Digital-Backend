const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON
const filePath = path.join(__dirname, 'alimentos.json');

// Campos a convertir
const fieldsToNumber = [
  "calories", "Calories", "Sodium", "Total Fat", "Potassium", "Saturated",
  "Total Carbs", "Polyunsaturated", "Dietary Fiber", "Monounsaturated",
  "Sugars", "Trans", "Protein", "Cholesterol", "Vitamin A", "Calcium",
  "Vitamin C", "Iron"
];

// Campos a eliminar
const fieldsToRemove = [
  "external_id", "searchTerm", "Calories", "serving"
];

// Opciones para los nuevos campos
const restricciones = ["Celiaco", "Vegano", "Diabetico", "Vegetariano", "Sin Sal", "Sin Lactosa"];
const tipos = ["Comida", "Bebida", "Fruta", "Verdura"];

function getRandomRestriccion() {
  // Elige entre 1 y 3 restricciones aleatorias y las concatena
  const n = Math.floor(Math.random() * 3) + 1;
  const seleccionadas = [];
  while (seleccionadas.length < n) {
    const r = restricciones[Math.floor(Math.random() * restricciones.length)];
    if (!seleccionadas.includes(r)) seleccionadas.push(r + ", ");
  }
  return seleccionadas.join('');
}

function getRandomTipo() {
  return tipos[Math.floor(Math.random() * tipos.length)];
}

// Función para limpiar y convertir a número
function toNumber(value) {
  if (typeof value !== "string") return value;
  const cleaned = value.replace(/[^0-9\.\-]/g, "");
  return cleaned === "" ? 0 : Number(cleaned);
}

// Leer el archivo JSON
const fileContent = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(fileContent);

// Procesar el array
const processed = data.map(item => {
  const newItem = { ...item };
  // Convertir campos a número
  fieldsToNumber.forEach(field => {
    if (newItem[field] !== undefined) {
      newItem[field] = toNumber(newItem[field]);
    }
  });
  // Eliminar campos no deseados
  fieldsToRemove.forEach(field => {
    delete newItem[field];
  });
  // Agregar campos aleatorios
  newItem.Restriccion = getRandomRestriccion();
  newItem.Tipo = getRandomTipo();
  return newItem;
});

// Guardar el resultado en un nuevo archivo
fs.writeFileSync(path.join(__dirname, 'alimentos_numericos.json'), JSON.stringify(processed, null, 2));

console.log('Archivo procesado y guardado como alimentos_numericos.json');
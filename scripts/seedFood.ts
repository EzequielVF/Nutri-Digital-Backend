import foodTable from '../src/food/food.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

async function loadFoodData() {
    try {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
          });
        const filePath = path.join(__dirname, './alimentos.json');
        const db = drizzle(pool);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const foodData = JSON.parse(fileContent);

        for (const food of foodData) {
            await db.insert(foodTable).values({
                name: food.name.toLowerCase(),
                brand: food.brand,
                calories: food.calories || 0,
                href: food.href || '',
                sodium: food.Sodium || 0,
                total_fat: food['Total Fat'] || 0,
                potassium: food.Potassium || 0,
                saturated: food.Saturated || 0,
                total_carbs: food['Total Carbs'] || 0,
                polyunsaturated: food.Polyunsaturated || 0,
                dietary_fiber: food['Dietary Fiber'] || 0,
                monounsaturated: food.Monounsaturated || 0,
                sugars: food.Sugars || 0,
                trans: food.Trans || 0,
                protein: food.Protein || 0,
                cholesterol: food.Cholesterol || 0,
                vitamin_a: food['Vitamin A'] || 0,
                calcium: food.Calcium || 0,
                vitamin_c: food['Vitamin C'] || 0,
                iron: food.Iron || 0,
                restricciones: food.Restriccion || '',
                tipo: food.Tipo || '',
            });
        }

        console.log('Datos cargados exitosamente en la tabla food.');
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

loadFoodData();
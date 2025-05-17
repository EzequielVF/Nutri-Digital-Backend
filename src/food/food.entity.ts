import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar, bigint, integer } from 'drizzle-orm/pg-core';

export const foodTable = pgTable('food', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    brand: varchar('brand', { length: 256 }).notNull(),
    calories: integer('calories').notNull(),
    href: varchar('href', { length: 256 }).notNull(),
    sodium: integer('sodium').notNull(),
    total_fat: integer('total_fat').notNull(),
    potassium: integer('potassium').notNull(),
    saturated: integer('saturated').notNull(),
    total_carbs: integer('total_carbs').notNull(),
    polyunsaturated: integer('polyunsaturated').notNull(),
    dietary_fiber: integer('dietary_fiber').notNull(),
    monounsaturated: integer('monounsaturated').notNull(),
    sugars: integer('sugars').notNull(),
    trans: integer('trans').notNull(),
    protein: integer('protein').notNull(),
    cholesterol: integer('cholesterol').notNull(),
    vitamin_a: integer('vitamin_a').notNull(),
    calcium: integer('calcium').notNull(),
    vitamin_c: integer('vitamin_c').notNull(),
    iron: integer('iron').notNull(),
    restricciones: varchar('restricciones', { length: 256 }).notNull(),
    tipo: varchar('tipo', { length: 256 }).notNull(),
});

export default foodTable;

export type Food = InferSelectModel<typeof foodTable>;
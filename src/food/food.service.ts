import db from '../config/db.config';
import foodTable, { Food } from './food.entity';
import { Injectable } from '@nestjs/common';
import { ilike } from 'drizzle-orm';

@Injectable()
export class FoodService {

    async getFoods(name: string): Promise<Food[]> {
		if(name === undefined || name === null || name === '') {
			return await db
			.select()
			.from(foodTable)
		}
		else{
			return await db
			.select()
			.from(foodTable)
			.where(ilike(foodTable.name, `%${name.toLowerCase()}%`));
		}
	}
}
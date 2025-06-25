import db from '../config/db.config';
import { Get, Injectable } from '@nestjs/common';
import { eq, sql } from 'drizzle-orm';
import placeTable from './place.entity';
import { GetDistance } from '@/util/utils';

@Injectable()
export class PlaceService {
    async getPlaces(origin: string) {
        origin = "Av. Paseo Colón 850, Cdad. Autónoma de Buenos Aires";
        if(origin === undefined || origin === null || origin === '') {
            origin = "Av. Paseo Colón 850, Cdad. Autónoma de Buenos Aires"
            //ToDo: Moverlo a un archivo de configuracion para que sea dinamico
        }

		let row = await db
            .select()
            .from(placeTable);

        const data = await Promise.all(row.map(async row => ({
            id: row.id,
            name: row.name,
            direction: row.direction,
            category: row.category,
            href: row.href,
            distance: await GetDistance(origin, row.direction),
        })));

        data.sort((a, b) => a.distance - b.distance);

        return data;
	}
}
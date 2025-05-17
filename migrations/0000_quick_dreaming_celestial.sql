CREATE TABLE "consumed" (
	"id" serial PRIMARY KEY NOT NULL,
	"portion" varchar(256) NOT NULL,
	"unit" varchar(256) NOT NULL,
	"type_of_food" varchar(256) NOT NULL,
	"fecha" timestamp NOT NULL,
	"id_user" integer NOT NULL,
	"id_food" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "food" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"brand" varchar(256) NOT NULL,
	"calories" integer NOT NULL,
	"href" varchar(256) NOT NULL,
	"sodium" integer NOT NULL,
	"total_fat" integer NOT NULL,
	"potassium" integer NOT NULL,
	"saturated" integer NOT NULL,
	"total_carbs" integer NOT NULL,
	"polyunsaturated" integer NOT NULL,
	"dietary_fiber" integer NOT NULL,
	"monounsaturated" integer NOT NULL,
	"sugars" integer NOT NULL,
	"trans" integer NOT NULL,
	"protein" integer NOT NULL,
	"cholesterol" integer NOT NULL,
	"vitamin_a" integer NOT NULL,
	"calcium" integer NOT NULL,
	"vitamin_c" integer NOT NULL,
	"iron" integer NOT NULL,
	"restricciones" varchar(256) NOT NULL,
	"tipo" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hidratate" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"mililiters" integer NOT NULL,
	"fecha" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"lastname" varchar(256) NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "consumed" ADD CONSTRAINT "consumed_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "consumed" ADD CONSTRAINT "consumed_id_food_food_id_fk" FOREIGN KEY ("id_food") REFERENCES "public"."food"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hidratate" ADD CONSTRAINT "hidratate_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "user_unique" ON "users" USING btree ("user");
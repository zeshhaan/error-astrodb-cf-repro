// @ts-nocheck
import { db, Product } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Product).values([
    {
      id: "item_OxsDtvJfrRV5d7",
      name: "test@8:07",
      description: "test@8:07",
      category: "test@8:07",
      amount: 100,
      image_url: "https://cherryblossomonline.in/product_1726497498151.jpg",
    },
  ]);
}

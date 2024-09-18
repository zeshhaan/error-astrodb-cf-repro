import { defineDb, defineTable, column, NOW } from "astro:db";

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
    description: column.text(),
    category: column.text(),
    amount: column.number(),
    image_url: column.text({ optional: true }),
    active: column.boolean({ default: true }),
    stock_quantity: column.number({ default: 5 }),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: {
    Product,
  },
});

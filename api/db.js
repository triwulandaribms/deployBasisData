import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: "db.mdwrzwhqymevtbhebaqu.supabase.co",
  // port: 5432,
  user: "postgres",
  password: "triwulandari3456",
  database: "postgres",
});

await client.connect();
console.log("Terhubung ke basis data.");

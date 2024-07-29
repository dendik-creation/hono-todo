import { PrismaClient } from "@prisma/client";
import { seedTodos } from "./TodoSeed";
import { seedUsers } from "./UserSeed";

const prisma = new PrismaClient();
const main = async () => {
  await seedUsers();
  await seedTodos();
};

main()
  .catch((err) => console.log(err))
  .finally(async () => {
    await prisma.$disconnect();
  });

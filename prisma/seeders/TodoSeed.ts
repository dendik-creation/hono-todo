import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";

const prisma = new PrismaClient();

const seedTodos = async () => {
  const users = await prisma.user.findMany();
  const todo_count = Math.floor(Math.random() * 4);
  for (const user of users) {
    for (let i = 0; i < todo_count; i++) {
      await prisma.todo.create({
        data: {
          user_id: user.id,
          title: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          done: faker.datatype.boolean(),
          created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
      });
    }
  }
};

export { seedTodos };

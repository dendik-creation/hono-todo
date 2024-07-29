import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";

const prisma = new PrismaClient();

const seedUsers = async () => {
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        username: faker.person.firstName().toLowerCase(),
        full_name: faker.person.fullName(),
        gender: faker.helpers.arrayElement(["Male", "Female"]),
        password: faker.internet.password(),
        created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      },
    });
  }
};

export { seedUsers };

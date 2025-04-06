<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
=======
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default prisma;
>>>>>>> house

import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function newHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.internet.url(),
    },
  });
}
export async function newRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.name.findName(),
      capacity: faker.datatype.number(10),
      hotelId,
    },
  });
}

import { prisma } from "@/config";

async function getHotel() {
  return prisma.hotel.findMany();
}
async function getHotelbyId(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

const hotelRepository = {
  getHotel,
  getHotelbyId,
};
export default hotelRepository;

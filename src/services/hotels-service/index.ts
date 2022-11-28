import hotelRepository from "@/repositories/hotel-repository";
import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { notFoundError } from "@/errors";

async function enrollmentCheck(userId: number, enrollmentId: number) {
  const isEnrolled = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!isEnrolled) {
    throw notFoundError();
  }

  const hasTicket = await ticketRepository.findTicketByEnrollmentId(enrollmentId);
  if (!hasTicket) {
    throw notFoundError();
  }
}
async function allHotelsByUser(userId: number) {
  const check = await enrollmentCheck.call(userId);
  const hotels = await hotelRepository.getHotel();
  return hotels;
}

async function hotelsRoomsById(hotelId: number, userId: number) {
  const check = await enrollmentCheck.call(userId);
  const findHotel = await hotelRepository.getHotelbyId(hotelId);
  if (!findHotel) {
    throw notFoundError();
  }
  return findHotel;
}
const hotelsService = {
  allHotelsByUser,
  hotelsRoomsById,
};

export default hotelsService;

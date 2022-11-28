import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";

import { Response } from "express";
import httpStatus from "http-status";

export async function listHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const showHotels = await hotelsService.allHotelsByUser(userId);
    return res.status(httpStatus.OK).send(showHotels);
  } catch (err) {
    if (err.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send({
        message: err.message,
      });
    }
    if (err.name === "UnauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
export async function listHotelRooms(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { hotelId } = req.params;

  try {
    const findRooms = await hotelsService.hotelsRoomsById(Number(hotelId), userId);
    return res.send(findRooms).status(httpStatus.OK);
  } catch (err) {
    if (err.name === "UnauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }
    if (err.name === "UnauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

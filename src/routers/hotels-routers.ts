import { listHotelRooms, listHotels } from "@/controllers/hotels-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter.all("/*", authenticateToken);
hotelsRouter.get("/", listHotels);
hotelsRouter.get("/:hotelId", listHotelRooms);

export { hotelsRouter };

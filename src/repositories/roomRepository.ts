import { AppDataSource } from "../data-source";
import { Room } from "../entities/Room"; // COLOCAR O 'entities MINUSCULO'

export const roomRepository = AppDataSource.getRepository(Room)
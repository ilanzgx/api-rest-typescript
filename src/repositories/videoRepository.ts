import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video"; // COLOCAR O 'entities MINUSCULO'

export const videoRepository = AppDataSource.getRepository(Video)
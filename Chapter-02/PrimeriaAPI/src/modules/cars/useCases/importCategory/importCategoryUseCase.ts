import fs from 'fs';
import { parse as csvParse } from "csv-parse";
import { Category } from "../../model/CategoryModel";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ImportCategoryUseCase {

  constructor() { }

  execute(file: Express.Multer.File): void {

    console.log(file);

  }
}

export { ImportCategoryUseCase }
import fs from 'fs';
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe';

interface IimportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) { }

  loadCategory(file: Express.Multer.File): Promise<IimportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IimportCategory[] = []

      const parseFile = csvParse();

      stream.pipe(parseFile);
      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description,
        });
      }).on("end", () => {
        fs.promises.unlink(file.path)
        resolve(categories)
      }).on("reject", (err) => {
        reject(err)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);
    categories.map((category) => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepository.findByName(name);

      if (!categoryAlreadyExists) {
        this.categoryRepository.create({ name, description });
      }
    })
  }
}

export { ImportCategoryUseCase }
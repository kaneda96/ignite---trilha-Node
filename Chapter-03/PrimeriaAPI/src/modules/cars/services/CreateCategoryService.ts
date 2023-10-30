import { AppError } from "../../../errors/AppErrors";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";



interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!', 409);
    }
    this.categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryService }
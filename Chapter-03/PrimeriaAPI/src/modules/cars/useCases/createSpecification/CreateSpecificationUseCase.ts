import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}


class CreateSpecificationUseCase {

  constructor(private categoriesRepository: ICategoryRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Specification already exists!');
    }
    this.categoriesRepository.create({ name, description });

  }
}

export { CreateSpecificationUseCase }
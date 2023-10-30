import { AppError } from "../../../errors/AppErrors";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";



interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.specificationRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!', 409);
    }
    this.specificationRepository.create({ name, description });
  }

}

export { CreateSpecificationService }
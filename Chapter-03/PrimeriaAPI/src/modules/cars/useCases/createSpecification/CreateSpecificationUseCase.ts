import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { AppError } from "../../../../Errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.specificationRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Specification already exists!', 409);
    }
    this.specificationRepository.create({ name, description });

  }
}

export { CreateSpecificationUseCase }

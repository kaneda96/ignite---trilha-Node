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
      throw new Error('Category already exists!');
    }
    this.specificationRepository.create({ name, description });
  }

}

export { CreateSpecificationService }
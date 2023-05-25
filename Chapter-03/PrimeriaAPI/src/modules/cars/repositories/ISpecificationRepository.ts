import { Specification } from "../entities/SpecificationModel";

interface ISpecificationDTO {
  name: string,
  description: string,
}

interface ISpecificationRepository {
  findByName(name: string): Specification
  create({ name, description }: ISpecificationDTO): void
  list(): Specification[]
}

export { ISpecificationRepository, ISpecificationDTO };
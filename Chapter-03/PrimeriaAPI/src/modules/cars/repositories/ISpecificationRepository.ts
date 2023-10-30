import { Specification } from "../entities/SpecificationModel";

interface ISpecificationDTO {
  name: string,
  description: string,
}

interface ISpecificationRepository {
  findByName(name: string): Promise<Specification>
  create({ name, description }: ISpecificationDTO): Promise<void>
  list(): Promise<Specification[]>
}

export { ISpecificationRepository, ISpecificationDTO };
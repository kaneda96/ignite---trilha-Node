import { Specification } from "../../entities/SpecificationModel";
import { ISpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {

  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }
  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

}

export { SpecificationRepository }
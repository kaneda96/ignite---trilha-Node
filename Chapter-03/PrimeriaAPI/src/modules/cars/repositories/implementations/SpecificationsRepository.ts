import { Repository } from "typeorm";
import { Specification } from "../../entities/SpecificationModel";
import { ISpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";
import { PostgresDataSource } from "../../../../database";


class SpecificationRepository implements ISpecificationRepository {

  private specificationRepository: Repository<Specification>;

  constructor() {

    this.specificationRepository = PostgresDataSource.getRepository(Specification)
  }


  async findByName(name: string): Promise<Specification> {
    const specification = await this.specificationRepository.findOne({ where: { name: name } });
    return specification;
  }
  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = new Specification();

    specification.name = name;
    specification.description = description;


    this.specificationRepository.save(specification);
  }

  async list(): Promise<Specification[]> {
    return await this.specificationRepository.find();
  }

}

export { SpecificationRepository }
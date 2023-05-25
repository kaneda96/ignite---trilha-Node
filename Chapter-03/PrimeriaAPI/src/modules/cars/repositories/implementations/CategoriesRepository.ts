import { Repository } from "typeorm";
import { Category } from "../../entities/CategoryModel";
import { PostgresDataSource } from "../../../../database/index";
import { ICategoryRepository, ICategoryDTO } from "../ICategoryRepository";



class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = PostgresDataSource.getRepository(Category)
  }

  async create({ description, name }: ICategoryDTO): Promise<void> {

    const category = new Category();

    category.description = description;
    category.name = name;

    await this.categoryRepository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { name: name } });
    return category;
  }

}

export { CategoryRepository }
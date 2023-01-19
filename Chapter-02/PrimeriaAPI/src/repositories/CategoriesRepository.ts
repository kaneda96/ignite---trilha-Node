import { Category } from "../model/CategoryModel";
import { ICategoryRepository, ICategoryDTO } from "./ICategoryRepository";



class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICategoryDTO): void {

    const category = new Category();

    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);

  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

}

export { CategoryRepository }
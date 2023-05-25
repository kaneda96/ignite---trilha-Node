import { ListCategoryUseCase } from "./ListCategoriesUseCase";
import { Request, Response } from "express";

class ListCategoryController {

  constructor(private listCategoryUseCase: ListCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const all = await this.listCategoryUseCase.execute();

    return response.status(200).json(all);

  }

}

export { ListCategoryController }
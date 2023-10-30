
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;
      const importCategoriesUseCase = container.resolve(ImportCategoryUseCase);
      await importCategoriesUseCase.execute(file);
      return response.send();
    } catch (error) {
      return response.status(500).send(error);
    }

  }

}

export { ImportCategoryController }
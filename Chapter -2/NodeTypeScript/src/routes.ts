import { Request, Response } from "express";
import CreateCourseService from "./CreateCoursesServices";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    durantion: 10,
    educator: "Bruno",
  });

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Ferrari",
  });
  return response.send();
}

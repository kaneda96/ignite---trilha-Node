interface Course {
  name: string;
  durantion?: number;
  educator: string;
}

//durantion = 8 -> É um valor default caso não venha nenhuma informação
class CreateCourseService {
  execute({ durantion = 8, educator, name }: Course) {
    console.log(name, durantion, educator);
  }
}

export default new CreateCourseService();

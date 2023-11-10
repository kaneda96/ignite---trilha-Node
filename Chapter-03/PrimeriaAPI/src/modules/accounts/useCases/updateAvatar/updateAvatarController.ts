import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUseCase } from './updateAvatarUseCase';


class UpdateAvatarController {
    async handle(request: Request, response: Response){

        const userId = request.user.id; 
        const avatarFile = request.file.filename;

        const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);

        await updateAvatarUseCase.exeute({userId, avatarFile});

        response.status(204).send();
    }
}

export { UpdateAvatarController }
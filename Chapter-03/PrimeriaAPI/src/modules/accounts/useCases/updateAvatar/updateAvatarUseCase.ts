import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class UpdateAvatarUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
      ) { }
    
    async exeute({ userId, avatarFile }){
        this.userRepository.updateAvatar(userId, avatarFile);
    }
}

export { UpdateAvatarUseCase }
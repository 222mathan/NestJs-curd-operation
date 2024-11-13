import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { User } from './interface/users.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getAllInterns(): any[];
    getUserById(id: string): Promise<User>;
    updateUserById(id: string, user: UserDto): Promise<User>;
    createUser(user: UserDto): Promise<User>;
}

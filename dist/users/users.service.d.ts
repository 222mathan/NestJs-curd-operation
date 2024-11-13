import { Model } from 'mongoose';
import { User } from './interface/users.interface';
import { UserDto } from './dto/users.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    updateUserById(id: string, user: UserDto): Promise<User>;
    createUser(user: UserDto): Promise<User>;
}

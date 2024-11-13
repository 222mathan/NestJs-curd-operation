import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    email?: string;
    dob?: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
    dob?: NativeDate;
}>> & mongoose.FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
    dob?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;

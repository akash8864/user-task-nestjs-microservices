import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class UserDocument extends Document
{
    @Prop()
    name:string;
    @Prop()
    task:string;;
}
export const UserSchema=SchemaFactory.createForClass(UserDocument);
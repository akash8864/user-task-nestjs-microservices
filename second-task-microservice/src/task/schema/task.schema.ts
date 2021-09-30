import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class TaskDocument extends Document
{
    @Prop()
    task:string;;
}
export const TaskSchema =SchemaFactory.createForClass(TaskDocument)
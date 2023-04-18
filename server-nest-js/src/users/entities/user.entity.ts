import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Model } from 'mongoose';
import { nanoid } from 'nanoid';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
  @Prop({default: ()=>nanoid(), type: String})
  _id: string;
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true})
  email: string;

  @Prop()
  password: string;

  createdAt: Date;

  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
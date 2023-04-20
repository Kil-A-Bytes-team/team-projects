import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Model } from 'mongoose';
import { nanoid } from 'nanoid';

export type UserDocument = HydratedDocument<User>;

export enum ROLES{
  ADMIN= 'admin',
  TEACHER= 'teacher',
  STUDENT= 'student',
}

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

  @Prop({ type: [{ type: String, enum: Object.values(ROLES) }] }) // Use the enum values as the enum property in the schema
  roles: ROLES[];

  createdAt: Date;

  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);



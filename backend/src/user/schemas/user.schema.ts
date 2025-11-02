// src/user/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  date?: string;

  @Prop()
  time?: string;

  @Prop()
  area?: string;

  @Prop()
  city?: string;

  @Prop()
  state?: string;

  @Prop()
  postCode?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { SectionTemplate } from './section-template.schema';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'SectionTemplate',
    autopopulate: false,
    required: false,
  })
  template?: SectionTemplate;

  // @Prop({ type: String, required: true })
  // text: string;

  // @Prop({ type: Date, required: true })
  // date: Date;

  @Prop({ type: () => [SectionSchema], required: false })
  subSections?: Section[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);

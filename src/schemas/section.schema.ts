import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { SectionTemplate } from './section-template.schema';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  // a section can come from a template. It's a reference, not a nested object.
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'SectionTemplate',
    required: false,
  })
  template?: SectionTemplate;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: Date, required: true })
  date: Date;

  // a section has a list of sub-sections. They are nested, not related.
  @Prop({ type: () => [SectionSchema], required: false })
  subSections?: Section[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);

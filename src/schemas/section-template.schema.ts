import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Section, SectionSchema } from './section.schema';

export type SectionTemplateDocument = SectionTemplate & Document;

@Schema()
export class SectionTemplate {
  // a section template has it's own content. It's not a relation, it's a nested object.
  @Prop({ type: SectionSchema, required: true })
  section: Section;
}

export const SectionTemplateSchema =
  SchemaFactory.createForClass(SectionTemplate);

// import { forwardRef } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Section, SectionSchema } from './section.schema';

export type SectionTemplateDocument = SectionTemplate & Document;

@Schema()
export class SectionTemplate {
  @Prop({ type: SectionSchema, required: true })
  section: Section;
}

export const SectionTemplateSchema =
  SchemaFactory.createForClass(SectionTemplate);

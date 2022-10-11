// import { forwardRef } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

import { Section, SectionSchema } from './section.schema';

export type DocumentTemplateDocument = DocumentTemplate & MongooseDocument;

@Schema()
export class DocumentTemplate {
  @Prop({ type: [SectionSchema], required: true })
  sections: Section[];
}

export const DocumentTemplateSchema =
  SchemaFactory.createForClass(DocumentTemplate);

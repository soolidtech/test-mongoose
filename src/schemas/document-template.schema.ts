import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

import { Section, SectionSchema } from './section.schema';

export type DocumentTemplateDocument = DocumentTemplate & MongooseDocument;

@Schema()
export class DocumentTemplate {
  // a document template has predefined sections. It's not a relation, it's a nested array.
  @Prop({ type: [SectionSchema], required: true })
  sections: Section[];
}

export const DocumentTemplateSchema =
  SchemaFactory.createForClass(DocumentTemplate);

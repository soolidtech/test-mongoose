import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  DocumentTemplate,
  DocumentTemplateDocument,
} from './schemas/document-template.schema';

import {
  SectionTemplate,
  SectionTemplateDocument,
} from './schemas/section-template.schema';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(SectionTemplate.name)
    private sectionTemplateModel: Model<SectionTemplateDocument>,
    @InjectModel(DocumentTemplate.name)
    private documentTemplate: Model<DocumentTemplateDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createSectionTemplate(): string {
    try {
      const sectionTemplate = new this.sectionTemplateModel({
        content: {
          text: 'Hello World!',
          date: new Date(),
        },
      });
      sectionTemplate.save();
      return 'OK';
    } catch (error) {
      return error.message;
    }
  }
}

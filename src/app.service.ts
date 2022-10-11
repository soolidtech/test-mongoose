import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Section, SectionDocument } from './schemas/section.schema';

import {
  SectionTemplate,
  SectionTemplateDocument,
} from './schemas/section-template.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(SectionTemplate.name)
    private sectionTemplateModel: Model<SectionTemplateDocument>, // @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createTemplate(): string {
    try {
      const template = new this.sectionTemplateModel({
        content: {
          text: 'Hello World!',
          date: new Date(),
        },
      });
      template.save();
      return 'Template created';
    } catch (error) {
      return error.message;
    }
  }
}

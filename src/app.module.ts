import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  DocumentTemplate,
  DocumentTemplateSchema,
} from './schemas/document-template.schema';
import {
  SectionTemplate,
  SectionTemplateSchema,
} from './schemas/section-template.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/tbd'),
    MongooseModule.forFeature([
      { name: SectionTemplate.name, schema: SectionTemplateSchema },
      { name: DocumentTemplate.name, schema: DocumentTemplateSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

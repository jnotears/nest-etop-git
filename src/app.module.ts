import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './g-users/user.module';
import { IssueModule } from './g-issues/issue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnModule } from './g-columns/column.module';
import { entities } from './helper/entities';
import { MilestoneModule } from './g-milestones/milestone.module';
import { RepositoryModule } from './g-repositories/repository.module';
import { ProjectModule } from './g-projects/project.module';
import { PayloadModule } from './g-payload/payload.module';

@Module({
  imports: [
    HttpModule,
    UserModule,
    IssueModule,
    ColumnModule,
    MilestoneModule,
    RepositoryModule,
    ProjectModule,
    PayloadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'git-etop-x',
      entities: entities,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }

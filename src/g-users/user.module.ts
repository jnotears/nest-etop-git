import { Module, HttpModule } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Converter } from 'src/helper/converter';
import { UserController } from './user.controller';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UserController],
    providers: [
        UserService,
        Converter
    ],
})
export class UserModule { }
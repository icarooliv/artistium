import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkModule } from './artwork/artwork.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ArtworkModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    connection.runMigrations();
    Logger.log(
      `Database connection initialized at: ${connection.options['host']}:${
        connection.options['port']
      }`,
      'Database',
    );
  }
}

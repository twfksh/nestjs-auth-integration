import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get('PG_HOST)'),
            port: this.configService.get('PG_PORT'),
            username: this.configService.get('PG_USERNAME'),
            password: this.configService.get('PG_PASSWORD'),
            database: this.configService.get('PG_DATABASE'),
            entities: ['dist/**/**/*.entity.{ts,js}'],
            synchronize: true, // do NOT use in production environment, use migration instead
        }
    }
}
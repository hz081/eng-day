import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { SampleModule } from './modules/sample/sample.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    SampleModule,
    ClientsModule.register([
      {
        name: 'sample_proto',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'sample_proto',
          protoPath: '../../protobuf/modules/sample/sample.proto',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

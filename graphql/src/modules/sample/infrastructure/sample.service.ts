import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ISampleService } from '../services/sample.interface';
import { Sample } from '../types/sample.type';
import { ClientGrpc } from '@nestjs/microservices';
import { SampleGrpcClient } from '../../../../../protobuf/modules/sample/sample';

@Injectable()
export class SampleService implements ISampleService, OnModuleInit {
  private sampleGrpcClient: SampleGrpcClient;

  constructor(@Inject('sample_proto') private grpcClient: ClientGrpc) {}

  onModuleInit() {
    this.sampleGrpcClient =
      this.grpcClient.getService<SampleGrpcClient>('SampleGrpc');
  }

  async getSample(param1: string, param2?: string): Promise<Sample> {
    const response = await this.sampleGrpcClient
      .getSample({ param1, param2: param2 ?? '' })
      .toPromise();
    return {
      param1: response!.param1,
      param2: response?.param2,
    };
  }
}

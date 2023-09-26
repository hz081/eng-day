import { Controller } from '@nestjs/common';
import {
  SampleGrpcController,
  SampleGrpcControllerMethods,
  SampleRequest,
  SampleResponse,
} from '@app/modules/sample/sample';

@Controller()
@SampleGrpcControllerMethods()
export class SampleHandler implements SampleGrpcController {
  async getSample(request: SampleRequest): Promise<SampleResponse> {
    return {
      param1: request.param1,
      param2: request.param2,
    };
  }
}

import { Controller } from '@nestjs/common';
import {
  SampleGrpcController,
  SampleGrpcControllerMethods,
  SampleRequest,
  SampleResponse,
} from '@sample/sample';

@Controller()
@SampleGrpcControllerMethods()
export class SampleController implements SampleGrpcController {
  async getSample(request: SampleRequest): Promise<SampleResponse> {
    return {
      param1: request.param1,
      param2: request.param2,
    };
  }
}

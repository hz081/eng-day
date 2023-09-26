import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "sample_proto";

export interface SampleRequest {
  param1: string;
  param2: string;
}

export interface SampleResponse {
  param1: string;
  param2: string;
}

export const SAMPLE_PROTO_PACKAGE_NAME = "sample_proto";

export interface SampleGrpcClient {
  getSample(request: SampleRequest): Observable<SampleResponse>;
}

export interface SampleGrpcController {
  getSample(
    request: SampleRequest
  ): Promise<SampleResponse> | Observable<SampleResponse> | SampleResponse;
}

export function SampleGrpcControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getSample"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("SampleGrpc", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("SampleGrpc", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const SAMPLE_GRPC_SERVICE_NAME = "SampleGrpc";

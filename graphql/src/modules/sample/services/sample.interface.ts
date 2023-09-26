import { Sample } from '../types/sample.type';

export interface ISampleService {
  getSample(param1: string, param2?: string): Promise<Sample>;
}

import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { each } from 'lodash';

@Injectable()
export class ConfigService {
  config = {};

  constructor() {
    this.config = this.loadConfiguration();
  }

  public get<T = string>(key: string, defaultValue?: T): T {
    return this.config[key] as T ?? defaultValue
  }

  private loadConfiguration() {
    const result = dotenv.config();
    return (!('error' in result))
      ? result.parsed
      : each(process.env, (value, key) => this.config[key] = value);
  }
}

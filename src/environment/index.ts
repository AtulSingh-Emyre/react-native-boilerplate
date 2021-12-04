import {DevEnvironment} from './dev.env';
import {ProdEnvironment} from './prod.env';

export interface Environment {
  base_api_url: string;
  auth_url : string;
}
export function getEnvVariable(): Environment {
  if (__DEV__) {
    return DevEnvironment;
  } else {
    return ProdEnvironment;
  }
}

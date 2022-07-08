import { authInitialState } from './authReducer';
import { appInitialState } from './appReducer';
import { accountInitialState } from './accountReducer';
import { commonInitialState } from './commonReducer';

export interface IRootState {
  auth: typeof authInitialState;
  app: typeof appInitialState;
  account: typeof accountInitialState;
  common: typeof commonInitialState;
}

export * from './appReducer';
export * from './authReducer';
export * from './accountReducer';
export * from './commonReducer';

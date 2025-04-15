import { merge } from 'webpack-merge';
import common from './webpack.common.mjs';
import dev from './webpack.dev.mjs';
import prod from './webpack.prod.mjs';

export default (env) => {
  return env.production ? merge(common, prod) : merge(common, dev);
};
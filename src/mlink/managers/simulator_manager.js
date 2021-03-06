const simrun = require('simrun');
const config = require('../../lib/config');
const hook = require('../../util/hook');
exports.connect = function (channelId) {
  let params = `ws://${config.ip}:${config.port}/debugProxy/native/${channelId}`;
  if (config.bundleUrls && config.bundleUrls.length === 1) {
    params += ',' + config.bundleUrls[0];
  }
  hook.record('/weex_tool.weex_debugger.scenes', { feature: 'simrun', status: 'start' });
  return simrun.ios('weex-devtool', 'iPhone 6', 'https://registry.npm.taobao.org/weex-devtool-playground/-/weex-devtool-playground-0.1.0.tgz|package/WeexDemo.app', 'WeexPlayground', params);
};

import dndTree from './index';

let data = require('./data/paypal.json');
var treeJSON = dndTree(data);
window.treeJSON = treeJSON;


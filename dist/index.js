'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
// node-seed

const PORT = 3000;

app.get('/', (req, resp) => {
    resp.send("Node-seed");
});

app.listen(PORT, () => console.log("Server started on port ${port}", PORT));
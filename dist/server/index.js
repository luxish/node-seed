'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _logger = require('./middleware/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// node-seed
const app = (0, _express2.default)();
const PORT = 3000;

app.use(_logger2.default);
app.get('/', (req, resp) => {
    resp.send("Node-seed");
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
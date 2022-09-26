var http = require("http");

var options = {
host: "127.0.0.1",
port: 8000,
path: 'http://government.ru/',
headers: {
Host: 'http://government.ru'
}
};
http.get(options, function(res) {});

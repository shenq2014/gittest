var http = require('http');
var fs = require('fs');
var url = require('url');


// ����������
http.createServer( function (request, response) {
    // �������󣬰����ļ���
    var pathname = url.parse(request.url).pathname;

    // ���������ļ���
    console.log("Request for " + pathname + " received.");

    // ���ļ�ϵͳ�ж�ȡ������ļ�����
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP ״̬��: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            // HTTP ״̬��: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // ��Ӧ�ļ�����
            response.write(data.toString());
        }
        //  ������Ӧ����
        response.end();
    });
}).listen(8081);

// ����̨�����������Ϣ
console.log('Server running at http://192.168.1.123:8081/');
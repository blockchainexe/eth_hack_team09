from datetime import datetime
import pandas as pd
from io import StringIO
import json
import ipfsapi

from http.server import BaseHTTPRequestHandler, HTTPServer
from jsonrpcserver import methods

@methods.add
def call_func(inference_function_hash, data_csv_hash, predict_time):
    api = ipfsapi.connect('127.0.0.1', 5001)
    inference_function = api.cat(inference_function_hash).decode()
    exec(inference_function, globals())

    data_csv = StringIO(api.cat(data_csv_hash).decode())

    function_output = predict_length(data_csv, predict_time).to_csv(index=True, header=False)

    result = {
        'date': datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        'input': data_csv_hash,
        'model': inference_function_hash,
        'output': api.add_str(function_output)
    }

    return api.add_json(json.dumps(result))


class IpfsHttpServer(BaseHTTPRequestHandler):
    def do_POST(self):
        # Process request
        request = self.rfile.read(int(self.headers['Content-Length'])).decode()
        response = methods.dispatch(request)

        # Return response
        self.send_response(response.http_status)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(str(response).encode())


if __name__ == '__main__':
    HTTPServer(('localhost', 5000), IpfsHttpServer).serve_forever()

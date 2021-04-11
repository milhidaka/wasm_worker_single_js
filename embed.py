import base64

# embed wasm into worker js
with open("work/worker.wasm", "rb") as f:
    worker_wasm = f.read()
with open("work/worker.js", "rt") as f:
    worker_js = f.read()

worker_js_with_wasm = worker_js.replace("WASM_WORKER_WASM_BINARY_BASE64", base64.b64encode(worker_wasm).decode("ascii"))

with open("front/front.js", "rt") as f:
    front_js = f.read()

front_js_with_wasm = front_js.replace("WASM_WORKER_JS_BASE64", base64.b64encode(worker_js_with_wasm.encode("utf-8")).decode("ascii"))

with open("dist/index.js", "wt") as f:
    f.write(front_js_with_wasm)

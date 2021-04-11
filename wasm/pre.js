onmessage = function (event) {
    switch (event.data.type) {
        case "mul":
            var result = Module._mul(event.data.a, event.data.b);
            postMessage({type: "mul", result: result});
            break;
    }
};

Module.onRuntimeInitialized = function () {
    postMessage({type: "initializeComplete"});
};

(function() {
    var bstr = atob("WASM_WORKER_WASM_BINARY_BASE64");
    var ary = new Uint8Array(bstr.length);
    for (var i = 0; i < bstr.length; i++) {
        ary[i] = bstr.charCodeAt(i);
    }
    Module.wasmBinary = ary;
})();

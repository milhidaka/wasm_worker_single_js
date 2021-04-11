
let worker;
const resolvers = [];

function initWorker() {
    const workerSrcURL = URL.createObjectURL(new File([atob("WASM_WORKER_JS_BASE64")], "w.js", {type: "text/javascript"}));
    worker = new Worker(workerSrcURL);
    worker.onmessage = (ev) => {
        for (let i = 0; i < resolvers.length; i++) {
            if (resolvers[i](ev)) {
                resolvers.splice(i, 1);
                break;
            }
        }
    }
    return new Promise((resolve) => {
        resolvers.push((ev) => {
            if (ev.data.type === "initializeComplete") {
                resolve();
                return true;
            }
        });
    });
}

function mul(a, b) {
    worker.postMessage({type: "mul", a, b});
    return new Promise((resolve) => {
        resolvers.push((ev) => {
            if (ev.data.type === "mul") {
                resolve(ev.data.result);
                return true;
            }
        });
    });
}

async function run() {
    if (!worker) {
        await initWorker();
    }
    const r = await mul(3, 4);
    console.log("mul(3,4)=", r);
}

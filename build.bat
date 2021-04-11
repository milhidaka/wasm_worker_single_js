call emcc wasm\mul.cpp --pre-js wasm\pre.js -o work\worker.js -O3
python embed.py

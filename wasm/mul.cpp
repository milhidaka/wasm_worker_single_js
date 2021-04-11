#include <emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE int mul(int a, int b) {
        return a * b;
    }
}

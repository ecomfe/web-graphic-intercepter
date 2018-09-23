# 命令在 buffer 中的 layout

|所有命令的 meta 信息|命令1|命令2|命令3|END

+ 命令的 meta 信息是一个 json 字符串，用 TextEncoder pack 成 binary

+ meta 信息中包含了命令的 id，命令名称，命令类型（getter，setter或者是方法），各个参数类型

+ 如果命令是个方法，方法的不同重载会有不同的 id

### 单个命令

|长度|命令id|参数0|参数1|参数2|


### 参数类型

1. 浮点数

占用一个 float，直接 pack

2. 颜色

先 parse 成 RGBA，然后把四个 unsigned byte pack 成一个 float

Pack:
```js
new Float32Array((new Uint8Array([r,g,b,a])).buffer)[0];
```

Unpack:
```js
new Uint8Array((new Float32Array([f])).buffer);
```

3. 字符串

用 TextEncoder pack 成 binary，有一个长度的头。


4. WebGLBuffer/WebGLTexture/WebGLProgram/WebGLFramebuffer 等对象

存储对象 id

5. Image

存储对象 id
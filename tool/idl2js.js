const fs = require('fs');
const webidl = require('webidl2');
const path = require('path');

const webglStr = fs.readFileSync(path.resolve(__dirname, './spec/webgl.idl'), 'utf-8');

const glTypeDef = {
    'GLintptr': 'int',
    'GLsizei': 'int',
    'GLbitfield': 'int',
    'GLboolean': 'bool',
    'GLshort': 'short',
    'GLushort': 'ushort',
    'GLbyte': 'bytpe',
    'GLubyte': 'ubyte',
    'GLuint': 'uint',
    'GLint': 'int',

    'GLfloat': 'float',
    'GLclampf': 'float',

    'DOMString': 'string',
    'Float32Array': 'float[]',
    'Int32Array': 'int[]',

    'GLenum': 'int'
};

const webglDrawcalls = {
    'clear': true,
    'drawArrays': true,
    'drawElements': true
};


function convertWebGLIDL(idlStr) {
    const idl = webidl.parse(idlStr);

    const enums = {};
    const methods = [];
    const properties = {};

    let idStart = 1;
    idl.forEach(idlTopItem => {
        if (idlTopItem.name === 'WebGLRenderingContext') {
            // Parse members
            idlTopItem.members.forEach(idlMember => {
                if (idlMember.type === 'operation') {
                    const opBody = idlMember.body;
                    const funcName = opBody.name.value;
                    const args = opBody.arguments;

                    methods.push({
                        id: idStart++,
                        name: funcName,
                        drawCall: webglDrawcalls[funcName],
                        args: args.map(arg => {
                            let type = arg.idlType.idlType;
                            if (type instanceof Array) {
                                // Array value
                                type = type.map(itm => itm.idlType);
                            }
                            return {
                                name: arg.name,
                                packType: glTypeDef[type] || '',
                                idlType: type,
                                nullable: !!glTypeDef[type]
                            };
                        })
                    });
                }
                else if (idlMember.type === 'const') {
                    const idlType = idlMember.idlType;
                    if (idlType.idlType === 'GLenum') {
                        enums[idlMember.name] = parseInt(idlMember.value.value, 16);
                    }
                }
            });
        }
    });

    fs.writeFileSync(
        path.resolve(__dirname, '../src/spec/webgl.js'),
        '/*eslint-disable*/\n export default '
        + JSON.stringify(
            { typedef: glTypeDef, enums: enums, methods: methods},
            null, 2
        )
    );
    // console.log(JSON.stringify(enums, null, 2));
    // console.log(JSON.stringify(methods, null, 2));
}

convertWebGLIDL(webglStr);
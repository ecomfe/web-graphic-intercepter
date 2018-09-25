/*eslint-disable*/
 export default {
  "typedef": {
    "GLintptr": "int",
    "GLsizei": "int",
    "GLbitfield": "int",
    "GLboolean": "bool",
    "GLshort": "short",
    "GLushort": "ushort",
    "GLbyte": "bytpe",
    "GLubyte": "ubyte",
    "GLuint": "uint",
    "GLint": "int",
    "GLfloat": "float",
    "GLclampf": "float",
    "DOMString": "string",
    "Float32Array": "float[]",
    "Int32Array": "int[]",
    "GLenum": "int"
  },
  "enums": {
    "DEPTH_BUFFER_BIT": 256,
    "STENCIL_BUFFER_BIT": 1024,
    "COLOR_BUFFER_BIT": 16384,
    "POINTS": 0,
    "LINES": 1,
    "LINE_LOOP": 2,
    "LINE_STRIP": 3,
    "TRIANGLES": 4,
    "TRIANGLE_STRIP": 5,
    "TRIANGLE_FAN": 6,
    "ZERO": 0,
    "ONE": 1,
    "SRC_COLOR": 768,
    "ONE_MINUS_SRC_COLOR": 769,
    "SRC_ALPHA": 770,
    "ONE_MINUS_SRC_ALPHA": 771,
    "DST_ALPHA": 772,
    "ONE_MINUS_DST_ALPHA": 773,
    "DST_COLOR": 774,
    "ONE_MINUS_DST_COLOR": 775,
    "SRC_ALPHA_SATURATE": 776,
    "FUNC_ADD": 32774,
    "BLEND_EQUATION": 32777,
    "BLEND_EQUATION_RGB": 32777,
    "BLEND_EQUATION_ALPHA": 34877,
    "FUNC_SUBTRACT": 32778,
    "FUNC_REVERSE_SUBTRACT": 32779,
    "BLEND_DST_RGB": 32968,
    "BLEND_SRC_RGB": 32969,
    "BLEND_DST_ALPHA": 32970,
    "BLEND_SRC_ALPHA": 32971,
    "CONSTANT_COLOR": 32769,
    "ONE_MINUS_CONSTANT_COLOR": 32770,
    "CONSTANT_ALPHA": 32771,
    "ONE_MINUS_CONSTANT_ALPHA": 32772,
    "BLEND_COLOR": 32773,
    "ARRAY_BUFFER": 34962,
    "ELEMENT_ARRAY_BUFFER": 34963,
    "ARRAY_BUFFER_BINDING": 34964,
    "ELEMENT_ARRAY_BUFFER_BINDING": 34965,
    "STREAM_DRAW": 35040,
    "STATIC_DRAW": 35044,
    "DYNAMIC_DRAW": 35048,
    "BUFFER_SIZE": 34660,
    "BUFFER_USAGE": 34661,
    "CURRENT_VERTEX_ATTRIB": 34342,
    "FRONT": 1028,
    "BACK": 1029,
    "FRONT_AND_BACK": 1032,
    "CULL_FACE": 2884,
    "BLEND": 3042,
    "DITHER": 3024,
    "STENCIL_TEST": 2960,
    "DEPTH_TEST": 2929,
    "SCISSOR_TEST": 3089,
    "POLYGON_OFFSET_FILL": 32823,
    "SAMPLE_ALPHA_TO_COVERAGE": 32926,
    "SAMPLE_COVERAGE": 32928,
    "NO_ERROR": 0,
    "INVALID_ENUM": 1280,
    "INVALID_VALUE": 1281,
    "INVALID_OPERATION": 1282,
    "OUT_OF_MEMORY": 1285,
    "CW": 2304,
    "CCW": 2305,
    "LINE_WIDTH": 2849,
    "ALIASED_POINT_SIZE_RANGE": 33901,
    "ALIASED_LINE_WIDTH_RANGE": 33902,
    "CULL_FACE_MODE": 2885,
    "FRONT_FACE": 2886,
    "DEPTH_RANGE": 2928,
    "DEPTH_WRITEMASK": 2930,
    "DEPTH_CLEAR_VALUE": 2931,
    "DEPTH_FUNC": 2932,
    "STENCIL_CLEAR_VALUE": 2961,
    "STENCIL_FUNC": 2962,
    "STENCIL_FAIL": 2964,
    "STENCIL_PASS_DEPTH_FAIL": 2965,
    "STENCIL_PASS_DEPTH_PASS": 2966,
    "STENCIL_REF": 2967,
    "STENCIL_VALUE_MASK": 2963,
    "STENCIL_WRITEMASK": 2968,
    "STENCIL_BACK_FUNC": 34816,
    "STENCIL_BACK_FAIL": 34817,
    "STENCIL_BACK_PASS_DEPTH_FAIL": 34818,
    "STENCIL_BACK_PASS_DEPTH_PASS": 34819,
    "STENCIL_BACK_REF": 36003,
    "STENCIL_BACK_VALUE_MASK": 36004,
    "STENCIL_BACK_WRITEMASK": 36005,
    "VIEWPORT": 2978,
    "SCISSOR_BOX": 3088,
    "COLOR_CLEAR_VALUE": 3106,
    "COLOR_WRITEMASK": 3107,
    "UNPACK_ALIGNMENT": 3317,
    "PACK_ALIGNMENT": 3333,
    "MAX_TEXTURE_SIZE": 3379,
    "MAX_VIEWPORT_DIMS": 3386,
    "SUBPIXEL_BITS": 3408,
    "RED_BITS": 3410,
    "GREEN_BITS": 3411,
    "BLUE_BITS": 3412,
    "ALPHA_BITS": 3413,
    "DEPTH_BITS": 3414,
    "STENCIL_BITS": 3415,
    "POLYGON_OFFSET_UNITS": 10752,
    "POLYGON_OFFSET_FACTOR": 32824,
    "TEXTURE_BINDING_2D": 32873,
    "SAMPLE_BUFFERS": 32936,
    "SAMPLES": 32937,
    "SAMPLE_COVERAGE_VALUE": 32938,
    "SAMPLE_COVERAGE_INVERT": 32939,
    "COMPRESSED_TEXTURE_FORMATS": 34467,
    "DONT_CARE": 4352,
    "FASTEST": 4353,
    "NICEST": 4354,
    "GENERATE_MIPMAP_HINT": 33170,
    "BYTE": 5120,
    "UNSIGNED_BYTE": 5121,
    "SHORT": 5122,
    "UNSIGNED_SHORT": 5123,
    "INT": 5124,
    "UNSIGNED_INT": 5125,
    "FLOAT": 5126,
    "DEPTH_COMPONENT": 6402,
    "ALPHA": 6406,
    "RGB": 6407,
    "RGBA": 6408,
    "LUMINANCE": 6409,
    "LUMINANCE_ALPHA": 6410,
    "UNSIGNED_SHORT_4_4_4_4": 32819,
    "UNSIGNED_SHORT_5_5_5_1": 32820,
    "UNSIGNED_SHORT_5_6_5": 33635,
    "FRAGMENT_SHADER": 35632,
    "VERTEX_SHADER": 35633,
    "MAX_VERTEX_ATTRIBS": 34921,
    "MAX_VERTEX_UNIFORM_VECTORS": 36347,
    "MAX_VARYING_VECTORS": 36348,
    "MAX_COMBINED_TEXTURE_IMAGE_UNITS": 35661,
    "MAX_VERTEX_TEXTURE_IMAGE_UNITS": 35660,
    "MAX_TEXTURE_IMAGE_UNITS": 34930,
    "MAX_FRAGMENT_UNIFORM_VECTORS": 36349,
    "SHADER_TYPE": 35663,
    "DELETE_STATUS": 35712,
    "LINK_STATUS": 35714,
    "VALIDATE_STATUS": 35715,
    "ATTACHED_SHADERS": 35717,
    "ACTIVE_UNIFORMS": 35718,
    "ACTIVE_ATTRIBUTES": 35721,
    "SHADING_LANGUAGE_VERSION": 35724,
    "CURRENT_PROGRAM": 35725,
    "NEVER": 512,
    "LESS": 513,
    "EQUAL": 514,
    "LEQUAL": 515,
    "GREATER": 516,
    "NOTEQUAL": 517,
    "GEQUAL": 518,
    "ALWAYS": 519,
    "KEEP": 7680,
    "REPLACE": 7681,
    "INCR": 7682,
    "DECR": 7683,
    "INVERT": 5386,
    "INCR_WRAP": 34055,
    "DECR_WRAP": 34056,
    "VENDOR": 7936,
    "RENDERER": 7937,
    "VERSION": 7938,
    "NEAREST": 9728,
    "LINEAR": 9729,
    "NEAREST_MIPMAP_NEAREST": 9984,
    "LINEAR_MIPMAP_NEAREST": 9985,
    "NEAREST_MIPMAP_LINEAR": 9986,
    "LINEAR_MIPMAP_LINEAR": 9987,
    "TEXTURE_MAG_FILTER": 10240,
    "TEXTURE_MIN_FILTER": 10241,
    "TEXTURE_WRAP_S": 10242,
    "TEXTURE_WRAP_T": 10243,
    "TEXTURE_2D": 3553,
    "TEXTURE": 5890,
    "TEXTURE_CUBE_MAP": 34067,
    "TEXTURE_BINDING_CUBE_MAP": 34068,
    "TEXTURE_CUBE_MAP_POSITIVE_X": 34069,
    "TEXTURE_CUBE_MAP_NEGATIVE_X": 34070,
    "TEXTURE_CUBE_MAP_POSITIVE_Y": 34071,
    "TEXTURE_CUBE_MAP_NEGATIVE_Y": 34072,
    "TEXTURE_CUBE_MAP_POSITIVE_Z": 34073,
    "TEXTURE_CUBE_MAP_NEGATIVE_Z": 34074,
    "MAX_CUBE_MAP_TEXTURE_SIZE": 34076,
    "TEXTURE0": 33984,
    "TEXTURE1": 33985,
    "TEXTURE2": 33986,
    "TEXTURE3": 33987,
    "TEXTURE4": 33988,
    "TEXTURE5": 33989,
    "TEXTURE6": 33990,
    "TEXTURE7": 33991,
    "TEXTURE8": 33992,
    "TEXTURE9": 33993,
    "TEXTURE10": 33994,
    "TEXTURE11": 33995,
    "TEXTURE12": 33996,
    "TEXTURE13": 33997,
    "TEXTURE14": 33998,
    "TEXTURE15": 33999,
    "TEXTURE16": 34000,
    "TEXTURE17": 34001,
    "TEXTURE18": 34002,
    "TEXTURE19": 34003,
    "TEXTURE20": 34004,
    "TEXTURE21": 34005,
    "TEXTURE22": 34006,
    "TEXTURE23": 34007,
    "TEXTURE24": 34008,
    "TEXTURE25": 34009,
    "TEXTURE26": 34010,
    "TEXTURE27": 34011,
    "TEXTURE28": 34012,
    "TEXTURE29": 34013,
    "TEXTURE30": 34014,
    "TEXTURE31": 34015,
    "ACTIVE_TEXTURE": 34016,
    "REPEAT": 10497,
    "CLAMP_TO_EDGE": 33071,
    "MIRRORED_REPEAT": 33648,
    "FLOAT_VEC2": 35664,
    "FLOAT_VEC3": 35665,
    "FLOAT_VEC4": 35666,
    "INT_VEC2": 35667,
    "INT_VEC3": 35668,
    "INT_VEC4": 35669,
    "BOOL": 35670,
    "BOOL_VEC2": 35671,
    "BOOL_VEC3": 35672,
    "BOOL_VEC4": 35673,
    "FLOAT_MAT2": 35674,
    "FLOAT_MAT3": 35675,
    "FLOAT_MAT4": 35676,
    "SAMPLER_2D": 35678,
    "SAMPLER_CUBE": 35680,
    "VERTEX_ATTRIB_ARRAY_ENABLED": 34338,
    "VERTEX_ATTRIB_ARRAY_SIZE": 34339,
    "VERTEX_ATTRIB_ARRAY_STRIDE": 34340,
    "VERTEX_ATTRIB_ARRAY_TYPE": 34341,
    "VERTEX_ATTRIB_ARRAY_NORMALIZED": 34922,
    "VERTEX_ATTRIB_ARRAY_POINTER": 34373,
    "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING": 34975,
    "COMPILE_STATUS": 35713,
    "LOW_FLOAT": 36336,
    "MEDIUM_FLOAT": 36337,
    "HIGH_FLOAT": 36338,
    "LOW_INT": 36339,
    "MEDIUM_INT": 36340,
    "HIGH_INT": 36341,
    "FRAMEBUFFER": 36160,
    "RENDERBUFFER": 36161,
    "RGBA4": 32854,
    "RGB5_A1": 32855,
    "RGB565": 36194,
    "DEPTH_COMPONENT16": 33189,
    "STENCIL_INDEX": 6401,
    "STENCIL_INDEX8": 36168,
    "DEPTH_STENCIL": 34041,
    "RENDERBUFFER_WIDTH": 36162,
    "RENDERBUFFER_HEIGHT": 36163,
    "RENDERBUFFER_INTERNAL_FORMAT": 36164,
    "RENDERBUFFER_RED_SIZE": 36176,
    "RENDERBUFFER_GREEN_SIZE": 36177,
    "RENDERBUFFER_BLUE_SIZE": 36178,
    "RENDERBUFFER_ALPHA_SIZE": 36179,
    "RENDERBUFFER_DEPTH_SIZE": 36180,
    "RENDERBUFFER_STENCIL_SIZE": 36181,
    "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE": 36048,
    "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME": 36049,
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL": 36050,
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE": 36051,
    "COLOR_ATTACHMENT0": 36064,
    "DEPTH_ATTACHMENT": 36096,
    "STENCIL_ATTACHMENT": 36128,
    "DEPTH_STENCIL_ATTACHMENT": 33306,
    "NONE": 0,
    "FRAMEBUFFER_COMPLETE": 36053,
    "FRAMEBUFFER_INCOMPLETE_ATTACHMENT": 36054,
    "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT": 36055,
    "FRAMEBUFFER_INCOMPLETE_DIMENSIONS": 36057,
    "FRAMEBUFFER_UNSUPPORTED": 36061,
    "FRAMEBUFFER_BINDING": 36006,
    "RENDERBUFFER_BINDING": 36007,
    "MAX_RENDERBUFFER_SIZE": 34024,
    "INVALID_FRAMEBUFFER_OPERATION": 1286,
    "UNPACK_FLIP_Y_WEBGL": 37440,
    "UNPACK_PREMULTIPLY_ALPHA_WEBGL": 37441,
    "CONTEXT_LOST_WEBGL": 37442,
    "UNPACK_COLORSPACE_CONVERSION_WEBGL": 37443,
    "BROWSER_DEFAULT_WEBGL": 37444
  },
  "methods": [
    {
      "id": 1,
      "name": "getContextAttributes",
      "args": []
    },
    {
      "id": 2,
      "name": "isContextLost",
      "args": []
    },
    {
      "id": 3,
      "name": "getSupportedExtensions",
      "args": []
    },
    {
      "id": 4,
      "name": "getExtension",
      "args": [
        {
          "name": "name",
          "packType": "string",
          "idlType": "DOMString",
          "nullable": true
        }
      ]
    },
    {
      "id": 5,
      "name": "activeTexture",
      "args": [
        {
          "name": "texture",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 6,
      "name": "attachShader",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 7,
      "name": "bindAttribLocation",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "name",
          "packType": "string",
          "idlType": "DOMString",
          "nullable": true
        }
      ]
    },
    {
      "id": 8,
      "name": "bindBuffer",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "buffer",
          "packType": "",
          "idlType": "WebGLBuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 9,
      "name": "bindFramebuffer",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "framebuffer",
          "packType": "",
          "idlType": "WebGLFramebuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 10,
      "name": "bindRenderbuffer",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "renderbuffer",
          "packType": "",
          "idlType": "WebGLRenderbuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 11,
      "name": "bindTexture",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "texture",
          "packType": "",
          "idlType": "WebGLTexture",
          "nullable": false
        }
      ]
    },
    {
      "id": 12,
      "name": "blendColor",
      "args": [
        {
          "name": "red",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "green",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "blue",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "alpha",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        }
      ]
    },
    {
      "id": 13,
      "name": "blendEquation",
      "args": [
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 14,
      "name": "blendEquationSeparate",
      "args": [
        {
          "name": "modeRGB",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "modeAlpha",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 15,
      "name": "blendFunc",
      "args": [
        {
          "name": "sfactor",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "dfactor",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 16,
      "name": "blendFuncSeparate",
      "args": [
        {
          "name": "srcRGB",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "dstRGB",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "srcAlpha",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "dstAlpha",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 17,
      "name": "bufferData",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "size",
          "packType": "",
          "idlType": "GLsizeiptr",
          "nullable": false
        },
        {
          "name": "usage",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 18,
      "name": "bufferData",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        },
        {
          "name": "usage",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 19,
      "name": "bufferData",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBuffer",
          "nullable": false
        },
        {
          "name": "usage",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 20,
      "name": "bufferSubData",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "offset",
          "packType": "int",
          "idlType": "GLintptr",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 21,
      "name": "bufferSubData",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "offset",
          "packType": "int",
          "idlType": "GLintptr",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 22,
      "name": "checkFramebufferStatus",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 23,
      "name": "clear",
      "drawCall": true,
      "args": [
        {
          "name": "mask",
          "packType": "int",
          "idlType": "GLbitfield",
          "nullable": true
        }
      ]
    },
    {
      "id": 24,
      "name": "clearColor",
      "args": [
        {
          "name": "red",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "green",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "blue",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "alpha",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        }
      ]
    },
    {
      "id": 25,
      "name": "clearDepth",
      "args": [
        {
          "name": "depth",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        }
      ]
    },
    {
      "id": 26,
      "name": "clearStencil",
      "args": [
        {
          "name": "s",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 27,
      "name": "colorMask",
      "args": [
        {
          "name": "red",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "green",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "blue",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "alpha",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        }
      ]
    },
    {
      "id": 28,
      "name": "compileShader",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 29,
      "name": "compressedTexImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "border",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 30,
      "name": "compressedTexSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "data",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 31,
      "name": "copyTexImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "border",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 32,
      "name": "copyTexSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        }
      ]
    },
    {
      "id": 33,
      "name": "createBuffer",
      "args": []
    },
    {
      "id": 34,
      "name": "createFramebuffer",
      "args": []
    },
    {
      "id": 35,
      "name": "createProgram",
      "args": []
    },
    {
      "id": 36,
      "name": "createRenderbuffer",
      "args": []
    },
    {
      "id": 37,
      "name": "createShader",
      "args": [
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 38,
      "name": "createTexture",
      "args": []
    },
    {
      "id": 39,
      "name": "cullFace",
      "args": [
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 40,
      "name": "deleteBuffer",
      "args": [
        {
          "name": "buffer",
          "packType": "",
          "idlType": "WebGLBuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 41,
      "name": "deleteFramebuffer",
      "args": [
        {
          "name": "framebuffer",
          "packType": "",
          "idlType": "WebGLFramebuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 42,
      "name": "deleteProgram",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 43,
      "name": "deleteRenderbuffer",
      "args": [
        {
          "name": "renderbuffer",
          "packType": "",
          "idlType": "WebGLRenderbuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 44,
      "name": "deleteShader",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 45,
      "name": "deleteTexture",
      "args": [
        {
          "name": "texture",
          "packType": "",
          "idlType": "WebGLTexture",
          "nullable": false
        }
      ]
    },
    {
      "id": 46,
      "name": "depthFunc",
      "args": [
        {
          "name": "func",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 47,
      "name": "depthMask",
      "args": [
        {
          "name": "flag",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        }
      ]
    },
    {
      "id": 48,
      "name": "depthRange",
      "args": [
        {
          "name": "zNear",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "zFar",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        }
      ]
    },
    {
      "id": 49,
      "name": "detachShader",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 50,
      "name": "disable",
      "args": [
        {
          "name": "cap",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 51,
      "name": "disableVertexAttribArray",
      "args": [
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 52,
      "name": "drawArrays",
      "drawCall": true,
      "args": [
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "first",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "count",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        }
      ]
    },
    {
      "id": 53,
      "name": "drawElements",
      "drawCall": true,
      "args": [
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "count",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "offset",
          "packType": "int",
          "idlType": "GLintptr",
          "nullable": true
        }
      ]
    },
    {
      "id": 54,
      "name": "enable",
      "args": [
        {
          "name": "cap",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 55,
      "name": "enableVertexAttribArray",
      "args": [
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 56,
      "name": "finish",
      "args": []
    },
    {
      "id": 57,
      "name": "flush",
      "args": []
    },
    {
      "id": 58,
      "name": "framebufferRenderbuffer",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "attachment",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "renderbuffertarget",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "renderbuffer",
          "packType": "",
          "idlType": "WebGLRenderbuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 59,
      "name": "framebufferTexture2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "attachment",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "textarget",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "texture",
          "packType": "",
          "idlType": "WebGLTexture",
          "nullable": false
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 60,
      "name": "frontFace",
      "args": [
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 61,
      "name": "generateMipmap",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 62,
      "name": "getActiveAttrib",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 63,
      "name": "getActiveUniform",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 64,
      "name": "getAttachedShaders",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 65,
      "name": "getAttribLocation",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "name",
          "packType": "string",
          "idlType": "DOMString",
          "nullable": true
        }
      ]
    },
    {
      "id": 66,
      "name": "getBufferParameter",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 67,
      "name": "getParameter",
      "args": [
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 68,
      "name": "getError",
      "args": []
    },
    {
      "id": 69,
      "name": "getFramebufferAttachmentParameter",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "attachment",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 70,
      "name": "getProgramParameter",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 71,
      "name": "getProgramInfoLog",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 72,
      "name": "getRenderbufferParameter",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 73,
      "name": "getShaderParameter",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 74,
      "name": "getShaderPrecisionFormat",
      "args": [
        {
          "name": "shadertype",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "precisiontype",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 75,
      "name": "getShaderInfoLog",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 76,
      "name": "getShaderSource",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 77,
      "name": "getTexParameter",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 78,
      "name": "getUniform",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        }
      ]
    },
    {
      "id": 79,
      "name": "getUniformLocation",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        },
        {
          "name": "name",
          "packType": "string",
          "idlType": "DOMString",
          "nullable": true
        }
      ]
    },
    {
      "id": 80,
      "name": "getVertexAttrib",
      "args": [
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 81,
      "name": "getVertexAttribOffset",
      "args": [
        {
          "name": "index",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 82,
      "name": "hint",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "mode",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 83,
      "name": "isBuffer",
      "args": [
        {
          "name": "buffer",
          "packType": "",
          "idlType": "WebGLBuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 84,
      "name": "isEnabled",
      "args": [
        {
          "name": "cap",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 85,
      "name": "isFramebuffer",
      "args": [
        {
          "name": "framebuffer",
          "packType": "",
          "idlType": "WebGLFramebuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 86,
      "name": "isProgram",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 87,
      "name": "isRenderbuffer",
      "args": [
        {
          "name": "renderbuffer",
          "packType": "",
          "idlType": "WebGLRenderbuffer",
          "nullable": false
        }
      ]
    },
    {
      "id": 88,
      "name": "isShader",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        }
      ]
    },
    {
      "id": 89,
      "name": "isTexture",
      "args": [
        {
          "name": "texture",
          "packType": "",
          "idlType": "WebGLTexture",
          "nullable": false
        }
      ]
    },
    {
      "id": 90,
      "name": "lineWidth",
      "args": [
        {
          "name": "width",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 91,
      "name": "linkProgram",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 92,
      "name": "pixelStorei",
      "args": [
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "param",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 93,
      "name": "polygonOffset",
      "args": [
        {
          "name": "factor",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "units",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 94,
      "name": "readPixels",
      "args": [
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pixels",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 95,
      "name": "renderbufferStorage",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        }
      ]
    },
    {
      "id": 96,
      "name": "sampleCoverage",
      "args": [
        {
          "name": "value",
          "packType": "float",
          "idlType": "GLclampf",
          "nullable": true
        },
        {
          "name": "invert",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        }
      ]
    },
    {
      "id": 97,
      "name": "scissor",
      "args": [
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        }
      ]
    },
    {
      "id": 98,
      "name": "shaderSource",
      "args": [
        {
          "name": "shader",
          "packType": "",
          "idlType": "WebGLShader",
          "nullable": false
        },
        {
          "name": "source",
          "packType": "string",
          "idlType": "DOMString",
          "nullable": true
        }
      ]
    },
    {
      "id": 99,
      "name": "stencilFunc",
      "args": [
        {
          "name": "func",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "ref",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "mask",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 100,
      "name": "stencilFuncSeparate",
      "args": [
        {
          "name": "face",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "func",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "ref",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "mask",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 101,
      "name": "stencilMask",
      "args": [
        {
          "name": "mask",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 102,
      "name": "stencilMaskSeparate",
      "args": [
        {
          "name": "face",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "mask",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        }
      ]
    },
    {
      "id": 103,
      "name": "stencilOp",
      "args": [
        {
          "name": "fail",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "zfail",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "zpass",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 104,
      "name": "stencilOpSeparate",
      "args": [
        {
          "name": "face",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "fail",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "zfail",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "zpass",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        }
      ]
    },
    {
      "id": 105,
      "name": "texImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "border",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pixels",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 106,
      "name": "texImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pixels",
          "packType": "",
          "idlType": "ImageData",
          "nullable": false
        }
      ]
    },
    {
      "id": 107,
      "name": "texImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "image",
          "packType": "",
          "idlType": "HTMLImageElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 108,
      "name": "texImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "canvas",
          "packType": "",
          "idlType": "HTMLCanvasElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 109,
      "name": "texImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "internalformat",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "video",
          "packType": "",
          "idlType": "HTMLVideoElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 110,
      "name": "texParameterf",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "param",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 111,
      "name": "texParameteri",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pname",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "param",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 112,
      "name": "texSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pixels",
          "packType": "",
          "idlType": "ArrayBufferView",
          "nullable": false
        }
      ]
    },
    {
      "id": 113,
      "name": "texSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "pixels",
          "packType": "",
          "idlType": "ImageData",
          "nullable": false
        }
      ]
    },
    {
      "id": 114,
      "name": "texSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "image",
          "packType": "",
          "idlType": "HTMLImageElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 115,
      "name": "texSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "canvas",
          "packType": "",
          "idlType": "HTMLCanvasElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 116,
      "name": "texSubImage2D",
      "args": [
        {
          "name": "target",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "level",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "xoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "yoffset",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "format",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "video",
          "packType": "",
          "idlType": "HTMLVideoElement",
          "nullable": false
        }
      ]
    },
    {
      "id": 117,
      "name": "uniform1f",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 118,
      "name": "uniform1fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 119,
      "name": "uniform1fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 120,
      "name": "uniform1i",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 121,
      "name": "uniform1iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "int[]",
          "idlType": "Int32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 122,
      "name": "uniform1iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "",
          "idlType": [
            "long"
          ],
          "nullable": false
        }
      ]
    },
    {
      "id": 123,
      "name": "uniform2f",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 124,
      "name": "uniform2fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 125,
      "name": "uniform2fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 126,
      "name": "uniform2i",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 127,
      "name": "uniform2iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "int[]",
          "idlType": "Int32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 128,
      "name": "uniform2iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "",
          "idlType": [
            "long"
          ],
          "nullable": false
        }
      ]
    },
    {
      "id": 129,
      "name": "uniform3f",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 130,
      "name": "uniform3fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 131,
      "name": "uniform3fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 132,
      "name": "uniform3i",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 133,
      "name": "uniform3iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "int[]",
          "idlType": "Int32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 134,
      "name": "uniform3iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "",
          "idlType": [
            "long"
          ],
          "nullable": false
        }
      ]
    },
    {
      "id": 135,
      "name": "uniform4f",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "w",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 136,
      "name": "uniform4fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 137,
      "name": "uniform4fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 138,
      "name": "uniform4i",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "w",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        }
      ]
    },
    {
      "id": 139,
      "name": "uniform4iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "int[]",
          "idlType": "Int32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 140,
      "name": "uniform4iv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "v",
          "packType": "",
          "idlType": [
            "long"
          ],
          "nullable": false
        }
      ]
    },
    {
      "id": 141,
      "name": "uniformMatrix2fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 142,
      "name": "uniformMatrix2fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 143,
      "name": "uniformMatrix3fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 144,
      "name": "uniformMatrix3fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 145,
      "name": "uniformMatrix4fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 146,
      "name": "uniformMatrix4fv",
      "args": [
        {
          "name": "location",
          "packType": "",
          "idlType": "WebGLUniformLocation",
          "nullable": false
        },
        {
          "name": "transpose",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "value",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 147,
      "name": "useProgram",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 148,
      "name": "validateProgram",
      "args": [
        {
          "name": "program",
          "packType": "",
          "idlType": "WebGLProgram",
          "nullable": false
        }
      ]
    },
    {
      "id": 149,
      "name": "vertexAttrib1f",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 150,
      "name": "vertexAttrib1fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 151,
      "name": "vertexAttrib1fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 152,
      "name": "vertexAttrib2f",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 153,
      "name": "vertexAttrib2fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 154,
      "name": "vertexAttrib2fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 155,
      "name": "vertexAttrib3f",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 156,
      "name": "vertexAttrib3fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 157,
      "name": "vertexAttrib3fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 158,
      "name": "vertexAttrib4f",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "x",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "z",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        },
        {
          "name": "w",
          "packType": "float",
          "idlType": "GLfloat",
          "nullable": true
        }
      ]
    },
    {
      "id": 159,
      "name": "vertexAttrib4fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float[]",
          "idlType": "Float32Array",
          "nullable": true
        }
      ]
    },
    {
      "id": 160,
      "name": "vertexAttrib4fv",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "values",
          "packType": "float",
          "idlType": [
            "GLfloat"
          ],
          "nullable": true
        }
      ]
    },
    {
      "id": 161,
      "name": "vertexAttribPointer",
      "args": [
        {
          "name": "indx",
          "packType": "uint",
          "idlType": "GLuint",
          "nullable": true
        },
        {
          "name": "size",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "type",
          "packType": "int",
          "idlType": "GLenum",
          "nullable": true
        },
        {
          "name": "normalized",
          "packType": "bool",
          "idlType": "GLboolean",
          "nullable": true
        },
        {
          "name": "stride",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "offset",
          "packType": "int",
          "idlType": "GLintptr",
          "nullable": true
        }
      ]
    },
    {
      "id": 162,
      "name": "viewport",
      "args": [
        {
          "name": "x",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "y",
          "packType": "int",
          "idlType": "GLint",
          "nullable": true
        },
        {
          "name": "width",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        },
        {
          "name": "height",
          "packType": "int",
          "idlType": "GLsizei",
          "nullable": true
        }
      ]
    }
  ]
}
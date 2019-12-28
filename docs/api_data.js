define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_solidest_Desktop_ETestTools_doc_main_js",
    "groupTitle": "C__Users_solidest_Desktop_ETestTools_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_solidest_Desktop_ETestTools_docs_main_js",
    "groupTitle": "C__Users_solidest_Desktop_ETestTools_docs_main_js",
    "name": ""
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/projects/",
    "title": "项目列表",
    "description": "<p>获取全部历史记录中的项目信息列表</p>",
    "name": "a0_projects_list",
    "group": "a_sort",
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>项目id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"name\": \"项目0\",\n            \"tag\": \"项目0的说明\"\n        },\n        {\n            \"id\": \"75lqkNdL1\",\n            \"name\": \"项目1\",\n            \"tag\": \"项目1的说明\"\n        },\n        {\n            \"id\": \"EqM7_0saa\",\n            \"name\": \"项目2\",\n            \"tag\": \"项目2的说明\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/sort.js",
    "groupTitle": "分类信息"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/channels?runtime=:id",
    "title": "通道列表",
    "description": "<p>获取指定用例执行时的全部通道列表信息</p>",
    "name": "a1_channel_list",
    "group": "a_sort",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/channels?runtime=75lqkNdL1",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>通道id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"25Wh_rD3\",\n            \"name\": \"通道1\",\n            \"tag\": \"通道1的说明\"\n        },\n        {\n            \"id\": \"kXhbfRAWg\",\n            \"name\": \"通道2\",\n            \"tag\": \"通道2的说明\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/sort.js",
    "groupTitle": "分类信息"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/protocols?runtime=:id",
    "title": "协议列表",
    "description": "<p>获取指定用例执行时的全部协议列表信息</p>",
    "name": "a1_protcol_list",
    "group": "a_sort",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/protocols?runtime=75lqkNdL1",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>协议id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"25Wh_rD3\",\n            \"name\": \"协议1\",\n            \"tag\": \"协议1的说明\"\n        },\n        {\n            \"id\": \"kXhbfRAWg\",\n            \"name\": \"协议2\",\n            \"tag\": \"协议2的说明\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/sort.js",
    "groupTitle": "分类信息"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/testcases?project=id",
    "title": "用例列表",
    "description": "<p>获取指定项目下的全部测试用例列表</p>",
    "name": "a1_testcase_list",
    "group": "a_sort",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】项目id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/testcases?project=75lqkNdL1",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>测试用例id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>测试用例名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"25Wh_rD3\",\n            \"name\": \"用例0\",\n            \"tag\": \"用例0的说明\"\n        },\n        {\n            \"id\": \"kXhbfRAWg\",\n            \"name\": \"用例1\",\n            \"tag\": \"用例1的说明\"\n        },\n        {\n            \"id\": \"kl72v1f_j\",\n            \"name\": \"用例2\",\n            \"tag\": \"用例2的说明\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/sort.js",
    "groupTitle": "分类信息"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/runtimes?testcase=id",
    "title": "执行列表",
    "description": "<p>获取指定测试用例的全部执行列表</p>",
    "name": "a2_runtimes_list",
    "group": "a_sort",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/runtimes?testcase=75lqkNdL1",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>id标识</p>"
          },
          {
            "group": "Success",
            "type": "DateTime",
            "optional": false,
            "field": "data.begintime",
            "description": "<p>UTC开始时间</p>"
          },
          {
            "group": "Success",
            "type": "DateTime",
            "optional": false,
            "field": "data.endtime",
            "description": "<p>UTC结束时间</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"9_KVvHc7\",\n            \"begintime\": 949366800000,\n            \"endtime\": 949366860000,\n            \"tag\": \"第0次执行的说明\"\n        },\n        {\n            \"id\": \"I2xXzwsNN\",\n            \"begintime\": 949366860000,\n            \"endtime\": 949366920000,\n            \"tag\": \"第1次执行的说明\"\n        },\n        {\n            \"id\": \"qzss1GNIj\",\n            \"begintime\": 949366920000,\n            \"endtime\": 949366980000,\n            \"tag\": \"第2次执行的说明\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/sort.js",
    "groupTitle": "分类信息"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/asserts?runtime=:id",
    "title": "断言记录",
    "description": "<p>获取指定用例执行产生的全部断言记录</p>",
    "name": "record_asserts_list",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/asserts?runtime=75lqkNdL1",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "Boolean",
            "optional": false,
            "field": "data.result",
            "description": "<p>断言是否执行成功</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Object",
            "optional": false,
            "field": "data.info",
            "description": "<p>断言失败时的提示信息</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920001,\n            \"result\": false,\n            \"info\": {\n                    \"输入参数\": {\n                        \"a\": 12,\n                        \"b\": 14\n                    },\n                    \"预期结果\": {\n                        \"c\": 100\n                        ....\n                    },\n                    ....\n            }\n        },\n        {\n            \"id\": \"75lqkNdL1\",\n            \"timestamp\": 949366920002,\n            \"result\": true,\n            \"info\": null\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/records?runtime=:id&from=:tm&limit=:count",
    "title": "全类型记录",
    "description": "<p>获取指定用例执行产生的记录列表，返回从时间tm开始的count条记录，类型包含：输入、输出、断言</p>",
    "name": "record_list",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tm",
            "description": "<p>【URL路径参数】起始时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>【URL路径参数】获取的记录条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/records?runtime=75lqkNdL1&from=949366980000&limit=1000",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>记录类型</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Object",
            "optional": true,
            "field": "data.raw",
            "description": "<p>原始数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.protocol",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.channel",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920000,\n            \"type\": \"read\",\n            \"protocol\": \"协议1\",\n            \"channel\": \"通道1\"\n            \"raw\": {\n                \"seg1\": 100,\n                \"seg2\": 200,\n                \"seg3\": [\n                    \"aaaa\",\n                    \"bbbb\"\n                ]\n            }\n        },\n        {\n            \"id\": \"75lqkNdL1\",\n            \"type\": \"assert\",\n            \"raw\": {\n                \"result\": true,\n                \"info\": {\n                    \"输入参数\": {\n                        \"a\": 12,\n                        \"b\": 14\n                    },\n                    \"预期结果\": {\n                        \"c\": 100\n                        ....\n                    },\n                    ....\n                }\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/ioprotocol/:prot?runtime=:id&from=:tm&limit=:count",
    "title": "协议IO记录",
    "description": "<p>获取指定用例执行产生的prot协议的输入输出记录，从时间tm开始的count条记录</p>",
    "name": "record_protocol_list",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "prot",
            "description": "<p>【URL路径参数】协议id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tm",
            "description": "<p>【URL路径参数】起始时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>【URL路径参数】获取的记录条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:8000/api/recorded/ioprotocol/89afj3?runtime=75lqkNdL1&from=949366980000&limit=1000",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>记录类型</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.channel",
            "description": "<p>通道id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Object",
            "optional": false,
            "field": "data.raw",
            "description": "<p>原始数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920000,\n            \"type\": \"read\",\n            \"protocol\": \"协议1\",\n            \"channel\": \"通道1\"\n            \"raw\": {\n                \"seg1\": 100,\n                \"seg2\": 200,\n                \"seg3\": [\n                    \"aaaa\",\n                    \"bbbb\"\n                ]\n            }\n        },\n        {\n            \"id\": \"75lqkNdL1\",\n            \"timestamp\": 949366920001,\n            \"type\": \"write\",\n            \"protocol\": \"协议2\",\n            \"channel\": \"通道1\"\n            \"raw\": {\n                \"seg1\": 300,\n                \"seg2\": 600,\n                \"seg3\": [\n                    \"bbbb\",\n                    \"cccc\"\n                ]\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  },
  {
    "version": "0.1.0",
    "type": "put",
    "url": "/query/iochannel?runtime=:id",
    "title": "查询通道IO",
    "description": "<p>查询指定通道列表上的IO记录</p>",
    "name": "record_query_iochannel",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "channels",
            "description": "<p>通道id列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "begintime",
            "description": "<p>开始时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>返回的记录条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"channels\":[\n        \"channel1_id\",\n        \"channel2_id\"\n    ],\n    \"begintime\":\"949366920002\",\n    \"limit\":\"1000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>记录类型 read|write</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Object",
            "optional": false,
            "field": "data.raw",
            "description": "<p>原始数据 16进制buffer</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920000,\n            \"channel\": \"通道1\"\n            \"type\": \"read\",\n            \"raw\": \"H03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAA\"\n        },\n        {\n            \"id\": \"Ab87SJf\",\n            \"timestamp\": 949366920001,\n            \"channel\": \"通道2\"\n            \"type\": \"write\",\n            \"raw\": \"A03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAJ\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  },
  {
    "version": "0.1.0",
    "type": "put",
    "url": "/query/ioprotocol?runtime=:id",
    "title": "查询协议IO",
    "description": "<p>按协议查询条件获取指定用例执行产生的记录</p>",
    "name": "record_query_ioprotocol",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>协议id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "begintime",
            "description": "<p>开始时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>返回的记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>类型 write|read</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter",
            "description": "<p>协议字段条件语句</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"protocol\":\"prot_idxxxx\",\n    \"begintime\":\"949366920002\",\n    \"type\":\"write\",\n    \"limit\":\"1000\",\n    \"filter\":\"seg1>100 and seg2.b==true\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.channel",
            "description": "<p>通道id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>记录类型</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Object",
            "optional": false,
            "field": "data.raw",
            "description": "<p>原始数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920000,\n            \"type\": \"read\",\n            \"protocol\": \"协议1\",\n            \"channel\": \"通道1\"\n            \"raw\": {\n                \"seg1\": 100,\n                \"seg2\": 200,\n                \"seg3\": [\n                    \"aaaa\",\n                    \"bbbb\"\n                ]\n            }\n        },\n        {\n            \"id\": \"75lqkNdL1\",\n            \"timestamp\": 949366920001,\n            \"type\": \"write\",\n            \"protocol\": \"协议2\",\n            \"channel\": \"通道1\"\n            \"raw\": {\n                \"seg1\": 300,\n                \"seg2\": 600,\n                \"seg3\": [\n                    \"bbbb\",\n                    \"cccc\"\n                ]\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  },
  {
    "version": "0.1.0",
    "type": "put",
    "url": "/query/var?runtime=:id",
    "title": "查询变量",
    "description": "<p>查询指定通道列表上的IO记录</p>",
    "name": "record_query_vars",
    "group": "b_record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>【URL路径参数】用例执行id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "var",
            "description": "<p>变量id列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "begintime",
            "description": "<p>开始时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>返回的记录条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"var\": \"约束变量1\",\n    \"begintime\":\"949366920002\",\n    \"limit\":\"1000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成功返回的数据</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>UTC时间</p>"
          },
          {
            "group": "Success",
            "type": "Number",
            "optional": false,
            "field": "data.value",
            "description": "<p>变量值</p>"
          },
          {
            "group": "Success",
            "type": "String",
            "optional": true,
            "field": "data.tag",
            "description": "<p>说明信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"TptEJMYA\",\n            \"timestamp\": 949366920000,\n            \"value\": 10.98\n        },\n        {\n            \"id\": \"Ab87SJf\",\n            \"timestamp\": 949366920001,\n            \"value\": 12.88\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/record.js",
    "groupTitle": "数据记录"
  }
] });

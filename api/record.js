
const shortid = require('shortid');

/**
 * @apiDefine b_record 数据记录
*/

/**
@apiVersion 0.1.0
@api {get} /records?runtime=:id&from=:tm&limit=:count  全类型记录
@apiDescription 获取指定用例执行产生的记录列表，返回从时间tm开始的count条记录，类型包含：输入、输出、断言
@apiName record_list
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {Number} tm 【URL路径参数】起始时间戳
@apiParam {Number} count 【URL路径参数】获取的记录条数，负数表示最后count条记录

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.type 记录类型
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} [data.raw] 原始数据
@apiSuccess (Success) {String} [data.protocol] 协议名称
@apiSuccess (Success) {String} [data.channel] 通道名称
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/records?runtime=75lqkNdL1&from=949366980000&limit=1000

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "type": "read",
                    "protocol": "协议1",
                    "channel": "通道1"
                    "raw": {
                        "seg1": 100,
                        "seg2": 200,
                        "seg3": [
                            "aaaa",
                            "bbbb"
                        ]
                    }
                },
                {
                    "id": "75lqkNdL1",
                    "type": "assert",
                    "raw": {
                        "result": true,
                        "info": {
                            "输入参数": {
                                "a": 12,
                                "b": 14
                            },
                            "预期结果": {
                                "c": 100
                                ....
                            },
                            ....
                        }
                    }
                },
                ...
            ]
        }
 */

//  function record_list() {
//      let res = {code:0, msg:'操作成功', data:[]};
//      for(let i=0; i<3; i++) {
//         res.data.push({
//             id: shortid.generate(),
//             name: '项目' + i,
//             tag: '项目' + i + '的说明' 
//         })
//      }
//      return res;
//  }

// let res = projects_list();
// console.log(JSON.stringify(res, null, 4));


/**
@apiVersion 0.1.0
@api {get} /ioprotocol/:prot?runtime=:id&from=:tm&limit=:count  协议IO记录
@apiDescription 获取指定用例执行产生的prot协议的输入输出记录，从时间tm开始的count条记录
@apiName record_protocol_list
@apiGroup b_record

@apiParam {string} prot 【URL路径参数】协议id
@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {Number} tm 【URL路径参数】起始时间戳
@apiParam {Number} count 【URL路径参数】获取的记录条数，负数表示最后count条记录

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.type 记录类型
@apiSuccess (Success) {String} data.channel 通道id
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} data.raw 原始数据
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/ioprotocol/89afj3?runtime=75lqkNdL1&from=949366980000&limit=1000

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "type": "read",
                    "protocol": "协议1",
                    "channel": "通道1"
                    "raw": {
                        "seg1": 100,
                        "seg2": 200,
                        "seg3": [
                            "aaaa",
                            "bbbb"
                        ]
                    }
                },
                {
                    "id": "75lqkNdL1",
                    "timestamp": 949366920001,
                    "type": "write",
                    "protocol": "协议2",
                    "channel": "通道1"
                    "raw": {
                        "seg1": 300,
                        "seg2": 600,
                        "seg3": [
                            "bbbb",
                            "cccc"
                        ]
                    }
                },
                ...
            ]
        }
 */

//  function record_list() {
//      let res = {code:0, msg:'操作成功', data:[]};
//      for(let i=0; i<3; i++) {
//         res.data.push({
//             id: shortid.generate(),
//             name: '项目' + i,
//             tag: '项目' + i + '的说明' 
//         })
//      }
//      return res;
//  }

// let res = projects_list();
// console.log(JSON.stringify(res, null, 4));


/**
@apiVersion 0.1.0
@api {get} /asserts?runtime=:id&result=:bv  断言记录
@apiDescription 获取指定用例执行产生的全部断言记录
@apiName record_asserts_list
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {string} [bv] 【URL路径参数】断言执行结果,fasle|true,未提供此参数时获取全部断言

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {Boolean} data.result 断言是否执行成功
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} data.info 断言失败时的提示信息
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/asserts?runtime=75lqkNdL1&result=false

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920001,
                    "result": false,
                    "info": {
                            "输入参数": {
                                "a": 12,
                                "b": 14
                            },
                            "预期结果": {
                                "c": 100
                                ....
                            },
                            ....
                    }
                },
                {
                    "id": "75lqkNdL1",
                    "timestamp": 949366920002,
                    "result": true,
                    "info": null
                },
                ...
            ]
        }
 */



/**
@apiVersion 0.1.0
@api {put} /query/ioprotocol?runtime=:id 查询协议IO
@apiDescription 按协议查询条件获取指定用例执行产生的记录
@apiName record_query_ioprotocol
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {String} protocol 协议id
@apiParam {Number} begintime 开始时间戳
@apiParam {Number} limit 返回的记录条数，负数表示最后limit条记录
@apiParam {String} [type] 类型 write|read
@apiParam {String} [filter] 协议字段条件语句
@apiParamExample {json} Request-Example:
    {
        "protocol":"prot_idxxxx",
        "begintime":"949366920002",
        "type":"write",
        "limit":"1000",
        "filter":"seg1>100 and seg2.b==true",
    }

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.channel 通道id
@apiSuccess (Success) {String} data.type 记录类型
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} data.raw 原始数据
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "type": "read",
                    "protocol": "协议1",
                    "channel": "通道1"
                    "raw": {
                        "seg1": 100,
                        "seg2": 200,
                        "seg3": [
                            "aaaa",
                            "bbbb"
                        ]
                    }
                },
                {
                    "id": "75lqkNdL1",
                    "timestamp": 949366920001,
                    "type": "write",
                    "protocol": "协议2",
                    "channel": "通道1"
                    "raw": {
                        "seg1": 300,
                        "seg2": 600,
                        "seg3": [
                            "bbbb",
                            "cccc"
                        ]
                    }
                },
                ...
            ]
        }
 */

 

/**
@apiVersion 0.1.0
@api {put} /query/iochannel?runtime=:id 查询通道IO
@apiDescription 查询指定通道列表上的IO记录
@apiName record_query_iochannel
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {String[]} channels 通道id列表
@apiParam {Number} begintime 开始时间戳
@apiParam {Number} limit 返回的记录条数，负数表示最后limit条记录

@apiParamExample {json} Request-Example:
    {
        "channels":[
            "channel1_id",
            "channel2_id"
        ],
        "begintime":"949366920002",
        "limit":"1000"
    }

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.type 记录类型 read|write
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} data.raw 原始数据 16进制buffer
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "channel": "通道1"
                    "type": "read",
                    "raw": "H03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAA"
                },
                {
                    "id": "Ab87SJf",
                    "timestamp": 949366920001,
                    "channel": "通道2"
                    "type": "write",
                    "raw": "A03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAAH03746AB383CFAJ"
                },
                ...
            ]
        }
 */

 

/**
@apiVersion 0.1.0
@api {put} /query/var?runtime=:id 查询变量
@apiDescription 查询指定通道列表上的IO记录
@apiName record_query_vars
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id
@apiParam {String} var 变量id列表
@apiParam {Number} begintime 开始时间戳
@apiParam {Number} limit 返回的记录条数，负数表示最后limit条记录

@apiParamExample {json} Request-Example:
    {
        "var": "约束变量1",
        "begintime":"949366920002",
        "limit":"1000"
    }

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Number} data.value 变量值
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "value": 10.98
                },
                {
                    "id": "Ab87SJf",
                    "timestamp": 949366920001,
                    "value": 12.88
                },
                ...
            ]
        }
 */
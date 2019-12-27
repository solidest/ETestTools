
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
@apiParam {Number} count 【URL路径参数】获取的记录条数

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
                        "info": "断言失败时的信息"
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
@apiParam {Number} count 【URL路径参数】获取的记录条数

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {String} data.type 记录类型
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {Object} data.raw 原始数据
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/ioprotocolio/89afj3?runtime=75lqkNdL1&from=949366980000&limit=1000

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920000,
                    "type": "read",
                    "protocol": "协议1",
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
@api {get} /asserts?runtime=:id  断言记录
@apiDescription 获取指定用例执行产生的全部断言记录
@apiName record_asserts_list
@apiGroup b_record

@apiParam {string} id 【URL路径参数】用例执行id

@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 记录id
@apiSuccess (Success) {Boolean} data.result 断言是否执行成功
@apiSuccess (Success) {String} data.timestamp UTC时间
@apiSuccess (Success) {String} data.info 用户提供的提示信息
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/asserts?runtime=75lqkNdL1

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "data": [
                {
                    "id": "TptEJMYA",
                    "timestamp": 949366920001,
                    "result": false,
                    "info": "断言成功"
                },
                {
                    "id": "75lqkNdL1",
                    "timestamp": 949366920002,
                    "result": true,
                    "info": "断言失败时的信息"
                },
                ...
            ]
        }
 */



/**
@apiVersion 0.1.0
@api {put} /query 条件查询
@apiDescription 按查询条件获取指定用例执行产生的记录
@apiName record_query_list
@apiGroup b_record

@apiParam {String} protocol 协议id
@apiParam {Number} begintime 开始时间戳
@apiParam {Number} limit 返回的记录条数
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
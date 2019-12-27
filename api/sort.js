
const shortid = require('shortid');

/**
 * @apiDefine a_sort 分类信息
*/

/**
@apiVersion 0.1.0
@api {get} /projects/  项目列表
@apiDescription 获取全部历史记录中的项目信息列表
@apiName a0_projects_list
@apiGroup a_sort

@apiSuccess (Success) {Number} code 状态代码; 0:成功
@apiSuccess (Success) {String} msg  状态信息
@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 项目id
@apiSuccess (Success) {String} data.name 项目名称
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "code": 0,
            "msg": "操作成功",
            "data": [
                {
                    "id": "TptEJMYA",
                    "name": "项目0",
                    "tag": "项目0的说明"
                },
                {
                    "id": "75lqkNdL1",
                    "name": "项目1",
                    "tag": "项目1的说明"
                },
                {
                    "id": "EqM7_0saa",
                    "name": "项目2",
                    "tag": "项目2的说明"
                }
            ]
        }
 */

 function projects_list() {
     let res = {code:0, msg:'操作成功', data:[]};
     for(let i=0; i<3; i++) {
        res.data.push({
            id: shortid.generate(),
            name: '项目' + i,
            tag: '项目' + i + '的说明' 
        })
     }
     return res;
 }

// let res = projects_list();
// console.log(JSON.stringify(res, null, 4));

/**
@apiVersion 0.1.0
@api {get} /testcases?project=id 用例列表
@apiDescription 获取指定项目下的全部测试用例列表
@apiName a1_testcase_list
@apiGroup a_sort

@apiParam {string} id 【URL路径参数】项目id

@apiSuccess (Success) {Number} code 状态代码; 0:成功
@apiSuccess (Success) {String} msg  状态信息
@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 测试用例id
@apiSuccess (Success) {String} data.name 测试用例名称
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/testcases?project=75lqkNdL1

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "code": 0,
            "msg": "操作成功",
            "data": [
                {
                    "id": "25Wh_rD3",
                    "name": "用例0",
                    "tag": "用例0的说明"
                },
                {
                    "id": "kXhbfRAWg",
                    "name": "用例1",
                    "tag": "用例1的说明"
                },
                {
                    "id": "kl72v1f_j",
                    "name": "用例2",
                    "tag": "用例2的说明"
                }
            ]
        }

 */

function testcase_list() {
    let res = {code:0, msg:'操作成功', data:[]};
    for(let i=0; i<3; i++) {
       res.data.push({
           id: shortid.generate(),
           name: '用例' + i,
           tag: '用例' + i + '的说明' 
       })
    }
    return res;
}
// let res = testcase_list();
// console.log(JSON.stringify(res, null, 4));


/**
@apiVersion 0.1.0
@api {get} /runtimes?testcase=id 执行列表
@apiDescription 获取指定测试用例的全部执行列表
@apiName a2_runtimes_list
@apiGroup a_sort

@apiParam {string} id 【URL路径参数】用例id

@apiSuccess (Success) {Number} code 状态代码; 0:成功
@apiSuccess (Success) {String} msg  状态信息
@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id id标识
@apiSuccess (Success) {DateTime} data.begintime UTC开始时间
@apiSuccess (Success) {DateTime} data.endtime UTC结束时间
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/runtimes?testcase=75lqkNdL1

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "code": 0,
            "msg": "操作成功",
            "data": [
                {
                    "id": "9_KVvHc7",
                    "begintime": 949366800000,
                    "endtime": 949366860000,
                    "tag": "第0次执行的说明"
                },
                {
                    "id": "I2xXzwsNN",
                    "begintime": 949366860000,
                    "endtime": 949366920000,
                    "tag": "第1次执行的说明"
                },
                {
                    "id": "qzss1GNIj",
                    "begintime": 949366920000,
                    "endtime": 949366980000,
                    "tag": "第2次执行的说明"
                }
            ]
        }

 */

function runtimes_list() {
    let res = {code:0, msg:'操作成功', data:[]};
    for(let i=0; i<3; i++) {
       res.data.push({
           id: shortid.generate(),
           begintime: Date.UTC(2000,1,1,1,i,0,0),
           endtime: Date.UTC(2000,1,1,1,i+1,0,0),
           tag: '第' + i + '次执行的说明' 
       })
    }
    return res;
}
let res = runtimes_list();
console.log(JSON.stringify(res, null, 4));


/**
@apiVersion 0.1.0
@api {get} /protocols?runtime=:id 协议列表
@apiDescription 获取指定用例执行时的全部协议列表信息
@apiName a1_protcol_list
@apiGroup a_sort

@apiParam {string} id 【URL路径参数】用例执行id

@apiSuccess (Success) {Number} code 状态代码; 0:成功
@apiSuccess (Success) {String} msg  状态信息
@apiSuccess (Success) {Object[]}  data 成功返回的数据
@apiSuccess (Success) {String} data.id 协议id
@apiSuccess (Success) {String} data.name 协议名称
@apiSuccess (Success) {String} [data.tag] 说明信息

@apiParamExample {url} Request-Example:
    http://localhost:8000/api/recorded/protocols?runtime=75lqkNdL1

@apiSuccessExample {json} Response-Success-Example:
        HTTP/1.1 200 OK
        {
            "code": 0,
            "msg": "操作成功",
            "data": [
                {
                    "id": "25Wh_rD3",
                    "name": "协议1",
                    "tag": "协议1的说明"
                },
                {
                    "id": "kXhbfRAWg",
                    "name": "协议2",
                    "tag": "协议2的说明"
                }
            ]
        }

 */
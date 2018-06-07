"use strict";

/**
 * 接口配置文档
 * 一个接口需要配置
 * name 接口的名字
 * type 接口的请求类型
 * url 接口的地址
 * response 接口的返回数据 为数组，每一个是接口可能返回的数据
 * position 指定接口返回的的数据，是response的索引
 */

let mockConfig = [
    {
    	"name": "login",
        "type": "post",
        "url": "/api/login",
        "response": [
        	{
            	status: 200,
            	data: {
	                username: 'qwer',
	                password: 'asdfg'
            	}
        	},
        	{
            	status: 300,
            	message: '请重试',
            	data: null
        	}
       	],
        "position": 0
    },
    {
    	"name": "login2",
        "type": "get",
        "url": "/api/desc",
        "response": [{
            status: 200,
            data: {
                username: 'qwer发发发ßß',
                password: 'asdfg'
            }
        }],
        "position": 0
    },
    {
        "name": "list",
        "type": "post",
        "url": "/api/list",
        "response": [
            // {
            //     status: 200,
            //     data: {
            //         type: article,
            //         rank: id,
            //         init: 0,
            //         num: 8
            //     }
            // },
            {
                status: 200,
                message: 'ok',
                data: [
                    { "id": "14", "uid": "10000", "view": "7", "title": "标题1标题1标题1标题1标题1","time": "2018-06-06 15:10:25"},
                    { "id": "13", "uid": "10000", "view": "10", "title": "标题2标题2标题2标题2标题2", "time": "2018-06-06 12:59:32"}, 
                    { "id": "12", "uid": "10000", "view": "9", "title": "标题3标题3标题3标题3标题3", "time": "2018-06-04 11:20:12"},
                    { "id": "11", "uid": "10000", "view": "13", "title": "标题4标题4标题4标题4标题4", "time": "2018-06-03 09:35:47"}, 
                    { "id": "10", "uid": "10000", "view": "5", "title": "标题5标题5标题5标题5标题5", "time": "2018-06-01 20:05:13"},
                    { "id": "9", "uid": "10000", "view": "10", "title": "标题6标题6标题6标题6标题6", "time": "2018-05-31 16:22:48"}
                ]
            }
        ],
        "position": 0
    }
];

exports.mockConfig = mockConfig;

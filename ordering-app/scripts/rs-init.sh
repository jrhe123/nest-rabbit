#!/bin/bash
# 等待 MongoDB 服务启动
sleep 5
# 初始化副本集
mongo --eval 'rs.initiate({
  _id: "dbrs",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})'

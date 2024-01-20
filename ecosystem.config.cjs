/** @format */

module.exports = {
  apps: [
    {
      name: "hall", // 进程名称
      port: "80", // 启动端口
      exec_mode: "cluster",
      instances: "max",
      script: ".output/server/index.mjs",
      autorestart: true, // 程序崩溃后自动重启
      watch: true,
    },
  ],
};


FROM node:18.18.2 as builder

#任意ip
ENV HOST 0.0.0.0
#容器内创建目录/nuxt3
RUN mkdir -p /nuxt3
WORKDIR /nuxt3
#复制当前的内容到容器内容部目录/nuxt3
ADD . /nuxt3  
RUN npm install
RUN npm run build

 

#暴露端口3000，默认端口
EXPOSE 3000
#start
ENTRYPOINT ["node","/nuxt3/.output/server/index.mjs"]

 
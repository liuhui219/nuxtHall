
FROM node:18.18.2 as builder

#4、任意ip
ENV HOST 0.0.0.0
#5、容器内创建目录/nuxt3
RUN mkdir -p /nuxt3
WORKDIR /nuxt3
#6、复制当前的内容到容器内容部目录/nuxt3
ADD . /nuxt3  
RUN npm install
RUN npm run build

#8、暴露端口3000，默认端口
EXPOSE 3000
#12、start
ENTRYPOINT ["node","/nuxt3/.output/server/index.mjs"]
 
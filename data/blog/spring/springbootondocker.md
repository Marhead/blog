---
title: 'Spring boot on Docker'
date: 2022-09-20 01:00:00 +0900
tags: ['SPRING', 'DOCKER']
draft: false
summary: 'Spring boot 서버 Docker로 배포하기 위한 나의 Dockerfile 설정법 정리'
---

```Docker
FROM openjdk:17-jdk as builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootjar

FROM openjdk:17-jdk
# application 결과물 -> build/libs/app.jar
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

# PROJECT-SERVER INITIATE
ENTRYPOINT ["java","-jar","/app.jar"]

# multi-stage build가 아닌 해결 법으로 ``gradlew build docker``가 있지만, 이럴 경우 git pull 하기가 복잡해짐
```
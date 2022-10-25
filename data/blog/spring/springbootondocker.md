---
title: 'Spring boot on Docker'
date: 2022-09-20 01:00:00 +0900
tags: ['SPRING', 'DOCKER']
draft: false
summary: 'Spring boot 서버 Docker로 배포하기 위한 나의 Dockerfile 설정법 정리'
image: 'OG-Spring.png'
---
스터디-동아리 팀에서 새로운 어플 개발을 진행하고 있다. 팀원 중 한명이 데브옵스를 전담하기로 하였고, 나는 앱 서버 개발을 담당하게 되었다. 팀원은 도커를 활용하여 서버 인프라를 구성할테니, 나에게 배포용 Dockerfile을 깔끔하게 만들어 달라고 했다.

처음 생각한 spring-boot를 구동하기 위한 도커는 간단했다. 
> 도커 이미지 빌드 전, spring-boot 서버를 ``.jar``로 먼저 빌드를 하고, 컨테이너 위 루트 디렉터리 ``app.jar``로 옮긴 뒤, ``ENTRYPOINT``를 사용하여 서버가 구동된다.

라고 생각했었지만, 도커 빌드에 대한 호기심 겸 팀원의 추가적인 부탁으로 Dockerfile 내부에서 ``.jar`` 업데이트 까지 진행한 뒤, 서버 구동이 되게끔 다시 작성하였다.

아래는 직접 적용하여 만든 spring-boot 배포용 Dockerfile이다.

```Docker
# BUILDER
FROM openjdk:17-jdk as builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootjar

# RUNNING
FROM openjdk:17-jdk
# application 결과물 -> build/libs/app.jar
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

# PROJECT-SERVER INITIATE
ENTRYPOINT ["java","-jar","/app.jar"]

# multi-stage build가 아닌 해결 법으로 ``gradlew build docker``가 있음
```

"Docker Multi-stage Build"를 활용하여 작성하였다. 학습한 내용에 대해서는 별도의 포스트에서 정리하도록 하고, 위 Dockerfile 부터 분석해 보자면, 첫 단락부터 중간의 ``FROM``문 전까지는 ``gradle``을 활용하여 배포용 ``.jar``을 빌드한다.
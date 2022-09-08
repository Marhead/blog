---
title: '📓Spring-스프링 학습 01-01'
date: 2021-02-03 05:00:00 +0900
tags: ['JAVA', 'SPRING']
draft: false
summary: '인프런 김영한 강사 자바 스프링 강의 section 1 전반부'
---

## 참고 영상

<iframe width="560" height="315" src="https://www.youtube.com/embed/cEaPR63Khuo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/lqjOqeVzzsc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 프로젝트 생성

**기본 환경**
- Java 11
- IDE : IntelliJ
---
- **프로젝트 선택** ([Spring initializr 활용](https://start.spring.io/))
  - Project: Gradle Project
  - Spring Boot: 2.3.x
  - Language: Java
  - Packaging: Jar
  - Java: 11
- Project Metadata
  - groupid: hello : 그룹명, 단체명
  - artifactld: hello-spring : 빌드 결과
- Dependencies: Spring Web, Thymeleaf(템플릿 엔진, 다양하게 존재)

> Maven -> Gradle : 요즘 추세, 레거시 프로젝트가 아닌 이상 그래들 많이 사용

### Spring-Boot 프로젝트 build 후 나오는 폴더

- .gradle : gradle 설정 파일
- .idea : IntelliJ 설정 파일
- gradle : gradle 파일
- src
  - main
    - java : 실제 패키지, 소스 파일
    - resources : xml, html등의 코드를 제외한 설정파일들
  - test : 테스트 코드들(요즘 개발 트렌드에서 테스트케이스가 중요해짐)
- build.gradle
  - junit : 기본 첨가
  - mavenCentral 에서 다운, repository에서 추가 가능
- apache-tomcat : spring 구동시 자동 실행 되는 서버 구동기

## 라이브러리 살펴보기

maven-gradle 등의 빌드 툴들은 의존관계를 관리해준다.

log출력을 하는 이유 : 에러등을 모아서 압축적으로 보기 좋음. 별도의 포스트에서 log 사용 정리

logback - 성능 구현체

slf4j - 로그 구현 인터페이스

### test

junit 5버전. 상용

**(스프링 부트) 메인 라이브러리**

- spring-boot-starter-web
  - spring-boot-starter-tomcat : 톰캣(웹서버)
  - spring-webmvc: 스프링 웹 MVC
- spring-boot-starter-thymeleaf: 타임리프 템플릿 엔진(View)
- spring-boot-starter(공통): 스프링 부트 + 스프링 코어 + 로깅
  - spring-boot
    - spring-core
  - spring-boot-starter-logging
    - logback, slf4j

**테스트 라이브러리**

- spring-boot-starter-test
  - junit: 테스트 프레임워크
  - mockito: 목 라이브러리
  - assertj: 테스트 코드를 좀 더 편하게 작성하게 도와주는 라이브러리
  - spring-test: 스프링 통합 테스트 지원

**컨트롤러가 우선순위를 가짐**
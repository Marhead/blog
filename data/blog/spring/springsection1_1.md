---
title: '๐Spring ํ์ต 01-01'
date: 2021-02-03 05:00:00 +0900
tags: ['JAVA', 'SPRING']
draft: true
summary: '์ธํ๋ฐ ๊น์ํ ๊ฐ์ฌ ์๋ฐ ์คํ๋ง ๊ฐ์ section 1 ์ ๋ฐ๋ถ'
---

## ์ฐธ๊ณ  ์์

<iframe width="560" height="315" src="https://www.youtube.com/embed/cEaPR63Khuo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/lqjOqeVzzsc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ํ๋ก์ ํธ ์์ฑ

**๊ธฐ๋ณธ ํ๊ฒฝ**
- Java 11
- IDE : IntelliJ
---
- **ํ๋ก์ ํธ ์ ํ** ([Spring initializr ํ์ฉ](https://start.spring.io/))
  - Project: Gradle Project
  - Spring Boot: 2.3.x
  - Language: Java
  - Packaging: Jar
  - Java: 11
- Project Metadata
  - groupid: hello : ๊ทธ๋ฃน๋ช, ๋จ์ฒด๋ช
  - artifactld: hello-spring : ๋น๋ ๊ฒฐ๊ณผ
- Dependencies: Spring Web, Thymeleaf(ํํ๋ฆฟ ์์ง, ๋ค์ํ๊ฒ ์กด์ฌ)

> Maven -> Gradle : ์์ฆ ์ถ์ธ, ๋ ๊ฑฐ์ ํ๋ก์ ํธ๊ฐ ์๋ ์ด์ ๊ทธ๋๋ค ๋ง์ด ์ฌ์ฉ

### Spring-Boot ํ๋ก์ ํธ build ํ ๋์ค๋ ํด๋

- .gradle : gradle ์ค์  ํ์ผ
- .idea : IntelliJ ์ค์  ํ์ผ
- gradle : gradle ํ์ผ
- src
  - main
    - java : ์ค์  ํจํค์ง, ์์ค ํ์ผ
    - resources : xml, html๋ฑ์ ์ฝ๋๋ฅผ ์ ์ธํ ์ค์ ํ์ผ๋ค
  - test : ํ์คํธ ์ฝ๋๋ค(์์ฆ ๊ฐ๋ฐ ํธ๋ ๋์์ ํ์คํธ์ผ์ด์ค๊ฐ ์ค์ํด์ง)
- build.gradle
  - junit : ๊ธฐ๋ณธ ์ฒจ๊ฐ
  - mavenCentral ์์ ๋ค์ด, repository์์ ์ถ๊ฐ ๊ฐ๋ฅ
- apache-tomcat : spring ๊ตฌ๋์ ์๋ ์คํ ๋๋ ์๋ฒ ๊ตฌ๋๊ธฐ

## ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ดํด๋ณด๊ธฐ

maven-gradle ๋ฑ์ ๋น๋ ํด๋ค์ ์์กด๊ด๊ณ๋ฅผ ๊ด๋ฆฌํด์ค๋ค.

log์ถ๋ ฅ์ ํ๋ ์ด์  : ์๋ฌ๋ฑ์ ๋ชจ์์ ์์ถ์ ์ผ๋ก ๋ณด๊ธฐ ์ข์. ๋ณ๋์ ํฌ์คํธ์์ log ์ฌ์ฉ ์ ๋ฆฌ

logback - ์ฑ๋ฅ ๊ตฌํ์ฒด

slf4j - ๋ก๊ทธ ๊ตฌํ ์ธํฐํ์ด์ค

### test

junit 5๋ฒ์ . ์์ฉ

**(์คํ๋ง ๋ถํธ) ๋ฉ์ธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ**

- spring-boot-starter-web
  - spring-boot-starter-tomcat : ํฐ์บฃ(์น์๋ฒ)
  - spring-webmvc: ์คํ๋ง ์น MVC
- spring-boot-starter-thymeleaf: ํ์๋ฆฌํ ํํ๋ฆฟ ์์ง(View)
- spring-boot-starter(๊ณตํต): ์คํ๋ง ๋ถํธ + ์คํ๋ง ์ฝ์ด + ๋ก๊น
  - spring-boot
    - spring-core
  - spring-boot-starter-logging
    - logback, slf4j

**ํ์คํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ**

- spring-boot-starter-test
  - junit: ํ์คํธ ํ๋ ์์ํฌ
  - mockito: ๋ชฉ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - assertj: ํ์คํธ ์ฝ๋๋ฅผ ์ข ๋ ํธํ๊ฒ ์์ฑํ๊ฒ ๋์์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - spring-test: ์คํ๋ง ํตํฉ ํ์คํธ ์ง์

**์ปจํธ๋กค๋ฌ๊ฐ ์ฐ์ ์์๋ฅผ ๊ฐ์ง**
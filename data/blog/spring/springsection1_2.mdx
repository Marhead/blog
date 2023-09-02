---
title: '📓Spring 학습 01-02'
date: 2021-02-03 07:00:00 +0900
tags: ['JAVA', 'SPRING']
draft: true 
summary: '인프런 김영한 선생님의 자바 스프링 강의 section 1 후반부'
---

## 참고 영상

<iframe width="560" height="315" src="https://www.youtube.com/embed/tbNfjC4Wwh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/OMm7Hs4q4Sw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## View 설정

**Welcome Page 만들기, static**

- 예제 소스 (resources/static/index.html)
  ```html
  <!DOCTYPE HTML>
  <html>
  <head>
    <title>Hello</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
  Hello
  <a href="/hello">hello</a>
  </body>
  </html>
  ```
스프링 부트가 제공하는 기본 Welcome Page로서, ```static/index.html```에 위치하고 있다. [Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-spring-mvc-welcome-page)

**Welcome Page 만들기, with thymeleaf**

- 예제 소스 (resources/templates/hello.html)
  ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
    <title>Hello</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
  <p th:text="'안녕하세요. ' + ${data}" >안녕하세요. 손님</p>
  </body>
  </html>
  ```
- 예제 코드 (java/hello/hellospring/controller/HelloController.java)
  ```java
  @Controller
  public class HelloController {
    @GetMapping("hello")
    public String hello(Model model) {
      model.addAttribute("data", "hello!!");
      return "hello";
    }
  }
  ```
스프링 부트가 제공하는 프론트 템플릿 라이브러리 ```Thymeleaf```의 기본 작동 방식을 보여준다. 위의 java 코드에서 ```@GetMapping```을 통해 hello html을 잡아 불러 오고, ```hello``` 메서드가 작업을 한다. 작업을 마친 이후, ```return```을 수행한다. ```return``` 작업을 수행할 때, ```resurces/templates/```의 타겟 파일 이름과 같아야한다.
그림으로 요약하면 다음과 같다.

![](../../assets/img/spring/thymeleafmove.PNG)

## Build & Execute!

콘솔을 통해 ```Gradle```을 실행시켜 서비스를 빌드하고 작동시키는 법

**Windows 환경**
- Console로 디렉터리 이동
- ```$ ./gradlew```
- ```$ .\gradlew.bat```
- ```$ .\gradlew build```
- ```$ cd build```
- ```$ cd libs```
- ```$ java -jar filename.jar```
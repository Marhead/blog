---
title: 'πSpring νμ΅ 01-02'
date: 2021-02-03 07:00:00 +0900
tags: ['JAVA', 'SPRING']
draft: true 
summary: 'μΈνλ° κΉμν μ μλμ μλ° μ€νλ§ κ°μ section 1 νλ°λΆ'
---

## μ°Έκ³  μμ

<iframe width="560" height="315" src="https://www.youtube.com/embed/tbNfjC4Wwh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/OMm7Hs4q4Sw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## View μ€μ 

**Welcome Page λ§λ€κΈ°, static**

- μμ  μμ€ (resources/static/index.html)
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
μ€νλ§ λΆνΈκ° μ κ³΅νλ κΈ°λ³Έ Welcome Pageλ‘μ, ```static/index.html```μ μμΉνκ³  μλ€. [Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-spring-mvc-welcome-page)

**Welcome Page λ§λ€κΈ°, with thymeleaf**

- μμ  μμ€ (resources/templates/hello.html)
  ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
    <title>Hello</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
  <p th:text="'μλνμΈμ. ' + ${data}" >μλνμΈμ. μλ</p>
  </body>
  </html>
  ```
- μμ  μ½λ (java/hello/hellospring/controller/HelloController.java)
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
μ€νλ§ λΆνΈκ° μ κ³΅νλ νλ‘ νΈ ννλ¦Ώ λΌμ΄λΈλ¬λ¦¬ ```Thymeleaf```μ κΈ°λ³Έ μλ λ°©μμ λ³΄μ¬μ€λ€. μμ java μ½λμμ ```@GetMapping```μ ν΅ν΄ hello htmlμ μ‘μ λΆλ¬ μ€κ³ , ```hello``` λ©μλκ° μμμ νλ€. μμμ λ§μΉ μ΄ν, ```return```μ μννλ€. ```return``` μμμ μνν  λ, ```resurces/templates/```μ νκ² νμΌ μ΄λ¦κ³Ό κ°μμΌνλ€.
κ·Έλ¦ΌμΌλ‘ μμ½νλ©΄ λ€μκ³Ό κ°λ€.

![](../../assets/img/spring/thymeleafmove.PNG)

## Build & Execute!

μ½μμ ν΅ν΄ ```Gradle```μ μ€νμμΌ μλΉμ€λ₯Ό λΉλνκ³  μλμν€λ λ²

**Windows νκ²½**
- Consoleλ‘ λλ ν°λ¦¬ μ΄λ
- ```$ ./gradlew```
- ```$ .\gradlew.bat```
- ```$ .\gradlew build```
- ```$ cd build```
- ```$ cd libs```
- ```$ java -jar filename.jar```
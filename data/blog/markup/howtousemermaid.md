---
title: '๐ปMarkdown mermaid ์ฌ์ฉ๋ฒ'
date: 2021-09-09 12:00:00 +0900
tags: ['MARKUP', 'MISCELLANEOUS']
draft: false
summary: 'Markdown๋ฌธ์์์ mermaid library๋ฅผ ํ์ฉํ์ฌ ๋ค์ํ ๋ค์ด์ด๊ทธ๋จ ๊ทธ๋ ค๋ด๊ธฐ'
cover: ""
---

Markdown ๋ฌธ์ ํ๊ฒฝ์์ ์ฌ์ฉ๊ฐ๋ฅํ ๊ณต์ Diagram Library, ``mermaid`` ์ฌ์ฉ๋ฒ์ ๋ํ์ฌ ๋ง์ด ์ฐ๋ ์์๋ค ์์ฃผ๋ก ์ ๋ฆฌํ ๋ฌธ์์ด๋ค.

# Graphs

## Direction
- Top to Bottom
	```mermaid
	graph TB
	a --> b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TB
	a --> b
	```
    ~~~
- Bottom to Top
	```mermaid
	graph BT
	a --> b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph BT
	a --> b
	```
    ~~~
- Left to Right
	```mermaid
	graph LR
	a --> b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a --> b
	```
    ~~~
- Right to Left
	```mermaid
	graph RL
	a --> b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph RL
	a --> b
	```
    ~~~

## Shapes

- Normal Box
	```mermaid
	graph TD
	boxa[Normal Box with Text]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[Normal Box with Text]
	```
    ~~~
- Phill Shaped Box
	```mermaid
	graph TD
	boxa([Normal Box with Text])
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa([Normal Box with Text])
	```
    ~~~
- Box with Rounded edges
	```mermaid
	graph TD
	boxa(Normal Box with Text)
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa(Normal Box with Text)
	```
    ~~~
- Subroutine shaped Box
	```mermaid
	graph TD
	boxa[[Normal Box with Text]]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[[Normal Box with Text]]
	```
    ~~~
- Cylindrical Shape
	```mermaid
	graph TD
	boxa[(Normal Box with Text)]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[(Normal Box with Text)]
	```
    ~~~
- Circle
	```mermaid
	graph TD
	boxa((Normal Box with Text))
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa((Normal Box with Text))
	```
    ~~~
- Asymmetric Shape
	```mermaid
	graph TD
	boxa>Normal Box with Text]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa>Normal Box with Text]
	```
    ~~~
- Rhombus
	```mermaid
	graph TD
	boxa{Normal Box with Text}
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa{Normal Box with Text}
	```
    ~~~
- Hexagon
	```mermaid
	graph TD
	boxa{{Normal Box with Text}}
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa{{Normal Box with Text}}
	```
    ~~~
- Parallelogram
	```mermaid
	graph TD
	boxa[/Normal Box with Text/]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[/Normal Box with Text/]
	```
    ~~~
- Parallelogram Alternative
	```mermaid
	graph TD
	boxa[\Normal Box with Text\]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[\Normal Box with Text\]
	```
    ~~~
- Trapezoid
	```mermaid
	graph TD
	boxa[/Normal Box with Text\]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[/Normal Box with Text\]
	```
    ~~~
- Trapezoid Alternative
	```mermaid
	graph TD
	boxa[\Normal Box with Text/]
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph TD
	boxa[\Normal Box with Text/]
	```
    ~~~

## Links
- Arrow head
	```mermaid
	graph LR
	a-->b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a-->b
	```
    ~~~
- Open Link
	```mermaid
	graph LR
	a---b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a---b
	```
    ~~~
- Text on Link
	```mermaid
	graph LR
	a--text-->b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a--text-->b
	```
    ~~~
- Dotted Link
	```mermaid
	graph LR
	a-.->b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a-.->b
	```
    ~~~
- Dotted Link with Text
	```mermaid
	graph LR
	a-.Text.->b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a-.Text.->b
	```
    ~~~
- Thick Link
	```mermaid
	graph LR
	a==>b
	```
    ์ฝ๋ : 
    ~~~md
    ```mermaid
	graph LR
	a==>b
	```
    ~~~

# PieChart

```mermaid
pie title Fruit
"Apple": 50
"Banana": 40
"Strawberry": 10
```
์ฝ๋ : 
~~~md
```mermaid
pie title Fruit
"Apple": 50
"Banana": 40
"Strawberry": 10
```
~~~

# GanttChart

```mermaid
gantt
title Becoming Productivity Programmer
dateformat DD-MM-YYYY
section Computer Science Study
MArkdown: a1, 04-07-2020, 3d
Diagrams: after a1, 07-07-2020, 2d
section Java Spring Development
example study 1: 01-07-2020, 5d
study 2: 07-07-2020, 12d
```
์ฝ๋ : 
~~~md
```mermaid
gantt
title Becoming Productivity Programmer
dateformat DD-MM-YYYY
section Computer Science Study
MArkdown: a1, 04-07-2020, 3d
Diagrams: after a1, 07-07-2020, 2d
section Java Spring Development
example study 1: 01-07-2020, 5d
study 2: 07-07-2020, 12d
```
~~~

# Sequence Diagram

```mermaid
sequenceDiagram
Alice ->> John : Hello John, How are you?
John ->> Alice : Great!
```
์ฝ๋ : 
~~~md
```mermaid
sequenceDiagram
Alice ->> John : Hello John, How are you?
John ->> Alice : Great!
```
~~~

# Class Diagram

```mermaid
classDiagram
class Animal
Vehicle <|-- Car
```
์ฝ๋ : 
~~~md
```mermaid
classDiagram
class Animal
Vehicle <|-- Car
```
~~~

# State Diagram

```mermaid
stateDiagram-v2
Push --> Move
Move --> Stop
```
์ฝ๋ : 
~~~md
```mermaid
stateDiagram-v2
Push --> Move
Move --> Stop
```
~~~

```mermaid
stateDiagram-v2
[*] --> Move
Move --> [*]
```
์ฝ๋ : 
~~~md
```mermaid
stateDiagram-v2
[*] --> Move
Move --> [*]
```
~~~

# Entity Relationship Diagram

```mermaid
erDiagram
CUSTOMER ||--O{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : users
```
์ฝ๋ : 
~~~md
```mermaid
erDiagram
CUSTOMER ||--O{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : users
```
~~~
# User Journey

```mermaid
journey
title My working day
section Go to work
	Make tea: 5 : Me
	Go upstairs : 3 : Me
	Do work : 1 : Me, Cat
section Go Home
	Go downstairs : 5 : Me
	Sit down : 5 : Me
```
์ฝ๋ : 
~~~md
```mermaid
journey
title My working day
section Go to work
	Make tea: 5 : Me
	Go upstairs : 3 : Me
	Do work : 1 : Me, Cat
section Go Home
	Go downstairs : 5 : Me
	Sit down : 5 : Me
```
~~~
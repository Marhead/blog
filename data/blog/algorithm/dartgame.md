---
title: 'π οΈ[νλ‘κ·Έλλ¨Έμ€]-λ€νΈ κ²μ'
date: 2021-02-01 21:00:00 +0900
tags: ['PROBLEM-SOLVING', 'PYTHON', 'KAKAO', 'PROGRAMMERS']
draft: false
summary: 'νλ‘κ·Έλλ¨Έμ€ 2018 μΉ΄μΉ΄μ€ λΈλΌμΈλ [λ€νΈ κ²μ] λ¬Έμ  ν΄κ²°'
cover: 'algorithm-flow-1.jpg'
---

## πλ¬Έμ  μ€λͺ
---
μΉ΄μΉ΄μ€ν‘ κ²μλ³μ νλ°κΈ° μ κ· μλΉμ€λ‘ λ€νΈ κ²μμ μΆμνκΈ°λ‘ νλ€. λ€νΈ κ²μμ λ€νΈνμ λ€νΈλ₯Ό μΈ μ°¨λ‘ λμ Έ κ·Έ μ μμ ν©κ³λ‘ μ€λ ₯μ κ²¨λ£¨λ κ²μμΌλ‘, λͺ¨λκ° κ°λ¨ν μ¦κΈΈ μ μλ€.
κ° μμ¬ν λ¬΄μ§λ μ½λ© μ€λ ₯μ μΈμ λ°μ κ²μμ ν΅μ¬ λΆλΆμΈ μ μ κ³μ° λ‘μ§μ λ§‘κ² λμλ€. λ€νΈ κ²μμ μ μ κ³μ° λ‘μ§μ μλμ κ°λ€.

1. λ€νΈ κ²μμ μ΄ 3λ²μ κΈ°νλ‘ κ΅¬μ±λλ€.
2. κ° κΈ°νλ§λ€ μ»μ μ μλ μ μλ 0μ μμ 10μ κΉμ§μ΄λ€.
3. μ μμ ν¨κ» Single(S), Double(D), Triple(T) μμ­μ΄ μ‘΄μ¬νκ³  κ° μμ­ λΉμ²¨ μ μ μμμ 1μ κ³±, 2μ κ³±, 3μ κ³± ($μ μ^1$ , $μ μ^2$ , $μ μ^3$ )μΌλ‘ κ³μ°λλ€.
4. μ΅μμΌλ‘ μ€νμ(*) , μμ°¨μ(#)μ΄ μ‘΄μ¬νλ©° μ€νμ(*) λΉμ²¨ μ ν΄λΉ μ μμ λ°λ‘ μ μ μ»μ μ μλ₯Ό κ° 2λ°°λ‘ λ§λ λ€. μμ°¨μ(#) λΉμ²¨ μ ν΄λΉ μ μλ λ§μ΄λμ€λλ€.
5. μ€νμ(*)μ μ²« λ²μ§Έ κΈ°νμμλ λμ¬ μ μλ€. μ΄ κ²½μ° μ²« λ²μ§Έ μ€νμ(*)μ μ μλ§ 2λ°°κ° λλ€. (μμ  4λ² μ°Έκ³ )
6. μ€νμ(*)μ ν¨κ³Όλ λ€λ₯Έ μ€νμ(*)μ ν¨κ³Όμ μ€μ²©λ  μ μλ€. μ΄ κ²½μ° μ€μ²©λ μ€νμ(*) μ μλ 4λ°°κ° λλ€. (μμ  4λ² μ°Έκ³ )
7. μ€νμ(*)μ ν¨κ³Όλ μμ°¨μ(#)μ ν¨κ³Όμ μ€μ²©λ  μ μλ€. μ΄ κ²½μ° μ€μ²©λ μμ°¨μ(#)μ μ μλ -2λ°°κ° λλ€. (μμ  5λ² μ°Έκ³ )
8. Single(S), Double(D), Triple(T)μ μ μλ§λ€ νλμ© μ‘΄μ¬νλ€.
9. μ€νμ(*), μμ°¨μ(#)μ μ μλ§λ€ λ μ€ νλλ§ μ‘΄μ¬ν  μ μμΌλ©°, μ‘΄μ¬νμ§ μμ μλ μλ€.

0~10μ μ μμ λ¬Έμ S, D, T, *, #λ‘ κ΅¬μ±λ λ¬Έμμ΄μ΄ μλ ₯λ  μ μ΄μ μλ₯Ό λ°ννλ ν¨μλ₯Ό μμ±νλΌ.

## βοΈλ¬Έμ  νμ΄
---
μ£Όμ΄μ§ μλ ₯ λ³μλ€μ λν΄μ, forλ¬Έ μμ λ³λμ ```order```(μΌμ’μ νλκ·Έ)λ₯Ό λλ¦¬λ©΄μ μλ ₯λ μ μλ₯Ό λ°λ‘λ°λ‘ μ²λ¦¬νλ λ°©λ².

## β¨οΈνμ΄ μ½λ
---
```python
def solution(dartResult):
    answer = 0
    point = []
    order = -1
    pivot = False

    for i in range(len(dartResult)):

        if pivot == True:
            pivot = False
            order += 1
            continue

        if dartResult[i] >= "0" and dartResult[i] <= "9":
            if dartResult[i] == "1" and dartResult[i+1] == "0":
                point.append(10)
                pivot = True
                continue
                
            else :
                point.append(int(dartResult[i]))
                order += 1
                continue
                
        if dartResult[i] == "D" :
            point[order] = point[order] ** 2
            continue
        if dartResult[i] == "T" :
            point[order] = point[order] ** 3
            continue

        if order == 0 and dartResult[i] == "*":
            point[order] *= 2
        elif dartResult[i] == "*":
            point[order-1] *= 2
            point[order] *= 2
        if dartResult[i] == "#":
            point[order] *= -1

    for i in point:
        answer += i
            
    return answer
```

-----
μΆμ² : [νλ‘κ·Έλλ¨Έμ€ 2018 μΉ΄μΉ΄μ€ λ€νΈ κ²μ λ¬Έμ ](https://programmers.co.kr/learn/courses/30/lessons/17682)
---
title: 'π οΈ[νλ‘κ·Έλλ¨Έμ€]-λΉλ°μ§λ'
date: 2021-01-24 16:00:00 +0900
tags: ['PROBLEM-SOLVING', 'C++', 'PYTHON', 'PROGRAMMERS', 'KAKAO']
draft: false
summary: 'νλ‘κ·Έλλ¨Έμ€ 2018 μΉ΄μΉ΄μ€ λΈλΌμΈλ [λΉλ°μ§λ] λ¬Έμ  ν΄κ²°'
cover: 'algorithm-flow-1.jpg'
---

## πλ¬Έμ  μ€λͺ
---
λ€μ€λ νμ νλ‘λκ° λΉμκΈμ μ¨κ²¨λλ μ₯μλ₯Ό μλ €μ€ λΉλ°μ§λλ₯Ό μμ λ£μλ€. κ·Έλ°λ° μ΄ λΉλ°μ§λλ μ«μλ‘ μνΈνλμ΄ μμ΄ μμΉλ₯Ό νμΈνκΈ° μν΄μλ μνΈλ₯Ό ν΄λν΄μΌ νλ€. λ€νν μ§λ μνΈλ₯Ό ν΄λν  λ°©λ²μ μ μ΄λμ λ©λͺ¨λ ν¨κ» λ°κ²¬νλ€.

μ§λλ ν λ³μ κΈΈμ΄κ° nμΈ μ μ¬κ°ν λ°°μ΄ ννλ‘, κ° μΉΈμ κ³΅λ°±(" ) λλλ²½(#") λ μ’λ₯λ‘ μ΄λ£¨μ΄μ Έ μλ€.
μ μ²΄ μ§λλ λ μ₯μ μ§λλ₯Ό κ²Ήμ³μ μ»μ μ μλ€. κ°κ° μ§λ 1κ³Ό μ§λ 2λΌκ³  νμ. μ§λ 1 λλ μ§λ 2 μ€ μ΄λ νλλΌλ λ²½μΈ λΆλΆμ μ μ²΄ μ§λμμλ λ²½μ΄λ€. μ§λ 1κ³Ό μ§λ 2μμ λͺ¨λ κ³΅λ°±μΈ λΆλΆμ μ μ²΄ μ§λμμλ κ³΅λ°±μ΄λ€.
μ§λ 1κ³Ό μ§λ 2λ κ°κ° μ μ λ°°μ΄λ‘ μνΈνλμ΄ μλ€.
μνΈνλ λ°°μ΄μ μ§λμ κ° κ°λ‘μ€μμ λ²½ λΆλΆμ 1, κ³΅λ°± λΆλΆμ 0μΌλ‘ λΆνΈννμ λ μ»μ΄μ§λ μ΄μ§μμ ν΄λΉνλ κ°μ λ°°μ΄μ΄λ€.
![secretmap](../../assets/img/programmers/secret8.png)

λ€μ€κ° νλ‘λμ λΉμκΈμ μμ λ£μ μ μλλ‘, λΉλ°μ§λμ μνΈλ₯Ό ν΄λνλ μμμ λμμ€ νλ‘κ·Έλ¨μ μμ±νλΌ.

μλ ₯ νμ
- μλ ₯μΌλ‘ μ§λμ ν λ³ ν¬κΈ° $n$ κ³Ό 2κ°μ μ μ λ°°μ΄ $arr1, arr2$κ° λ€μ΄μ¨λ€.
- $1 β¦ n β¦ 16$
- arr1, arr2λ κΈΈμ΄ nμΈ μ μ λ°°μ΄λ‘ μ£Όμ΄μ§λ€.
- μ μ λ°°μ΄μ κ° μμ $x$λ₯Ό μ΄μ§μλ‘ λ³ννμ λμ κΈΈμ΄λ $n$ μ΄νμ΄λ€. μ¦, $0 β¦ x β¦ 2n - 1$μ λ§μ‘±νλ€.

μΆλ ₯ νμ
- μλμ λΉλ°μ§λλ₯Ό ν΄λνμ¬ '#', κ³΅λ°±μΌλ‘ κ΅¬μ±λ λ¬Έμμ΄ λ°°μ΄λ‘ μΆλ ₯νλΌ.

## βοΈλ¬Έμ  νμ΄
---
- C++ μ¬μ© λΌμ΄λΈλ¬λ¦¬
  - ```<bitset>``` μ΄λ?  
  λΉνΈ(bit)λ₯Ό μ μ₯, μ°μ°νκ³  λ€λ£¨λ ν΄λμ€μ΄λ€. λΆμΈν μμλ€λ‘ μ΄λ£¨μ΄μ§ λ°°μ΄μ μ‘°μνλ€. λ°°μ΄μ ν μλ¦¬λΉ ν λΉλ λ¨μΌ μμλ€μ κ³΅κ° ν λΉμ νΉνλμ΄μλ€. ν΄λΉ λΌμ΄λΈλ¬λ¦¬μ λν΄μλ λ³λμ ν¬μ€νΈμμ μ¬μΈ΅μ μΌλ‘ λ€λ£¨κ² λ€.
- Python μ¬μ© ν¨μ

## β¨οΈνμ΄ μ½λ
---
- C++ μ½λ

```cpp
#include <string>
#include <vector>
#include <bitset>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;

    string temp;
    string tempboard;
    int startpoint = 0;
    for (int i = 0; i < n; i++) {
        bitset<16> temp1 = arr1[i];
        bitset<16> temp2 = arr2[i];
        bitset<16> temp_bit = temp1 | temp2;

        temp = temp_bit.to_string();
        tempboard = "";
        startpoint = 16-n;
        for (int j = startpoint; j < 16; j++) {
            temp[j] == '1' ? tempboard += '#' : tempboard += " ";
        }
        answer.push_back(tempboard);
    }
    return answer;
}
```

- Python μ½λ

```python
def solution(a, b):
    answer = 0
    for i in range(len(a)):
        answer += a[i] * b[i]
    return answer
```
-----
μΆμ² : [νλ‘κ·Έλλ¨Έμ€ 2018 μΉ΄μΉ΄μ€ λΉλ°μ§λ λ¬Έμ ](https://programmers.co.kr/learn/courses/30/lessons/17681)
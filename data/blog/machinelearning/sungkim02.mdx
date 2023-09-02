---
title: "📝PyTorch Zero to All - Lecture02 Overview"
date: 2021-02-21 05:15:00 +0900
tags: ['MACHINE-LEARNING', 'PYTHON']
draft: false
summary: "Sung Kim's PyTorch Lecture 02 review, 성킴 교수님의 머신러닝 강의 리뷰"
cover: ""
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/l-Fe9Ekxxj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Model Design
머신러닝의 모델에는 3가지 종류가 있다.
- Supervised Learning(지도학습)
- Unsupervised Learning(비지도학습)
- Reinforcement Learning(강화학습)

교수님의 강의에서 사용될 머신러닝의 종류는 Supervised Learning(지도학습) 타입이다.

강의 영상에서는 시간에 따른 점수를 예측하는 모델을 예제삼아 설계를 진행한다.

우선, 지도학습을 하기 위해 주어진 데이터들의 분류가 필요하다. 크게 **Training dataset** 과 **Test dataset**으로 나뉜다. 예제 속 두 데이터셋은 다음과 같다.

| Hours(x) | Points(y) | |
| --- | --- | --- |
| 1 | 2 | Train |
| 2 | 4 | Train |
| 3 | 6 | Train |
| 4 | ? | Test |

마지막 "?"의 값을 예측하는 머신러닝 모델을 설계하는 것이 현재의 목표이다.

다음과 같은 데이터를 가장 잘 정리할 수 있는 모델은 선형(Linear)모델이라고 볼 수 있다. 기초적인 선형 방정식을 토대로 나중에 추가될 가중치(weight)개념과 바이어스(bias) 개념까지 활용하여 표현하면 다음과 같다.

$$
\hat{y} = x * w + b
$$

$$
x\rightarrow Linear \rightarrow \hat{y}
$$

두 식중, 위의 식 $\hat{y} = x * w + b$ 에서 b는 더욱 간단한 식의 표현을 위해 생략하고 그래프를 작성하면 다음과 같다.

위의 그래프의 선은 입력에 대한 정답을 정확히 예측하는 **True Line**이다. 지금부터 우리가 설계한 모델은 해당 True Line에 가장 근접할 수 있는 $w$값을 random guessing한다. 무작위 예측이기 때문에, True Line에서는 빗껴간 다양한 예측 모델들이 등장한다. 그래프 위에 표현하면 다음과 같다.

지금 부터 우리가 해야 할 일은, 예측된 다양한 그래프들이 최대한 True Line에 **가깝도록** 하는 것이다. 그러기 위해서는 그래프 별로 True Line과의 거리를 측정하여 줄이는 것이다. True Line을 $y$, 우리가 만든 그래프를 $\hat{y}$로 보았을 때, 두 그래프의 거리는 $y - \hat{y}$ 이다. 우리에게는 부호의 의미가 필요없고 거리의 크기가 필요하기에 제곱을 씌어준다. 이렇게 나온 값을 **error(오류)** 라고 부르고, 이러한 값을 얻는 함수를 **Loss Function(손실함수)** 이라고 부른다. 이러한 오류를 줄이는 것이 최선의 값을 산출해 낼 해법이다.식으로 정리하면 다음과 같다.

$$
loss = (\hat{y} - y)^2 = (x * w - y) ^ 2
$$

다음은 $w$ 값의 변화에 따른 손실의 변화를 정리한 표이다.

MSE = Mean Square Error, 손실 제곱 평균  
    => $loss =$ $1\over N$ $\sum_{n=1}^N (\hat{y_n} - y_n)^2$

|Hours, $x$|Loss($w$ = 0)|Loss($w$ = 1)|Loss($w$ = 2)|Loss($w$ = 3)|Loss($w$ = 4)|
|---|---|---|---|---|---|
|1|4|1|0|1|4|
|2|16|4|0|4|16|
|3|36|9|0|9|36|
||MSE = 56/3 = 18.7|MSE = 14/3 = 4.7|MSE = 0|MSE = 14/3 = 4.7|MSE = 56/3 = 18.7|

그래프로 나타나면 다음과 같다.

# Let's code
sungkim 교수님의 모든 코드는 해당 [git-hub](https://github.com/hunkim/PyTorchZeroToAll/blob/master/01_basics.py)에 정리 되어 올라와 있다. 그 중 가독성과 정리를 위해 일분씩만 발췌하여 설명과 함께 코드를 정리해 보겠다.

우선, 예제로 삼은 시간에 따른 점수 예측 모델 연산을 위해 필요한 기초적인 패키지들을 불러오고 우리가 설정한 데이터 값을 넣어준다.
```python
import numpy as np
import matplotlib.pyplot as plt

x_data = [1.0, 2.0, 3.0]
y_data = [2.0, 4.0, 6.0]
```

다음으로 $\hat{y} = x * w$에 해당하는 파트인 모델 설계 함수를 설정하자.
```python
w = 1.0

# our model for the forward pass
def forward(x):
    return x * w
```

손실함수$loss = (\hat{y} - y)^2$도 코드로 작성하자
```python
# Loss function
def loss(x, y):
    y_pred = forward(x)
    return (y_pred - y) * (y_pred - y)
```

$w$에 따른 손실 계산을 위한 반복문 부분도 있다.
```python
for w in np.arange(0.0, 4.1, 0.1):
    # Print the weights and initialize the lost
    print("w=", w)
    l_sum = 0

    for x_val, y_val in zip(x_data, y_data):
        # For each input and output, calculate y_hat
        # Compute the total loss and add to the total error
        y_pred_val = forward(x_val)
        l = loss(x_val, y_val)
        l_sum += l
        print("\t", x_val, y_val, y_pred_val, l)
    # Now compute the Mean squared error (mse) of each
    # Aggregate the weight/mse from this run
    print("MSE=", l_sum / len(x_data))
```

$w$에 따른 손실 변화를 잘 확인하기위해 그래프를 그려서 확인할 수도 있다. 그래프를 그리기 위해서는 다음 코드를 추가해주면 가능하다.
```python
    w_list.append(w)
    mse_list.append(l_sum / len(x_data))

# Plot it all
plt.plot(w_list, mse_list)
plt.ylabel('Loss')
plt.xlabel('w')
plt.show()
```
위 코드에서 두줄은, 이전 손실 계산을 위한 반복문 안에 넣어주기만 하면 외부의 리스트에 담아서 한번에 가공하여 그래프를 그린다. 그려진 그래프는 다음과 같다.

---
참고자료 : [Youtube Link](https://youtu.be/l-Fe9Ekxxj4)

[pytorchzerotoall_github](https://github.com/hunkim/PyTorchZeroToAll/blob/master/01_basics.py)
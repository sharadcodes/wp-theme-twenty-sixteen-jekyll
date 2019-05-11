---
title: PASSING AN ARGUMENT TO A MEMBER FUNCTION OF A CLASS DEFINED OUTSIDE THE CLASS
  AND INITIALIZATION OF THE PRIVATE DATA MEMBERS WITH IT USING THE PUBLIC MEMBER FUNCTION
  OF THAT CLASS
date: 2018-06-18 14:35:01 Z
layout: post
---

#### PROGRAM CODE


```c
#include<iostream>
class X{
int x;
void data(int hello)
{
x=hello;
std::cout << "x = " <<x<< '\n';
}
public:
void put(int h);
};
void X:: put(int h)
{
data(h);
}
int main(int argc, char const *argv[]) {
X x1;
x1.put(55);
return 0;
}
```

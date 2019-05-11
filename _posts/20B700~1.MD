---
title: PROGRAM FOR ADDING ELEMENTS OF ARRAY WITH RESPECT TO THEIR POSITIONS AND THEN
  ASSIGN THE VALUE TO THE THIRD ARRAY AND THEN PRINT IT USING DYNAMIC MEMORY ALLOCATION
  FUNCTIONS.
date: 2018-05-24 16:58:52 Z
layout: post
---

#### PROGRAM CODE


```c
#include<stdio.h>
#include<malloc.h>
int main()
{
int i,n,*x,*y,*z;
printf("Enter the value of n : ");
scanf("%d",&n);
x=(int*)malloc(n*sizeof(int));
if(x == NULL)
{
printf("Error! memory not allocated for x");
exit(0);
}
y=(int*)malloc(n*sizeof(int));
if(y == NULL)
{
printf("Error! memory not allocated for y");
exit(0);
}
z=(int*)malloc(n*sizeof(int));
if(z == NULL)
{
printf("Error! memory not allocated for z");
exit(0);
}
printf("For 1st array\n");
for(i=0;i<n;i++)
{
printf("Enter element %d : ",i+1);
scanf("%d",(x+i));
}
printf("For 2nd array \n");
for(i=0;i<n;i++)
{
printf("Enter element %d : ",i+1);
scanf("%d",y+i);
}
printf("Elements of 3rd array are : ");
for(i=0;i<n;i++)
{
*(z+i)=*(x+i)+*(y+i);
printf("%d ",*(z+i));
}
return 0;
}
```

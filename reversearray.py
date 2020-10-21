#!/bin/python3
# Reverse an array of integers.

import math
import os
import random
import re
import sys

# Complete the reverseArray function below.
def reverseArray(a):
    res = []
    for i in range(len(a)):
        res.insert(0,a[i])

    return res
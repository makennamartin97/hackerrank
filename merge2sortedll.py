#!/bin/python3

import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node


        self.tail = node

def print_singly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

# Complete the mergeLists function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
sys.setrecursionlimit(10000)
def mergeLists(head1, head2):
    if head1 is None and head2 is None:
        return None
    elif head1 is None: 
        return head2
    elif head2 is None: 
        return head1

    if head1.data <= head2.data:
        smaller = head1
        smaller.next = mergeLists(head1.next, head2)
    else:
        smaller = head2
        smaller.next = mergeLists(head1, head2.next)
    return smaller
#hackerrank compare 2 linked lists

import os
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

# Complete the compare_lists function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def compare_lists(llist1, llist2):
    if llist1 is None and llist2 is None:
        return 1
    curr1 = llist1
    curr2 = llist2
    while curr1.next and curr2.next:
        if curr1.data != curr2.data:
            return 0
        curr1 = curr1.next
        curr2 = curr2.next
    if curr1.data == curr2.data and curr1.next is None and curr2.next is None:
        return 1
    else:
        return 0
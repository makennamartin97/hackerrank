#You are given a pointer to the root of a binary search tree and values 
#to be inserted into the tree. Insert the values into their appropriate 
##position in the binary search tree and return the root of the updated 
##binary tree. 

#Node is defined as
#self.left (the left child of the node)
#self.right (the right child of the node)
#self.info (the value of the node)
class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

def preOrder(root):
    if root == None:
        return
    print (root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)
    
class BinarySearchTree:
    def __init__(self): 
        self.root = None


#in python

def insert(self, val):
    #check if there is a root, if not, new node will be root
    if self.root is None:
        self.root = Node(val)
    #while there is a root:
    root = self.root
    while True:
        #if value being inserted is greater than the root val
        if val > root.info:
            #if there is a root.right node, it will move to that node
            if root.right:
                root = root.right
            #if there is no node to the right, the new node is inserted there and the loop breaks/stops
            else: 
                root.right = Node(val)
                break
        #if the val being inserted is less than the root val
        elif val < root.info:
            #if there is a root.left node, it will move to the next
            if root.left:
                root = root.left
            #if there isnt, the node will be inserted there and the loop stops
            else:
                root.left = Node(val)
                break
        else:
            break
    return root
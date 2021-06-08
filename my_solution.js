// recursive
function inOrderTraversal(root) {
    let res = []
    if(!root) return res
    
    // if there's a left, get left value
    if(root.left) {
        res = [...res, ...inOrderTraversal(root.left)]
    }
    // add ourself
    res.push(root.value)
    // if there's a right, get right value
    if(root.right) {
        res = [...res, ...inOrderTraversal(root.right)]        
    }

    return res
}

// iterative
function inOrderTraversal(root) {
  if (!root) return [];
  
  let cur = root,
      res = [],
      stack = [];
  
  while (true) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      if (!stack.length) return res;
      
      cur = stack.pop();
      res.push(cur.value);
      cur = cur.right;
    }
  }
}

// Test Cases
test.startProblem("In-Order Traversal")
var tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
var tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
test.testForArrays([], inOrderTraversal(null), 1)
test.testForArrays([2, 1, 3], inOrderTraversal(tree1), 2)
test.testForArrays([4, 2, 5, 1, 3], inOrderTraversal(tree2), 3)
test.testForArrays([8, 4, 9, 2, 5, 1, 6, 3, 7], inOrderTraversal(tree3), 4)
test.endProblem()
// tree1:
//          1
//        /   \
//       2     3
//
// tree2:
//          1
//        /   \
//       2     3
//      / \  
//     4   5 
//
// tree3:
//          1
//        /   \
//       2     3
//      / \   / \
//     4   5 6   7
//    / \
//   8   9



class TreeNode1 {
      val: number
      left: TreeNode1 | null
      right: TreeNode1 | null
      constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function maxDepth(root: TreeNode1 | null): number {
    if (root === null) {
      return 0; 
    }
  
    if (root.left === null && root.right === null) {
      return 1; 
    }
  
    let leftDepth = root.left ? maxDepth(root.left) : 0;
    let rightDepth = root.right ? maxDepth(root.right) : 0;
  
    return Math.max(leftDepth, rightDepth) + 1;
};
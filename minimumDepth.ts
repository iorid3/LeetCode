
class TreeNode2 {
      val: number
    left: TreeNode2 | null
    right: TreeNode2 | null
    constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
         this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
    }
 }


function minDepth(root: TreeNode2 | null): number {
    if (root === null) {
        return 0; 
      }
    
      if (root.left === null && root.right === null) {
        return 1; 
      }
    
      let leftDepth = root.left ? minDepth(root.left) : Infinity;
      let rightDepth = root.right ? minDepth(root.right) : Infinity;
    
      return Math.min(leftDepth, rightDepth) + 1;
    };
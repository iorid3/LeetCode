

 class TreeNode3 {
     val: number
     left: TreeNode3 | null
     right: TreeNode3 | null
     constructor(val?: number, left?: TreeNode3 | null, right?: TreeNode3 | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
    }
 }


function buildTree(preorder: number[], inorder: number[]): TreeNode3 | null {
    　　if (preorder.length === 0) {
        return null;
      }
    
      const rootVal = preorder[0];
      const root = new TreeNode3(rootVal);
    
      const rootIndexInorder = inorder.indexOf(rootVal);
      const leftInorder = inorder.slice(0, rootIndexInorder);
      const rightInorder = inorder.slice(rootIndexInorder + 1);
    
      const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
      const rightPreorder = preorder.slice(1 + leftInorder.length);
    
      root.left = buildTree(leftPreorder, leftInorder);
      root.right = buildTree(rightPreorder, rightInorder);
    
      return root;
    };
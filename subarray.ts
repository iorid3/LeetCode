function longestSubarray(nums: number[]): number {
    let maxCount = 0; // 最長の非空の連続する1のみから成る部分配列のサイズを格納する変数
    let currentCount = 0; // 現在の連続する1の数を格納する変数
    let hasZero = false; // 配列に0が含まれているかを示すフラグ
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currentCount++;
      } else {
        // 0が現れた場合
        hasZero = true;
        maxCount = Math.max(maxCount, currentCount); // 現在の最大の連続する1の数を更新
        currentCount = 0; // 現在の連続する1の数をリセット
      }
    }
  
    // 最後に配列の末尾が1で終わる場合も考慮して、最大の連続する1の数を更新
    maxCount = Math.max(maxCount, currentCount);
  
    // 配列に0が含まれている場合、1つの要素を削除することにより連続する1のみから成る部分配列のサイズを求める
    // ただし、連続する1のみから成る部分配列が存在しない場合は0を返す
    return hasZero ? maxCount : maxCount - 1;
  }
  
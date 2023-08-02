function longestSubarray(nums: number[]): number {
    let maxCount = 0;
    let currentCount = 0;
    let prevCount = 0;
    let hasZero =false
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currentCount++;
      } else {
        prevCount = currentCount;
        currentCount = 0;
        hasZero = true
      }
  
      maxCount = Math.max(maxCount, prevCount + currentCount);
    }

    if(hasZero){
      return maxCount > 0 ? maxCount : 0;
    }
    else{
       return maxCount > 0 ? maxCount-1 : 0;
    }
  }

longestSubarray([1.0,1,1])
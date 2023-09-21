
function missingNumber(nums) {
    const numSet = new Set(nums);
    const n = nums.length;
  
    for (let i = 0; i <= n; i++) {
      if (!numSet.has(i)) {
        return i;
      }
    }
  
    return -1; 
  }

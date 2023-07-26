function isPalindrome(x: number): boolean {

  if(x < 0 ){
    return false
  }
  const numString = x.toString()
  const numLength = numString.length
  for (let i = 0; i < numLength/2; i++) {
    if(numString[i] !== numString[numLength -1 -i]){
      console.log(false)
      return false
    }
  }
   return true
};

isPalindrome(10)
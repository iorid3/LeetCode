function buddyStrings(s: string, goal: string): boolean {
　  
    if(s === goal){
      return false
    }
     let charArray:string[] = s.split('')
     let storeString: number[]= []
     let count = 0
  
    for(let i = 0; i < s.length; i++){
        for (let j = 0; j < goal.length; j++ ){
            if(s[i]!==goal[j]){
             console.log(charArray[i])
             storeString.push(i)
             count++
            }
            return true
       }
    }
    return true
     
  };

  buddyStrings("abcd","cbad")
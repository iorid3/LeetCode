function isValid(s: string): boolean {
    if(s.length % 2 !== 0 ){
        return false
    }

    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        "(": ")",
        "[": "]",
        "{": "}",
      };

    for (let i = 0; i < s.length; i++) {
        const char :string = s[i] 
        if(char in pairs){
            stack.push(char)
            console.log(stack)
        }
        else{
            const lastOpening = stack.pop()
            console.log(lastOpening)
            if(!lastOpening||pairs[lastOpening] !== char) {
              return false
            }
        } 
    }
    if(stack.length !==0){
        return false 
      }
      else{
        return true
      }
   
  };

  isValid("{{")

// this is the another way

//   const B = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
  
//   const O = Object.keys(B);
//   const C = Object.values(B);
  
//   function isValid(s: string): boolean {
//     const stack: string[] = [];
  
//     if (s.length % 2 !== 0) return false;
  
//     for (let i = 0; i < s.length; i++) {
//       if (O.includes(s[i])) {
//         stack.push(s[i]);
//       } else if (C.includes(s[i])) {
//         if (B[stack.pop() as string] !== s[i]) return false;
//       }
//     }
  
//     return stack.length === 0;
//  }
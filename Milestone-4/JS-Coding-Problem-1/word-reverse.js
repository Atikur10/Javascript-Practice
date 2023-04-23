function wordReverse(text){
   const words = text.split(' ');
   const result = [];
   for(let i = words.length-1; i >=0; i--){
        let element = words[i];
        result.push(element)
       
   }
   const reverse  = result.join(' ');
   console.log(reverse)
}

let str = 'Bangladesh is a small country!';
wordReverse(str)
































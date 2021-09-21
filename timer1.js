'use strick';
const args = process.argv.slice(2);

const timer = (numbers)=>{
  
  if (numbers.length === 0){
    process.stdout.write('\x07');
  }

  //console.log(numbers);
  let mapped = numbers.map(num => Number(num))
  let filtered = mapped.filter(num => num !== NaN && num > 0);

  // console.log(`${mapped} the mapped array`)
  // console.log(`${filtered} the filtered array`)


  for (let i = 0; i < filtered.length; i++) {
    //console.log(numbers[i])
    setTimeout(()=>{
      process.stdout.write('\x07');
    }, filtered[i] * 1000);
    
  }
 

}

timer(args);
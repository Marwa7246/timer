//Implementing a timer which will beep after a specified amount of time has passed using command line arguments

//in order to make the machine perform a system sound, write the following
//process.stdout.write('\x07');
// Unfortunately, I was not able to hear a sound, so let the code print a beep along with the number of seconds.


const args = process.argv.splice(2);

if (args.length) {
  const argsNew = args.filter(element => element > 0 && typeof element !== 'number');
  for (const element of argsNew) {
  
    setTimeout(() => {
      process.stdout.write('\r' + 'beep' + element);
    }, element * 1000);
    if (element === argsNew[argsNew.length - 1]) {
      setTimeout(() => {
        process.stdout.write('\n');
      }, Math.max(...argsNew) * 1000);
    }
  }
}
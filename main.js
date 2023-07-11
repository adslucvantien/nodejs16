function generateRandomNumber() {
    const randomNumber = Math.random();
    return randomNumber < 0.5;
  }
  
  function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = generateRandomNumber();
        if (isSuccess) {
          resolve("True:Task completed successfully");
        } else {
          reject("False: Random number is greater than or equal to 0.5");
        }
      }, 2000);
    });
  }
  
  performTask()
    .then((result) => console.log(result))
    .catch((error) => console.error("Message:", error));
  
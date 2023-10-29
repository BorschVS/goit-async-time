// const logMessage = () => {
//   console.log('Лог при вызове callback функции через 3 секунды');
// };

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('Внутри callback для setTineout');
// }, 2000);

// console.log('После вызова setTimeout');

//

const logger = time => {
  console.log(`не отмененный setTimeout - ${time}`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}

const loggerInterval = time => {
  console.log(`setInterval - ${time} - ${Date.now()}`);
};

const intervalId = setInterval(loggerInterval, 2000, 2000);

if (shouldCancelTimer) {
    clearTimeout(intervalId);
  }
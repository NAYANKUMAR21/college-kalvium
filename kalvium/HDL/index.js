//Promise;
const CustomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const flag = false;
    if (flag) {
      return resolve('Data Fetch Success!');
    }
    return reject('Error');
  }, 2000);
});

CustomPromise.then((res) => {
  console.log(res);
})
  .catch((er) => console.log(er))
  .finally((res) => console.log('finally: Promise Tack Completed'));

//asynchronous Programming

function resolveAfterTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const check = true;
      if (check) {
        return resolve('data fetched');
      }
      return reject('Error');
    }, 2000);
  });
}

async function programmingParadgim() {
  try {
    console.log('before  ');
    const res = await resolveAfterTwoSeconds();
    console.log('After  ', res);
  } catch (er) {
    console.log('Error:', er);
  }
}

programmingParadgim();

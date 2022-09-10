// for dummy purpose only
export function getHome() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
}

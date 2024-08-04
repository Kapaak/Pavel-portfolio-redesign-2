export function getAge(date: string) {
  const today = new Date();
  const birthDate = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function getRandomNumber(min = 0, max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.random() * (max - min + 1) + min;

  return Math.ceil(randomNumber);
}

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", window.location.pathname);
}

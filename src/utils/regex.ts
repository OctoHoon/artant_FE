export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const passwordRegex =
  /^(?!.*(.)\1\1)(?=.*[a-z])(?=.*\d|(?=.*\W)).{8,20}$/;
export const same3word = /^(?!.*(.)\1\1)/;
export const corporateNumberRegex = /^\d{10}$/;

export function ConvertFieldName(value) {
  switch (value) {
    case "firstName":
      return "First name:";
    case "lastName":
      return "Last name:";
    case "email":
      return "Email:";
    case "phoneNumber":
      return "Phone number:";
    default:
      return "Undefined";
  }
}
/**
 * Reset data object
 */
export function ResetData(data = {}) {
  for (const prop of Object.getOwnPropertyNames(data)) {
    delete data[prop];
  }
  return data;
}

export function CalcFileSize(size) {
  let result = [],
    i = 0;
  result[0] = size;

  while (result[0] > 1024 && i < 4) {
    result[0] = Math.round(result[0] / 1024);
    ++i;
  }
  switch (i) {
    case 0:
      result[1] = " B";
      break;
    case 1:
      result[1] = " KB";
      break;
    case 2:
      result[1] = " MB";
      break;
    case 3:
      result[1] = " GB";
      break;
    default:
      result[1] = " B";
      break;
  }
  return result;
}

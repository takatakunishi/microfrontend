const LOCAL_STORAGE_KEY = {
  test: "test_data"
} as const

export function getLocalStorageData(key: keyof typeof LOCAL_STORAGE_KEY) {
  return localStorage.getItem(LOCAL_STORAGE_KEY[key]);
}

export function setLocalStorageData(key: keyof typeof LOCAL_STORAGE_KEY, data: string) {
  localStorage.setItem(LOCAL_STORAGE_KEY[key], data);
}
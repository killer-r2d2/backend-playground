export function getCurrentTime() {
  return new Date().toISOString();
}

export function echoData<T>(data: T) {
  return {
    received: data,
    timestamp: new Date().toISOString()
  };
}

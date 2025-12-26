export function getCurrentTime() {
  return new Date().toISOString();
}

export function echoData<T>(data: T) {
  return {
    received: data,
    timestamp: new Date().toISOString()
  };
}

export function getHealthStatus() {
  const uptimeSeconds = Math.floor(process.uptime());

  return {
    status: "ok",
    uptimeSeconds,
    timestamp: new Date().toISOString()
  };
}

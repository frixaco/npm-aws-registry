export interface API_URL {
  base: string;
  route: string;
  params: string;
}

export function getPort(apiUrl: API_URL): number {
  console.log("=== API_URL", apiUrl);
  return 3000;
}

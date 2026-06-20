export async function devDelay(ms) {
  if (import.meta.env.DEV) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
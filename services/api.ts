import axios from 'axios';

export async function fetchWelcomeCopy(): Promise<string> {
  // Simulate network latency
  await new Promise(r => setTimeout(r, 600));

  // Real apps would call backend here; for demo we hard-code a string
  // so the automation can suggest wrapping this call behind a flag.
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => `Welcome – ${res.data.title}`)
    .catch(() => 'Welcome Gambler, Make Your Game Legendary.');
}

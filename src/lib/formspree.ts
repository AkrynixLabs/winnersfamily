export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgoovwzo'

export async function submitToFormspree(form: HTMLFormElement): Promise<void> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) {
    throw new Error('Formspree submission failed')
  }
}

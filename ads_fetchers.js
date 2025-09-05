export async function fetchWeeklyAds() {
  try {
    // You uploaded ads.json at the repo root
    const res = await fetch('./ads.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch weekly ads:', err);
    return { Aldi: [], Publix: [] };
  }
}

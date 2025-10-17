export default function manifest() {
  return {
    name: 'The Tales of Annapurna - Epic Mythological Adventure Game',
    short_name: 'Tales of Annapurna',
    description: 'Experience The Tales of Annapurna, a cinematic action-adventure game set in ancient Kashi. Join Sati\'s divine journey through mythological India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FF5F00',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

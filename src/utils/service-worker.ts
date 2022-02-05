export const enableServiceWorker = () => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    console.log('sw');
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

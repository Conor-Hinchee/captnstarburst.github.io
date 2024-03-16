// THIS IS A BLOCKING SCRIPT ANYTHING ADDED HERE WILL ADD TO THE PAGE LOAD TIME


const useDarkMode = () => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

const useLightMode = () => {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
};

const initTheme = () => {
  if(localStorage.getItem('theme') === 'dark') {
    useDarkMode();
    return;
  }
  
  if(localStorage.getItem('theme') === 'light') {
    useLightMode();
    return;
  }
  
  if(window.matchMedia && !localStorage.getItem('theme')) {
    // FIRST TIME USER HAS AN OS PREFERENCE of Dark set to Dark
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      useDarkMode();
      return;
    }
  }

  useLightMode();
};

// LIGHT/DARK MODE ARE HERE TO PREVENT FOUC
initTheme();


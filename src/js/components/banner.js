const Tablet_Width = 768;
const Mobile_Width = 480;

const getDeviceType = (screenWidth) => {
    if(screenWidth > Tablet_Width){
        return 'desktop';
    } else if(screenWidth <= Tablet_Width && screenWidth > Mobile_Width){
        return 'tablet';
    } else if(screenWidth <= Mobile_Width){
        return 'mobile';
    }
};

const setTheme = (event) => {
    console.log(event.target.dataset.setTheme);
    const setTheme = event.target.dataset.setTheme;

    if(setTheme === 'dark'){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');

        // set the theme to dark, reverse the icon to light
        const lightModeItem = document.querySelector('#lightModeItem');

        const darkModeItem = document.querySelector('#darkModeItem');

        lightModeItem.classList.toggle('hidden');
        lightModeItem.classList.toggle('flex');
        darkModeItem.classList.toggle('hidden');
        darkModeItem.classList.toggle('flex');
    }

    if(setTheme === 'light'){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');

        // set the theme to light, reverse the icon to dark
        const lightModeItem = document.querySelector('#lightModeItem');

        const darkModeItem = document.querySelector('#darkModeItem');

        lightModeItem.classList.toggle('hidden');
        lightModeItem.classList.toggle('flex');
        darkModeItem.classList.toggle('hidden');
        darkModeItem.classList.toggle('flex');
    }

};

const setLayoutIconAriaPressed = (layout) => {
    const desktopLayoutButton = document.querySelector('#desktopLayoutButton');
    const tabletLayoutButton = document.querySelector('#tabletLayoutButton');
    const mobileLayoutButton = document.querySelector('#mobileLayoutButton');

    if(layout === 'desktop'){
        desktopLayoutButton.setAttribute('aria-pressed', 'true');
        tabletLayoutButton.setAttribute('aria-pressed', 'false');
        mobileLayoutButton.setAttribute('aria-pressed', 'false');
    }
    if(layout === 'tablet'){
        desktopLayoutButton.setAttribute('aria-pressed', 'false');
        tabletLayoutButton.setAttribute('aria-pressed', 'true');
        mobileLayoutButton.setAttribute('aria-pressed', 'false');
    }
    if(layout === 'mobile'){
        desktopLayoutButton.setAttribute('aria-pressed', 'false');
        tabletLayoutButton.setAttribute('aria-pressed', 'false');
        mobileLayoutButton.setAttribute('aria-pressed', 'true');
    }
};

const handleDesktopIconClick = () => {
    setLayoutIconAriaPressed('desktop');
};

const handleTabletIconClick = () => { 
   setLayoutIconAriaPressed('tablet');
};

const handleMobileIconClick = () => {
    setLayoutIconAriaPressed('mobile');
};

const resizeListener = () => {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const screenWidth = window.innerWidth;
            const deviceType = getDeviceType(screenWidth);
            setLayoutIconAriaPressed(deviceType);
        }, 250);
    });

};

const setClickListeners = () => {
    const editPageButton = document.querySelector('#editPageButton');
    editPageButton.addEventListener('click', () => {});

    const desktopLayoutButton = document.querySelector('#desktopLayoutButton');
    const tabletLayoutButton = document.querySelector('#tabletLayoutButton');
    const mobileLayoutButton = document.querySelector('#mobileLayoutButton');

    desktopLayoutButton.addEventListener('click', handleDesktopIconClick);
    tabletLayoutButton.addEventListener('click', handleTabletIconClick);
    mobileLayoutButton.addEventListener('click', handleMobileIconClick);

    const darkModeItem = document.querySelector('#darkModeItem');
    const darkModeButton = darkModeItem.firstElementChild;
    darkModeButton.addEventListener('click', setTheme);
    
    const lightModeItem = document.querySelector('#lightModeItem');
    const lightModeButton = lightModeItem.firstElementChild;
    lightModeButton.addEventListener('click', setTheme);
};

const initBanner = () => {
    // initial screen width
    const screenWidth = window.innerWidth;

    const deviceType = getDeviceType(screenWidth);
    setLayoutIconAriaPressed(deviceType);

    resizeListener();
    setClickListeners();
};


export default initBanner;

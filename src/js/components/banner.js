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

const changeTheme = (event = {}, override = '' ) => {
    const { setTheme } = event?.target?.dataset || '';

    if(override === 'dark' || setTheme === 'dark'){
        console.log('setting dark theme');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');

        // set the theme to dark, reverse the icon to light
        const lightModeItem = document.querySelector('#lightModeItem');
        const darkModeItem = document.querySelector('#darkModeItem');

        if(lightModeItem.classList.contains('hidden')){
            lightModeItem.classList.toggle('hidden');
            lightModeItem.classList.toggle('flex');
            darkModeItem.classList.toggle('hidden');
            darkModeItem.classList.toggle('flex');

        }
    }

    if(override === 'light' || setTheme === 'light'){
        console.log('setting light theme');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');

        // set the theme to light, reverse the icon to dark
        const lightModeItem = document.querySelector('#lightModeItem');

        const darkModeItem = document.querySelector('#darkModeItem');

        if(darkModeItem.classList.contains('hidden')){
            lightModeItem.classList.toggle('hidden');
            lightModeItem.classList.toggle('flex');
            darkModeItem.classList.toggle('hidden');
            darkModeItem.classList.toggle('flex');
        }
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
    darkModeButton.addEventListener('click', changeTheme);
    
    const lightModeItem = document.querySelector('#lightModeItem');
    const lightModeButton = lightModeItem.firstElementChild;
    lightModeButton.addEventListener('click', changeTheme);
};

const initBanner = () => {
    const currentTheme = localStorage.getItem('theme');
    changeTheme(null, currentTheme);
    // initial screen width
    const screenWidth = window.innerWidth;

    const deviceType = getDeviceType(screenWidth);
    setLayoutIconAriaPressed(deviceType);

    resizeListener();
    setClickListeners();
};


export default initBanner;

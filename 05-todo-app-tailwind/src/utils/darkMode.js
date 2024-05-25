if (
    localStorage.theme === 'dark' || (!("theme" in localStorage)) && window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Whenever the user explicity chooses light mode
localStorage.theme = "light";

localStorage.theme = "dark";

localStorage.removeItem("theme");
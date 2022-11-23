const strollmap = {
    "home": {
        type: "page",
        hname: "Home",
        href: "/pages/home.html",
        nav: {
            right: "about",
            down: "ds",
            left: "projects",
        },
    },
    "about": {
        type: "page",
        hname: "About",
        href: "/pages/about.html",
        nav: {
            left: "home",
            right: "facts",
            down: "resume",
        },
    },
    "facts": {
        type: "page",
        hname: "Facts",
        href: "/pages/facts.html",
        nav: {
            left: "about",
        },
    },
    "resume": {
        type: "link",
        hname: "Resume ⧉",
        href: "/media/resume.pdf",
    },
    "ds": {
        type: "link",
        hname: "Company ⧉",
        href: "https://distributedspectrum.com",
    },
    "projects": {
        type: "page",
        hname: "Projects",
        href: "/pages/projects.html",
        nav: {
            right: "home",
            down: "github",
        },
    },
    "github": {
        type: "link",
        hname: "GitHub ⧉",
        href: "https://github.com/iostruhl",
    },
    "notfound": {
        type: "page",
        href: "/pages/404.html",
        hname: "404",
        nav: {
            left: "home",
        },
    },
    "print": {
        type: "link",
        hname: "Public Print",
        href: "https://drive.google.com/drive/folders/1z0xEB2a5ensx2BWbXJU7MUGH7AxXlUbS?usp=share_link",
    },
};

function begin() {
    window.stroll = new Stroll(strollmap, {
        index: "home",
        titleBase: "Isaac Struhl",
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", begin);
} else {
    begin();
}

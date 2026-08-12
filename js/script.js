/*MOBILE NAVBAR */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navLinksItems = document.querySelectorAll(".nav-link");

navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/*ACTIVE NAVIGATION */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.id;
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

/*DSA STATS */
async function updateDSAStats() {
    try {
        const gfgResponse = await fetch(
            "https://gfg-stats.tashif.codes/vedanshjvd1v"
        );

        const gfgData = await gfgResponse.json();

        const gfgSolved = gfgData.data.totalSolved;

        const leetcodeResponse = await fetch(
            "https://leetcode-api-pied.vercel.app/user/Vedanshhh"
        );

        const leetcodeData = await leetcodeResponse.json();

        const leetcodeSolved = leetcodeData.submitStats.acSubmissionNum
            .find(item => item.difficulty === "All").count;

        const totalSolved = gfgSolved + leetcodeSolved;

        document.getElementById("dsa-solved").textContent =
            totalSolved + "+";

    } catch (error) {
        console.log("Unable to fetch coding stats:", error);
    }
}

updateDSAStats();


/*GITHUB STATS */
async function updateGitHubStats() {
    try {
        const response = await fetch(
            "https://github-contributions-api.jogruber.de/v4/vedansh-16?y=last"
        );

        const data = await response.json();

        const contributions = data.total.lastYear;

        document.getElementById("github-contributions").textContent =
            contributions + "+";

    } catch (error) {
        console.error("GitHub stats error:", error);
    }
}

updateGitHubStats();
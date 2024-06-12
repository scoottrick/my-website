const baseDir = 'portfolio-images';
let projectId = 0;

class TechList {
    static get ionic() {
        return this.createTech('ionic', 'Ionic Framework', 'https://ionicframework.com/');
    }
    static get angular() {
        return this.createTech('angular', 'Angular', 'https://angular.dev/');
    }
    static get android() {
        return this.createTech('android', 'Android');
    }
    static get ios() {
        return this.createTech('ios', 'iOS');
    }
    static get docker() {
        return this.createTech('docker', 'Docker', 'https://www.docker.com/');
    }
    static get aws() {
        return this.createTech('aws', 'AWS', 'https://aws.amazon.com/');
    }
    static get html() {
        return this.createTech('html', 'HTML');
    }
    static get css() {
        return this.createTech('css', 'CSS');
    }
    static get sass() {
        return this.createTech('sass', 'Sass', 'https://sass-lang.com/');
    }
    static get tailwind() {
        return this.createTech('tailwind', 'Tailwind CSS', 'https://tailwindcss.com/');
    }
    static get typescript() {
        return this.createTech('typescript', 'Typescript', 'https://www.typescriptlang.org/');
    }
    static get objectivec() {
        return this.createTech('objectivec', 'Objective-C');
    }
    static get java() {
        return this.createTech('java', 'Java');
    }
    static get javascript() {
        return this.createTech('javascript', 'JavaScript');
    }
    static get xcode() {
        return this.createTech('xcode', 'Xcode', 'https://developer.apple.com/xcode/');
    }
    static get vscode() {
        return this.createTech('vscode', 'VS Code', 'https://code.visualstudio.com/');
    }
    static get react() {
        return this.createTech('react', 'React', 'https://react.dev/');
    }
    static get googleMaps() {
        return this.createTech(
            'googlemaps',
            'Google Maps Platform',
            'https://developers.google.com/maps'
        );
    }
    static get ngrx() {
        return this.createTech('ngrx', 'NGRX', 'https://ngrx.io/');
    }

    static createTech(logo, text, url) {
        return { logo: `/logos/${logo}.svg`, text, url };
    }
}

// CLEANSLATE
const edesign = createProjectData('Herff Jones eDesign', 'CleanSlate Technology Group', 'edesign', {
    project:
        'eDesign is a service used by schools to create yearbooks. Students and staff can use eDesign for everything in the creation process including uploading image libraries, assigning tasks, designing pages and ordering yearbooks.',
    roles: [
        'Angular and Fabric.js to create HTML canvas manipulation controls',
        'Established NGRX patterns to allow interaction between Angular components and Fabric.js',
        'Implemented an RXJS-based tool-selection system',
        'Diagnosed and fixed obscure bugs and defects'
    ],
    techs: [TechList.angular, TechList.typescript, TechList.ngrx, TechList.aws, TechList.docker]
});

// DIGITAL CORPS
const digitalCorps = 'Digital Corps';
const mapApp = createProjectData('Ball State Campus Map', digitalCorps, 'bsu-map', {
    project:
        'The Ball State Campus Map app provides information to help students and visitors find their way around the university. Users can quickly find classrooms, dining halls, parking, ATMs, restrooms or even the nearest university shuttle.',
    roles: [
        'Worked closely with our design team to refine the interface of the Android app',
        'Integrated the Google Maps API to mark locations across the campus',
        'Improved map interactions with search suggestions and location filters',
        'Created location details views for users to find important information'
    ],
    techs: [TechList.android, TechList.java, TechList.googleMaps]
});
const iprApp = createProjectData('Indiana Public Radio', digitalCorps, 'ipr', {
    project:
        'The Indiana Public Radio app allows users to interact with IPR content from anywhere. Users can listen to the live station, catch up on local shows, see community news, view the upcoming schedule and receive notifications when their favorite shows are about to begin.',
    roles: [
        'Created a schedule page where users could subscribe to notifications for IPR shows',
        'Implemented unified media controls to handle audio for both live and recorded shows',
        'Synchronized audio controls from the recorded shows list with the main media player',
        'Refined UI elements based on feedback from our design team'
    ],
    techs: [TechList.ios, TechList.objectivec, TechList.xcode]
});
const perryvilleApp = createProjectData('Perryville Battlefield', digitalCorps, 'perryville', {
    project:
        'The Perryville Battlefield app enhances the experience of visitors to Perryville Battlefield State Historic Site. The app provides a map of the park as well as additional details and historical context for the various stops along a guided tour of the battlefield.',
    roles: [
        'Implemented a map view with an image overlay showing the park and its trails',
        'Created pages for a guided tour where users could read or listen to narrated details about each site',
        'Marked important locations within the park using the Google Maps API',
        'My first Android project, though I worked on both Android and iOS apps'
    ],
    techs: [TechList.android, TechList.java, TechList.ios, TechList.objectivec, TechList.googleMaps]
});
const parksApp = createProjectData('Indiana State Parks', digitalCorps, 'in-parks', {
    project:
        "This app provides an overview and information about a handful of Indiana's state parks. Users can use the app to find park details including a map, background information, photos and notable sites within the park.",
    roles: [
        'Used Google Maps to implement park maps with pins to denote popular areas within them',
        'Created a gallery view to show park photos',
        'Implemented simple controls for users to listen to local audio files',
        'My first iOS app'
    ],
    techs: [TechList.ios, TechList.objectivec, TechList.xcode, TechList.googleMaps]
});

// VIAVI
const mobileTechApp = createProjectData('Mobile Tech', 'Viavi Solutions, Inc', 'mobile-tech', {
    project:
        "Mobile Tech facilitates communications between Viavi's OneExpert testing devices and the cloud. The app deploys configurations and settings from the cloud to testing devices and submits completed tests back to the cloud.",
    roles: [
        'Created file upload and download queues',
        'Implemented a browser for exploring the file systems of connected test instruments',
        'Designed responsive Ionic layouts to make apps usable across phones and tablets',
        'Adapted Mobile Tech components to support more test instruments in CertiFi'
    ],
    techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
});

// PERSONAL
const falloutApp = createProjectData('Fallout 4 Buddy', null, 'fallout', {
    link: 'https://fallout-4-buddy.web.app/',
    project:
        'Fallout 4 is a massive game with plenty of things to do and find. I built this web app to simplify my campaigns by allowing me to keep track of which collectible items I have found and the ones still scattered across the Wasteland. I also included a tool to help hack the locked terminals throughout the game.',
    roles: [
        'Created checklists of collectible items with their in-game locations and effects',
        'Used browser local storage to save collection details',
        'Implemented a tool to solve terminal hacking puzzles',
        'My first Angular progressive web app',
        'Designed with Angular Material'
    ],
    techs: [TechList.angular, TechList.typescript, TechList.html, TechList.css]
});
const golfApp = createProjectData('Round of Golf', null, 'golf', {
    link: 'https://round-of-golf.web.app/',
    project:
        "This web app was built to be the simplest way to keep track of scores for a round of golf. It's as simple as I could make it. All that's needed to create a scorecard are the names of 1-4 golfers and a choice of either 9 or 18 holes. Scorecards are then saved as they are updated and can be revisited via a history feature.",
    roles: [
        'Implemented a simple scorecard with a grid of input elements',
        'Created a round history feature using score data from local storage',
        'My first React project and progressive web app',
        'Designed from scratch with Tailwind'
    ],
    techs: [TechList.react, TechList.javascript, TechList.tailwind, TechList.html]
});

const projects = [
    edesign,
    mobileTechApp,
    mapApp,
    iprApp,
    perryvilleApp,
    parksApp,
    falloutApp,
    golfApp
];

export default projects;

/**
 *
 * @param {string} name
 * @param {string} path
 * @param {Object} details
 * @returns {Object}
 */
function createProjectData(name, group, path, details) {
    if (!details) {
        throw new Error('cannont create portfolio data');
    }
    const { project, techs, roles, link } = details;
    return {
        id: ++projectId,
        link,
        name,
        group,
        thumbnail: `/${baseDir}/${path}/thumb.jpg`,
        images: [],
        description: project,
        roles: roles || [],
        techs: techs
    };
}

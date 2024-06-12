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
const cs = 'CleanSlate Technology Group';
const edesign = createProjectData('Herff Jones eDesign', cs, 'edesign', {
    project:
        'eDesign is a service used by schools to create yearbooks. Students and staff can use eDesign for everything in the creation process including uploading image libraries, assigning tasks, designing pages and ordering yearbooks.',
    role: 'My work on eDesign was concentrated on the page design system, where we used Angular and Fabric.js to implement features for adding and manipulating text, shapes, and images on an HTML canvas. I was heavily involved in creating the core tool-selection system and establishing patterns for using Angular components to control Fabric.js actions. Later in the project, I also played an important role finding and fixing obscure bugs.',
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
    role: 'I was part of the Android team during our efforts to redesign and overhaul the campus map app. I worked closely with our design team to improve the search interface and map interactions. I also worked with the Google Maps API to show locations to users based on the filters they applied.',
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
    role: "I worked on the iOS version of the IPR app before its initial launch. I implemented local notifications that users could set from the IPR schedule and refined the app's design based on feedback from our design team. My most difficult task was managing an audio player with controls that could be used for listening to the live IPR broadcast or recordings of previous shows.",
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
    role: "While I worked on both the Android and iOS versions of the Perryville Battlefield app, it's more notable to me because it was my first Android project. I also used the Google Maps API to mark important sites within the park. I also created pages for stops along a guided tour where users could read or listen to an audio recording of details about the site.",
    roles: [
        'My first Android project, though I worked on both Android and iOS apps',
        'Implemented a map view with an image overlay showing the park and its trails',
        'Created pages for a guided tour where users could read or listen to narrated details about each site',
        'Marked important locations within the park using the Google Maps API'
    ],
    techs: [TechList.android, TechList.java, TechList.ios, TechList.objectivec, TechList.googleMaps]
});
const parksApp = createProjectData('Indiana State Parks', digitalCorps, 'in-parks', {
    project:
        "This app provides an overview and information about a handful of Indiana's state parks. Users can use the app to find park details including a map, background information, photos and notable sites within the park.",
    role: 'The Indiana State Parks app marks my first effort on an iOS project. As a whole, I built the app with simple navigation and interfaces. Notable features I implemented include a photo gallery and a media player for local audio files. I also integrated Google Maps to display park maps with pins denoting popular areas within each park.',
    roles: [
        'My first iOS app',
        'Used Google Maps to implement park maps with pins to denote popular areas within them',
        'Created a gallery view to show park photos',
        'Implemented simple controls for users to listen to local audio files'
    ],
    techs: [TechList.ios, TechList.objectivec, TechList.xcode, TechList.googleMaps]
});

// VIAVI
const mobileTechApp = createProjectData('Mobile Tech', 'Viavi Solutions, Inc', 'mobile-tech', {
    project:
        "Mobile Tech facilitates communications between Viavi's OneExpert testing devices and the cloud. The app deploys configurations and settings from the cloud to testing devices and submits completed tests back to the cloud.",
    role: 'We used Ionic and Angular to create the Mobile Tech apps for Android and iOS. Some features that I contributed include, a file system browser, file upload/deployment queues and connection status indicators. Additionally, I was often tasked with adjusting interface designs to make them usable for both phones and tablets.',
    roles: [
        'Created file upload and download queues',
        'Implemented a browser for exploring the file systems of connected test instruments',
        'Designed responsive Ionic layouts to make apps usable across phones and tablets',
        'Adapted Mobile Tech components to support more test instruments in CertiFi'
    ],
    techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
});
// const certifiApp = createProjectData('Certifi', 'Viavi Solutions, Inc', 'certifi', {
//     project:
//         "Much like the Mobile Tech app, CertiFi acts as a bridge between Viavi's network testing equipment and the cloud. CertiFi was made to support more test instruments, but, similarly to Mobile Tech, it mainly passes configurations, settings and test data back and forth.",
//     role: 'The Android and iOS versions of the CertiFi closely mimic the Mobile Tech apps but with more dynamic interfaces to support multiple kinds of test instruments. We reused many ideas and components from Mobile Tech but adapted them to show the relevant information for each supported device.',
//     techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
// });

// PERSONAL
const falloutApp = createProjectData('Fallout 4 Buddy', null, 'fallout', {
    project:
        'Fallout 4 is a massive game with plenty of things to do and find. I built this web app to simplify my campaigns by allowing me to keep track of which collectible items I have found and the ones still scattered across the Wasteland. I also included a tool to help hack the locked terminals throughout the game.',
    role: "My Fallout 4 companion app is the first Progressive Web App that I made with Angular. I implemented checklists of the game's collectible items that are saved in local storage and include information about where the items can be found and the effects they have. The terminal hacking feature allows users to input the possible passwords from in-game terminals and filters out the incorrect options until the correct password is found.",
    roles: [],
    techs: [TechList.angular, TechList.typescript, TechList.html, TechList.css]
});
const golfApp = createProjectData('Round of Golf', null, 'golf', {
    project:
        "This web app was built to be the simplest way to keep track of scores for a round of golf. It's as simple as I could make it. All that's needed to create a scorecard are the names of 1-4 golfers and a choice of either 9 or 18 holes. Scorecards are then saved as they are updated and can be revisited via a history feature.",
    role: "I created this app with the goal of giving myself a quick and easy way to keep track of golf scores while playing with friends, but I used the project as a way to familiarize myself with React and Tailwind as well. Because it's a Progressive Web App that stores scorecard data in local storage, it has almost no loading times and can be used completely offline.",
    roles: [],
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
    const { project, role, techs, roles } = details;
    return {
        id: ++projectId,
        name,
        group,
        thumbnail: `/${baseDir}/${path}/thumb.jpg`,
        images: [],
        description: project,
        role: role,
        roles: roles || [],
        techs: techs
    };
}

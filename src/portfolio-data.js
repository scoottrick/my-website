const baseDir = 'portfolio-images';
let sectionId = 0;
let projectId = 0;

class TechList {
    static get ionic() {
        return this.createTech('ionic.svg', 'Ionic Framework', 'https://ionicframework.com/');
    }
    static get angular() {
        return this.createTech('angular.svg', 'Angular', 'https://angular.dev/');
    }
    static get android() {
        return this.createTech('android.svg', 'Android');
    }
    static get ios() {
        return this.createTech('ios.svg', 'iOS');
    }
    static get docker() {
        return this.createTech('docker.svg', 'Docker', 'https://www.docker.com/');
    }
    static get aws() {
        return this.createTech('aws.svg', 'AWS', 'https://aws.amazon.com/');
    }
    static get html() {
        return this.createTech('html.svg', 'HTML');
    }
    static get css() {
        return this.createTech('css.svg', 'CSS');
    }
    static get sass() {
        return this.createTech('sass.svg', 'Sass', 'https://sass-lang.com/');
    }
    static get tailwind() {
        return this.createTech('tailwind.svg', 'Tailwind CSS', 'https://tailwindcss.com/');
    }
    static get typescript() {
        return this.createTech('typescript.svg', 'Typescript', 'https://www.typescriptlang.org/');
    }
    static get objectivec() {
        return this.createTech('objectivec.svg', 'Objective-C');
    }
    static get java() {
        return this.createTech('java.svg', 'Java');
    }
    static get javascript() {
        return this.createTech('javascript.svg', 'JavaScript');
    }
    static get xcode() {
        return this.createTech('xcode.svg', 'Xcode', 'https://developer.apple.com/xcode/');
    }
    static get vscode() {
        return this.createTech('vscode.svg', 'VS Code', 'https://code.visualstudio.com/');
    }
    static get react() {
        return this.createTech('react.svg', 'React', 'https://react.dev/');
    }
    static get googleMaps() {
        return this.createTech(
            'googlemaps.svg',
            'Google Maps Platform',
            'https://developers.google.com/maps'
        );
    }

    static createTech(logo, text, url) {
        return { logo, text, url };
    }
}

const mockProjectDescription =
    "Here's how the project worked. It was a thing built with this, that, and those tools. It was...pretty cool.";
const mockRoleDescription =
    'These are the things that I did to contribute. I worked mainly with this tool andwith some people.';
const mockTechs = [TechList.ionic, TechList.angular, TechList.ios, TechList.android, TechList.html];

// CLEANSLATE
const edesign = createProjectData('Herff Jones eDesign', 'edesign', 0, 0, {
    project: '',
    role: '',
    techs: [TechList.angular, TechList.typescript, TechList.aws, TechList.docker]
});
const cleanslate = createSection('CleanSlate Technology Group', [edesign]);

// DIGITAL CORPS
const mapApp = createProjectData('Ball State Campus Map', 'bsu-map', 6, 1, {
    project:
        'The Ball State Campus Map app provides information to help students and visitors find their way around the university. Users can quickly find classrooms, dining halls, parking, ATMs, restrooms or even the nearest university shuttle.',
    role: 'I was part of the Android team during our efforts to redesign and overhaul the campus map app. I worked closely with our design team to improve the search interface and map interactions. I also worked with the Google Maps API to show locations to users based on the filters they applied.',
    techs: [TechList.android, TechList.java, TechList.googleMaps]
});
const iprApp = createProjectData('Indiana Public Radio', 'ipr', 1, 1, {
    project:
        'The Indiana Public Radio app allows users to interact with IPR content from anywhere. Users can listen to the live station, catch up on local shows, see community news, view the upcoming schedule and receive notifications when their favorite shows are about to begin.',
    role: "I worked on the iOS version of the IPR app before its initial launch. I implemented local notifications that users could set from the IPR schedule and refined the app's design based on feedback from our design team. My most difficult task was managing an audio player with controls that could be used for listening to the live IPR broadcast or recordings of previous shows.",
    techs: [TechList.ios, TechList.objectivec, TechList.xcode]
});
const perryvilleApp = createProjectData('Perryville Battlefield', 'perryville', 14, 4, {
    project:
        'The Perryville Battlefield app enhances the experience of visitors to Perryville Battlefield State Historic Site. The app provides a map of the park as well as additional details and historical context for the various stops along a guided tour of the battlefield.',
    role: "While I worked on both the Android and iOS versions of the Perryville Battlefield app, it's more notable to me because it was my first Android project. I also used the Google Maps API to mark important sites within the park. I also created pages for stops along a guided tour where users could read or listen to an audio recording of details about the site.",
    techs: [TechList.android, TechList.java, TechList.ios, TechList.objectivec, TechList.googleMaps]
});
const parksApp = createProjectData('Indiana State Parks', 'in-parks', 6, 6, {
    project:
        "This app provides an overview and information about a handful of Indiana's state parks. Users can use the app to find park details including a map, background information, photos and notable sites within the park.",
    role: 'The Indiana State Parks app marks my first effort on an iOS project. As a whole, I built the app with simple navigation and interfaces. Notable features I implemented include a photo gallery and a media player for local audio files. I also integrated Google Maps to display park maps with pins denoting popular areas within each park.',
    techs: [TechList.ios, TechList.objectivec, TechList.xcode, TechList.googleMaps]
});
const digitalCorps = createSection('Digital Corps @ Ball State', [
    mapApp,
    iprApp,
    perryvilleApp,
    parksApp
]);

// VIAVI
const mobileTechApp = createProjectData('Mobile Tech', 'mobile-tech', 32, 7, {
    project:
        "Mobile Tech facilitates communications between Viavi's OneExpert testing devices and the cloud. The app deploys configurations and settings from the cloud to testing devices and submits completed tests back to the cloud.",
    role: 'We used Ionic and Angular to create the Mobile Tech apps for Android and iOS. Some features that I contributed include, a file system browser, file upload/deployment queues and connection status indicators. Additionally, I was often tasked with adjusting interface designs to make them usable for both phones and tablets.',
    techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
});
const certifiApp = createProjectData('Certifi', 'certifi', 11, 4, {
    project: '',
    role: '',
    techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
});
const viavi = createSection('Viavi Solutions, Inc', [mobileTechApp, certifiApp]);

// PERSONAL
const falloutApp = createProjectData('Fallout 4 Buddy', 'fallout', 1, 1, {
    project:
        'Fallout 4 is a massive game with plenty of things to do and find. I built this web app to simplify my campaigns by allowing me to keep track of which collectible items I have found and the ones still scattered across the Wasteland. I also included a tool to help hack the locked terminals throughout the game.',
    role: "My Fallout 4 companion app is the first Progressive Web App that I made with Angular. I implemented checklists of the game's collectible items that are saved in local storage and include information about where the items can be found and the effects they have. The terminal hacking feature allows users to input the possible passwords from in-game terminals and filters out the incorrect options until the correct password is found.",
    techs: [TechList.angular, TechList.typescript, TechList.html, TechList.css]
});
const golfApp = createProjectData('Round of Golf', 'golf', 1, 1, {
    project:
        "This web app was built to be the simplest way to keep track of scores for a round of golf. It's as simple as I could make it. All that's needed to create a scorecard are the names of 1-4 golfers and a choice of either 9 or 18 holes. Scorecards are then saved as they are updated and can be revisited via a history feature.",
    role: "I created this app with the goal of giving myself a quick and easy way to keep track of golf scores while playing with friends, but I used the project as a way to familiarize myself with React and Tailwind as well. Because it's a Progressive Web App that stores scorecard data in local storage, it has almost no loading times and can be used completely offline.",
    techs: [TechList.react, TechList.javascript, TechList.tailwind, TechList.html]
});
const personalProjects = createSection('Personal Projects', [falloutApp, golfApp]);

export default [cleanslate, viavi, digitalCorps, personalProjects];

/**
 *
 * @param {String} title
 * @param {Array} projects
 * @returns {Object}
 */
function createSection(title, projects) {
    return { id: ++sectionId, title, projects };
}

/**
 *
 * @param {string} name
 * @param {string} path
 * @param {number} imageCount
 * @param {number} thumbnailIndex
 * @returns {Object}
 */
function createProjectData(name, path, imageCount, thumbnailIndex, details) {
    const description = details ? details.project : mockProjectDescription;
    const role = details ? details.role : mockRoleDescription;
    const techs = details ? details.techs : mockTechs;
    return {
        id: ++projectId,
        name,
        images: createImageArray(path, imageCount),
        thumbnail: createFilename(path, thumbnailIndex),
        description: description,
        myRole: role,
        techs: techs
    };
}

/**
 *
 * @param {string} path
 * @param {number} count
 * @returns {Array}
 */
function createImageArray(path, count) {
    const filenames = [];
    for (let i = 0; i < count; i++) {
        filenames.push(createFilename(path, i + 1));
    }
    return filenames;
}

function createFilename(path, i) {
    return `${baseDir}/${path}/${path}-${i}.jpg`;
}

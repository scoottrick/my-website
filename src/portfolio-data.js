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

    static createTech(logo, text, url) {
        return { logo, text, url };
    }
}

const mockProjectDescription =
    "Here's how the project worked. It was a thing built with this, that, and those tools. It was...pretty cool.";
const mockRoleDescription =
    'These are the things that I did to contribute. I worked mainly with this tool andwith some people.';
const mockTechs = [TechList.ionic, TechList.angular, TechList.ios, TechList.android, TechList.html];

const digitalCorps = createSection('Digital Corps @ Ball State', [
    createProjectData('Ball State Campus Map', 'bsu-map', 6, 1),
    createProjectData('Indiana Public Radio', 'ipr', 1, 1),
    createProjectData('Perryville Battlefield', 'perryville', 14, 1),
    createProjectData('Indiana State Parks', 'in-parks', 6, 1)
]);

const mobileTechDetails = {
    project:
        "Mobile Tech facilitates communications between Viavi's OneExpert testing devices and the cloud. The app deploys configurations and settings from the cloud to testing devices and submits completed tests back to the cloud.",
    role: 'We used Ionic and Angular to create the Mobile Tech apps for Android and iOS. Some features that I contributed include, a file system browser, file upload/deployment queues and connection status indicators. Additionally, I was often tasked with adjusting interface designs to make them usable for both phones and tablets.',
    techs: [TechList.ionic, TechList.angular, TechList.typescript, TechList.android, TechList.ios]
};
const viavi = createSection('Viavi Solutions, Inc', [
    createProjectData('Mobile Tech', 'mobile-tech', 32, 1, mobileTechDetails),
    createProjectData('Certifi', 'certifi', 11, 1)
]);

export default [viavi, digitalCorps];

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

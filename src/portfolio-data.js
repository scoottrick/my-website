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
        return this.createTech('android.svg', 'Android', '');
    }

    static get ios() {
        return this.createTech('ios.svg', 'iOS', '');
    }

    static get docker() {
        return this.createTech('docker.svg', 'Docker', '');
    }
    static get aws() {
        return this.createTech('aws.svg', 'AWS', '');
    }

    static get html() {
        return this.createTech('html.svg', 'HTML', '');
    }

    static get css() {
        return this.createTech('css.svg', 'CSS', '');
    }

    static get sass() {
        return this.createTech('sass.svg', 'Sass', '');
    }

    static get tailwind() {
        return this.createTech('tailwind.svg', 'Tailwind CSS', '');
    }

    static get typescript() {
        return this.createTech('typescript.svg', 'Typescript', '');
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
        "Mobile Tech facilitates communications between Viavi's OneExpert testing devices and the cloud. The app allows users to deploy configurations and settings from the cloud to their testing devices and passes completed test data back to the cloud, allowing users to attach items such as images or notes.",
    role: 'My team used Ionic and Angular to create the Mobile Tech apps for Android and iOS devices. Some features that I contributed include, a file system browser, file upload/deployment queues and connection status indicators. Additionally, I was often tasked with adjusting the design of interface layouts to make them more usable across phones and tablets.',
    techs: [TechList.ionic, TechList.angular]
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

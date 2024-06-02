const baseDir = 'portfolio-images';
let sectionId = 0;
let projectId = 0;

const mockProjectDescription =
    "Here's how the project worked. It was a thing built with this, that, and those tools. It was...pretty cool.";
const mockRoleDescription =
    'These are the things that I did to contribute. I worked mainly with this tool andwith some people.';
const mockTechs = ['this', 'that', 'the other'];

const digitalCorps = createSection('Digital Corps @ Ball State', [
    createProjectData('Ball State Campus Map', 'bsu-map', 6, 1),
    createProjectData('Indiana Public Radio', 'ipr', 1, 1),
    createProjectData('Perryville Battlefield', 'perryville', 14, 1),
    createProjectData('Indiana State Parks', 'in-parks', 6, 1)
]);

const viavi = createSection('Viavi Solutions, Inc', [
    createProjectData('Mobile Tech', 'mobile-tech', 32, 1),
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
function createProjectData(name, path, imageCount, thumbnailIndex) {
    return {
        id: ++projectId,
        name,
        images: createImageArray(path, imageCount),
        thumbnail: createFilename(path, thumbnailIndex),
        description: mockProjectDescription,
        myRole: mockRoleDescription,
        techs: mockTechs
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

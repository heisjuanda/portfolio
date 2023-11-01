import { WORK_PROJECTS } from "../constants/workConstants";

const getProject = (handle) => {
    if (typeof handle !== 'string' || handle.length === 0) return;

    for (const project of WORK_PROJECTS) {
        if (project.handle === handle) {
             return project;
        }
    }
    return {};
}

export default getProject;
import { WORK_PROJECTS } from "../constants/workConstants";

export const getNextProject = (handle) => {
  if (typeof handle !== "string" || handle.length === 0) return;
  for (const index in WORK_PROJECTS) {
    if (
      WORK_PROJECTS[index].handle === handle &&
      WORK_PROJECTS[parseInt(index) + 1]
    ) {
      return WORK_PROJECTS[parseInt(index) + 1].handle;
    }
    if (
      WORK_PROJECTS[index].handle === handle &&
      !WORK_PROJECTS[parseInt(index) + 1]
    ) {
      return WORK_PROJECTS[0].handle;
    }
  }
};

export const getPreviousProject = (handle) => {
  if (typeof handle !== "string" || handle.length === 0) return;
  for (const index in WORK_PROJECTS) {
    if (
      WORK_PROJECTS[index].handle === handle &&
      WORK_PROJECTS[parseInt(index) - 1]
    ) {
      return WORK_PROJECTS[parseInt(index) - 1].handle;
    }
    if (
      WORK_PROJECTS[index].handle === handle &&
      !WORK_PROJECTS[parseInt(index) - 1]
    ) {
      return WORK_PROJECTS[WORK_PROJECTS.length - 1].handle;
    }
  }
};

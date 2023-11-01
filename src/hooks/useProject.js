import { useEffect, useState } from "react";

import getProject from "../helpers/getProject";

const useProject = (handle) => {
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    setCurrentProject(getProject(handle));
  }, [handle]);

  return { currentProject };
};

export default useProject;

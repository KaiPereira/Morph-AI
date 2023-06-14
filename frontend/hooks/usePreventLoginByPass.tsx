import { useEffect } from "react";

function usePreventLoginByPass(profileDetails: object) {
  useEffect(() => {
    if (!profileDetails) {
      window.location.href = "/";
    }
  }, [profileDetails]);
}

export default usePreventLoginByPass;
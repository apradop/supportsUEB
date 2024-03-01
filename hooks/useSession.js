export const useSession = () => {

    const useSessionUser = () => {

        if (
            window.sessionStorage.getItem("user") === null || 
            window.sessionStorage.getItem("user") === ""   ||
            window.sessionStorage.getItem("user") === "admin"
          ) {
            return false;
          } 

        return true;
    }

    const useSessionAdmin = () => {

        if (
            window.sessionStorage.getItem("user") === null || 
            window.sessionStorage.getItem("user") === ""   ||
            window.sessionStorage.getItem("user") === "user"
          ) {
            router.push("/");
          } 
    }

    return { useSessionUser, useSessionAdmin }
}
export const useSession = () => {

    const useSession = () => {

        if (
            window.sessionStorage.getItem("user") === null || 
            window.sessionStorage.getItem("user") === ""   ||
            window.sessionStorage.getItem("user") === "admin"
          ) {
            router.push("/");
          } 
    }


}
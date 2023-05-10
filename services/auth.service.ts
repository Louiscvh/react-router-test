export const login = () => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const getCurrentUser = () => {
    const token = localStorage.getItem("token");
    if(token) {
        return JSON.parse(atob(token.split('.')[1]));
    } else {
        return null;
    }
};
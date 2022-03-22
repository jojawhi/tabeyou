const userFactory = () => {
    const createNewUser = (name, password) => {
        const userId = Number(Date()) / 10;
        const userName = name;
        const userPassword = password;
        return { userId, userName, userPassword };
    };
    return { createNewUser };
};
export {};

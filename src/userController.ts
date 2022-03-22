import { getAuth, onAuthStateChanged } from '../node_modules/firebase/auth';
/*
- include 'state' variable isLoggedIn, default is false
- when users input userName and userPassword in the login page, controller sends request to model for authentication
- model informs controller of success or failure
- on success, controller requests updated display from view

*/

interface UserInterface {
	userId: number;
	userName: string;
	userPassword: string;
}

const userFactory = () => {
	const createNewUser = (name: string, password: string) => {
		const userId: number = Number(Date()) / 10;
		const userName: string = name;
		const userPassword: string = password;

		return { userId, userName, userPassword };
	};

	/*userModel will be imported from the userModel file*/
	/*displayUser() will be imported from the userView file*/
	/*
	const getUser = (id: number) => {
		const user = userModel.getUser(id);

		displayUser();
	};
	*/
	return { createNewUser };
};

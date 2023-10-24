import { ReactNode, createContext, useContext } from 'react';

interface menuProvider {
	menu: string[];
	children?: ReactNode;
}

type menuObj = {
	menu: string[];
};

const initialMenuState = {
	menu: [],
};

const menuContext = createContext<menuObj>(initialMenuState);

export const useMenu = () => {
	return useContext(menuContext);
};

export default function MenuProvider({ menu, children }: menuProvider) {
	return (
		<menuContext.Provider value={{ menu }}>{children}</menuContext.Provider>
	);
}

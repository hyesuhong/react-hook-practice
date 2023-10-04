import {
	Dispatch,
	ReactNode,
	Reducer,
	createContext,
	useContext,
	useReducer,
} from 'react';

interface menuProvider {
	menu: string[];
	children?: ReactNode;
}

type menuObj = {
	menu: string[];
	current: number;
};

export type reducerAction = 'CHANGE';
type actionObj = { type: reducerAction; selected?: string };

const initialMenuState = {
	menu: [],
	current: -1,
};

const menuContext = createContext<menuObj>(initialMenuState);

const menuDispatchContext = createContext<null | Dispatch<actionObj>>(null);

export const useMenu = () => {
	return useContext(menuContext);
};

export const useMenuDispatch = () => {
	return useContext(menuDispatchContext);
};

export default function MenuProvider({ menu, children }: menuProvider) {
	const [menuState, dispatch] = useReducer(menuReducer, {
		...initialMenuState,
		menu,
	});

	return (
		<menuContext.Provider value={menuState}>
			<menuDispatchContext.Provider value={dispatch}>
				{children}
			</menuDispatchContext.Provider>
		</menuContext.Provider>
	);
}

const menuReducer: Reducer<menuObj, actionObj> = (prevState, action) => {
	switch (action.type) {
		case 'CHANGE':
			return action.selected
				? {
						...prevState,
						current: prevState.menu.findIndex(
							(item) => item === action.selected
						),
				  }
				: { ...prevState };
	}
};

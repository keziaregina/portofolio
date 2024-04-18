import { useState } from "react";
import useDarkSide from "../assets/js/useDarkSide";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import useDarkSide from "../hooks/useDarkSide";
// useDarkSide

export default function Toggle() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			{/* <DarkModeSwitch
				style={{ marginBottom: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/> */}

            <label className="relative lg:right-2 inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"  onChange={toggleDarkMode} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
		</>
	);
}
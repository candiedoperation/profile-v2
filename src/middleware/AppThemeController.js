/*
    Profile Page v2 - Atheesh's Personal Profile Page
    Copyright (C) 2023  Atheesh Thirumalairajan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { createTheme } from "@mui/material";
const themeChangeEvent = new Event("appthemechanged");

const toggleTheme = (emitter) => {
    (localStorage.getItem("theme") === null) ?
        localStorage.setItem("theme", "light") :
        localStorage.setItem("theme", (localStorage.getItem("theme") === 'light') ? 'dark' : 'light')

    if(emitter)
        emitter.dispatchEvent(themeChangeEvent);
}

const getCurrentTheme = () => {
    if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
    return localStorage.getItem('theme');
}

const setCurrentTheme = (theme) => {
    localStorage.setItem("theme", theme);
}

const getCurrentThemeComponent = () => {
    let paletteLight = {
        mode: 'light',
        primary: {
            main: "#f7bd4a",
        },
        secondary: {
            main: "#7093bd",
        }
    };

    let paletteDark = {
        mode: 'dark',
        primary: {
            main: "#f7bd4a",
        },
        secondary: {
            main: "#7093bd",
        }
    };

    switch (getCurrentTheme()) {
        case "light":
            return createTheme({
                palette: paletteLight
            })

        case "dark":
            return createTheme({
                palette: paletteDark
            });
    }
}

export { toggleTheme, getCurrentTheme, setCurrentTheme, getCurrentThemeComponent }
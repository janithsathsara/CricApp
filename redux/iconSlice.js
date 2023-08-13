import { createSlice } from "@reduxjs/toolkit";

const iconSlice = createSlice({
    name: 'icon',
    initialState: {
        mainIcon: true,
        fixturesIcon: false,
        menuIcon: false,
        nftstoreIcon: false,
        searchIcon: false,
    },
    reducers: {
        toggleMain: state => {
            state.mainIcon = true;
            state.fixturesIcon = false;
            state.menuIcon = false;
            state.nftstoreIcon = false;
            state.searchIcon = false;
        },
        toggleFixtures: state => {
            state.mainIcon = false;
            state.fixturesIcon = true;
            state.menuIcon = false;
            state.nftstoreIcon = false;
            state.searchIcon = false;
        },

        toggleMenu: state => {
            state.mainIcon = false;
            state.fixturesIcon = false;
            state.menuIcon = true;
            state.nftstoreIcon = false;
            state.searchIcon = false;
        },

        toggleNftstore: state => {
            state.mainIcon = false;
            state.fixturesIcon = false;
            state.menuIcon = false;
            state.nftstoreIcon = true;
            state.searchIcon = false;
        },

        toggleSearch: state => {
            state.mainIcon = false;
            state.fixturesIcon = false;
            state.menuIcon = false;
            state.nftstoreIcon = false;
            state.searchIcon = true;
        },
        toggleNone: state => {
            state.mainIcon = false;
            state.fixturesIcon = false;
            state.menuIcon = false;
            state.nftstoreIcon = false;
            state.searchIcon = false;
        }

    }
})

export const { toggleFixtures, toggleMain, toggleMenu, toggleSearch, toggleNftstore, toggleNone } = iconSlice.actions;
export default iconSlice.reducer;
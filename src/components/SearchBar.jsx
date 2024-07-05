// import React, { useState } from 'react';
// import { TextField, List, ListItem } from '@mui/material';
// import { fetchWeatherSuggestions } from '../services/weatherService';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     searchContainer: {
//         marginBottom: '20px',
//     },
//     suggestionList: {
//         maxHeight: '200px',
//         overflowY: 'auto',
//     },
// });

// const SearchBar = ({ onCitySelect }) => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const classes = useStyles();

//     const handleInputChange = async (event) => {
//         const value = event.target.value;
//         setQuery(value);
//         if (value.length > 2) {
//             const results = await fetchWeatherSuggestions(value);
//             console.log('Suggestions:', results);
//             setSuggestions(results);
//         } else {
//             setSuggestions([]);
//         }
//     };

//     return (
//          <div className={classes.searchContainer}>
//             <TextField
//                 label="Search city"
//                 variant="outlined"
//                 fullWidth
//                 value={query}
//                 onChange={handleInputChange}
//             />
//             {/* <List> */}
//             <List className={classes.suggestionList}>
//                 {suggestions.map((city, index) => (
//                     <ListItem  key={index} onClick={() => onCitySelect(city)}>
//                         {city}
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );
// };

// export default SearchBar;


import React, { useState } from 'react';
import { TextField, List, ListItem } from '@mui/material';
import { fetchWeatherSuggestions } from '../services/weatherService';
import styled from 'styled-components';

const SearchContainer = styled.div`
    margin-bottom: 20px;
`;

const SuggestionList = styled(List)`
    max-height: 200px;
    overflow-y: auto;
`;

const SearchBar = ({ onCitySelect }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {
        const value = event.target.value;
        setQuery(value);
        if (value.length > 2) {
            const results = await fetchWeatherSuggestions(value);
            console.log('Suggestions:', results);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <SearchContainer>
            <TextField
                label="Search city"
                variant="outlined"
                fullWidth
                value={query}
                onChange={handleInputChange}
            />
            <SuggestionList>
                {suggestions.map((city, index) => (
                    <ListItem key={index} onClick={() => onCitySelect(city)}>
                        {city}
                    </ListItem>
                ))}
            </SuggestionList>
        </SearchContainer>
    );
};

export default SearchBar;

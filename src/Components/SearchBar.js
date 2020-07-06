import React, {useState, useContext} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

const SearchBar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            padding: '1rem',
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '99%',
            },
        },
    }));

    const SearchButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: "#1A936F",
            float: "right",
            width: "30%",
            '&:hover': {
                backgroundColor: "#88D498",
            },
        },
    }))(Button);

    const classes = useStyles();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [checked, setChecked] = useState(false);
    const {searchResults, searchJobs} = useContext(SearchResultContext);


    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = () => {
        searchJobs(description, location, checked);
    };

    const handleChecked = () => {
      setChecked(!checked);
    };

    const btnDisabled = () => {
      return !location && !description;

    };

    return (
        <div className="search-bar__container">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-textarea"
                    label="Job Description"
                    placeholder="Filter by title, benefits, companies, expertise"
                    variant="outlined"
                    size="small"
                    onChange={handleDescriptionChange}
                />
                <TextField
                    id="outlined-textarea"
                    label="Location"
                    placeholder="Filter by city, state, zip code or country"
                    variant="outlined"
                    size="small"
                    onChange={handleLocationChange}
                />
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={handleChecked}
                />
                <span>Full time only</span>
                <SearchButton variant="contained"
                        color="primary"
                        disabled={btnDisabled()}
                        onClick={handleSearch}
                >
                    Search
                </SearchButton>
            </form>

        </div>
    );
};

export default SearchBar;
import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

const SearchBar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

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

    return (
        <div className="search-bar__container">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-textarea"
                    label="Job Description"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    onChange={handleDescriptionChange}
                />
                <TextField
                    id="outlined-textarea"
                    label="Location"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    onChange={handleLocationChange}
                />
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={handleChecked}
                />
                Full time only
                <Button variant="contained"
                        color="primary"
                        onClick={handleSearch}
                >
                    Search
                </Button>
            </form>

        </div>
    );
};

export default SearchBar;
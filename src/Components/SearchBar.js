import React, {useState, useContext} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
            backgroundColor: "#457B9D",
            float: "right",
            width: "30%",
            '&:hover': {
                backgroundColor: "#4d92bc",
            },
        },
    }))(Button);



    const classes = useStyles();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [checked, setChecked] = useState(false);
    const {searchResults, searchJobs, setPageCount} = useContext(SearchResultContext);


    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = () => {
        setPageCount(2);
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
                    label="Job Description"
                    placeholder="Filter by title, benefits, companies, expertise"
                    variant="outlined"
                    size="small"
                    onChange={handleDescriptionChange}
                />
                <TextField
                    label="Location"
                    placeholder="Filter by city, state, zip code or country"
                    variant="outlined"
                    size="small"
                    onChange={handleLocationChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleChecked}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Full time"
                />
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
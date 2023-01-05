import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl = styled.div`.form-control {
  margin: 0.5rem 0;
}

  // we can insert the styles inside the back ticket and remove the class identification
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;`
const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isValid, setIsVAlid] = useState(true);


    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsVAlid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsVAlid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* <div className={`from-control ${!isValid ? 'invalid' : ''}`}> */}
            <FormControl/>
                <label>Course Goal</label>
                <input type="text"
                       onChange={goalInputChangeHandler}/>
            <FormControl/>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;

import React, { Component } from 'react';
import './style.css';

class FormElementsComponent extends Component {
  render() {
    return (
      <div className="form-elements-container">
        <h1 style={{ textAlign: 'center' }}>Form elements Components</h1>
        <form>
          <fieldset>
            <legend>Details:</legend>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <br />
            <div>
              <label htmlFor="empId">Emp_Id:</label>
              <input type="text" id="empId" name="empId" />
            </div>
            <br />
            <div>
              <label htmlFor="designation">Designation:</label>
              <input type="text" id="designation" name="designation" />
            </div>
          </fieldset>

          <div>
            <label htmlFor="select">Select City:</label>
            <select id="select" name="select">
              <option value="option1">Bangalore</option>
              <option value="option2">Chennai</option>
              <option value="option3">Hosur</option>
            </select>
          </div>

          <div>
            <label htmlFor="textarea">Textarea:</label>
            <textarea id="textarea" name="textarea" rows="4" cols="50"></textarea>
          </div>

          <div>
            <h1>Your favourite food</h1>
            <label>
              <input type='radio' name="favourite_food" value="Pizza" defaultChecked />Pizza
            </label><br />
            <label>
              <input type='radio' name="favourite_food" value="Rice" />Rice
            </label><br />
            <label>
              <input type='radio' name="favourite_food" value="Roti" />Roti
            </label><br />
            <label>
              <input type='radio' name="favourite_food" value="Pasta" />Pasta
            </label><br />
            <br />
          </div>

          <div>
            <h1>Your favourite food</h1>
            <label>
              <input type='checkbox' name="favourite_food" value="Pizza" defaultChecked />Pizza
            </label><br />
            <label>
              <input type='checkbox' name="favourite_food" value="Rice" />Rice
            </label><br />
            <label>
              <input type='checkbox' name="favourite_food" value="Roti" />Roti
            </label><br />
            <label>
              <input type='checkbox' name="favourite_food" value="Pasta" />Pasta
            </label><br />
            <br />
          </div>

          <div>
            <label htmlFor="browser">Choose your hobby from the list:</label>
            <input list="hobbies" name="browser" id="browser" />

            <datalist id="hobbies">
              <option value="Singing" />
              <option value="Games" />
              <option value="Dancing" />
              <option value="Gardening" />
              <option value="Reading" />
            </datalist>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormElementsComponent;

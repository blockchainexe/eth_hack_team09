import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// import { identityAttesation } from './actions.js'

const submit = (data, state, props)=>{
//   props.identityAttesationRequest(data, props.ethAddress)
}

const BuyTokenForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>

      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Favorite Pizza</label>
        <div>
          <Field name="favoritePizza" component="select">
            <option></option>
            <option value="pineappleBacon">Pineapple/Canadian Bacon</option>
            <option value="sausage">Sausage</option>
            <option value="veggie">Veggie</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Biography</label>
        <div>
          <Field name="biography" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}


const mapStateToProps = (state, props) => {
  console.log(state)
  const ethAddress =  state.user && state.user.data &&state.user.data.address;
  return {
    ethAddress: !ethAddress ? null : '0x' + ethAddress
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     identityAttesationRequest: (data) => {
//       event.preventDefault();

//       dispatch(identityAttesation(data))
//     }
//   }
// }

const Form = reduxForm({
  form: 'buyToken'  // a unique identifier for this form
})(BuyTokenForm)

export default  connect(
  mapStateToProps,
  // mapDispatchToProps
)(Form);



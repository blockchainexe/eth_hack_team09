import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { transactionRequest } from './actions.js'
import settings from './../../util/settings.js'
const submit = (data, state, props)=>{
  props.transactionRequest(data)
}

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Ethereum Address</label>
        <div>
          <Field name="ethAddress" component="textarea" value="0xbbD63Bae82A8c720583aa491ad875564Bc4B393f" 
            style={{
              width: "260px"
            }}
          />
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
  return {
    initialValues: {
      ethAddress: settings.ethAddressDefault
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transactionRequest: (data) => {
      event.preventDefault();

      dispatch(transactionRequest(data))
    }
  }
}

const Form = reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);



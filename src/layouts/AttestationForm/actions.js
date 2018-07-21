import { uport } from './../../util/connectors.js'
import { browserHistory } from 'react-router'
export const IDENTITY_ATTESTATION = 'IDENTITY_ATTESTATION'
function userLoggedIn(attestation) {
  return {
    type: IDENTITY_ATTESTATION,
    payload: attestation
  }
}

export function identityAttesation(attestation) {
  return function(dispatch, data, props) {
    const credential = {
      sub: 'personal',
      claim: {
        ...attestation
      },
      exp: '1554497155' // Expires 2019
    }

    uport.attestCredentials(credential)({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    }).then((credentials) => {
      dispatch(userLoggedIn(credentials))

      return browserHistory.push('/dashboard')
    })
  }
}

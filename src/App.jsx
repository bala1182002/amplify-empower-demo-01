import { PropTypes } from 'prop-types';
import { FieldworkerCreateForm } from './ui-components';
import { withAuthenticator,Button,Heading} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json'
Amplify.configure(config);
const App = ({ signOut, user }) => {
  const username = user.username;
  return (
    <>
    <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
        <FieldworkerCreateForm />
    </>
  );
};
App.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};
export default withAuthenticator(App);
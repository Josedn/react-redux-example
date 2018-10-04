import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

const mapStateToProps = state => ({
    context: state,
});

export default connect(mapStateToProps)(LoginPage);
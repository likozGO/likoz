import React from 'react';
import './AuthUser.scss';

import { LoginSchema, LoginInitial } from './LoginValidation';
import { RegisterSchema, RegisterInitial } from './RegisterValidation';
import AuthForm from './AuthForm';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        type: '',
        schema: {},
        initial: {},
      },
    };
  }

  componentDidMount() {
    this.checkRoute();
  }

  checkRoute() {
    const { pathname } = this.props.location;
    if (pathname === '/auth/registration') {
      this.setState({
        form: {
          type: 'register',
          schema: RegisterSchema,
          initial: RegisterInitial,
        },
      });
    } else if (pathname === '/auth/login') {
      this.setState({
        form: {
          type: 'login',
          schema: LoginSchema,
          initial: LoginInitial,
        },
      });
    } else {
      console.log('Something went wrong');
    }
  }

  render() {
    const { form } = this.state;
    return (
      <section className="auth-group">
        <div className="limiter">
          <div className="container-login">
            <div className="wrap-login">
              <AuthForm form={form} />
              <div className="auth-more" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Auth;

import React from 'react';
import { withRouter } from 'react-router-dom';

/* Attribution: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition */


class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children;
    }
}
  
export default withRouter(ScrollToTop);
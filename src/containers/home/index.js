import React, {Component} from 'react';
import HomePage from '../../components/home/home_page';
import NavigationPage from '../../components/home/navigation';
class Home extends Component {


    render() {
      return (
        <div>
          <NavigationPage />
          <div>
            <HomePage />
          </div>
        </div>
      )

    }
}

export default Home;

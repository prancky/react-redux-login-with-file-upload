import React, { Component } from 'react'
import { connect } from "react-redux";
import * as Actions from '../../actions/gallery';
import { browserHistory } from 'react-router';
import Gallery from 'react-photo-gallery';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenId:localStorage.getItem('token'),
      imageList:null
    };
  }

  componentWillMount() {
    if (this.state.tokenId === 'logout') {
      browserHistory.push('/');
    }
    var data = {
      inspectionId:'5a8f145aa6579f3f280d147f',
      activityId:'58ff0e4590954af75de13ef6'
    }
    this.props.getUploadedImageList(data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getImageList) {
      var img = [];
      nextProps.getImageList.map((data,k) =>{
        var url = data.ATTACHMENTS[0].replace("small-1", "large");
        //large
        img.push({
          src:url,
          width: 4,
          height: 3
        });
      });
      this.setState({imageList:img});
    }
  } 
    render() {
        return (
          <div>
            <div>
              {this.state.imageList && <Gallery photos={this.state.imageList} />}
            </div>
          </div>
        )
    }
}
function bindAction(dispatch) {
  return {
    getUploadedImageList: data => dispatch(Actions.getUploadedImageList(data)),
  };
}

function mapStateToProps(state) {
  return {
    getImageList: state.gallery.getImageList,
  };
}

export default connect(mapStateToProps, bindAction)(HomePage);

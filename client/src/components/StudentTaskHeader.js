import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
background-color: #24349B;
color: #fff;
width: 100%;
height: 56px;
line-height: 56px;
font-size: 28px;
font-weight: 700;
text-align: center;
`
const HeaderBackButton = styled.div`
float: left;
padding: 5px;
`

class StudentTaskHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {};      
  }

  render() {
    const {handleBackButton} = this.props;

    return (
        <Header>
          <HeaderBackButton onClick={handleBackButton}>
          <i className="small material-icons">arrow_back</i>
          </HeaderBackButton>           
          <div>NewComers Tasks</div>
        </Header>
    );
  }
}

export default StudentTaskHeader;
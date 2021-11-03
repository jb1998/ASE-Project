import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
background-color: #0A1A4F;
color: #fff;
width: 100%;
height: 56px;
line-height: 56px;
font-size: 28px;
font-weight: 700;
text-align: center;
`

class WindsorTourHeader extends Component {
  render() {
    return (
        <Header>
            <div>UWindsor Tour</div>
        </Header>
    );
  }
}

export default WindsorTourHeader;
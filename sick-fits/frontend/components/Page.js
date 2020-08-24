import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const StyledPage = styled.div`
    background: white;
    color: black;
`;

//following code creates restraints for our
// product grid so it does not span across the
// whole page
const Inner = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Meta />
                <Header />
                <Inner>
                    {this.props.children}
                </Inner>
            </StyledPage>
        );
    }
}
export default Page;




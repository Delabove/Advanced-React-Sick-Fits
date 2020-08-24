import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offwhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',

};

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

//following code creates restraints for our
// product grid so it does not span across the
// whole page
const Inner = styled.div `
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme = {theme}>
            <StyledPage>
                <Meta />
                <Header />
                <Inner>
                    {this.props.children}
                </Inner>
            </StyledPage>
            </ThemeProvider>
        );
    }
}
export default Page;




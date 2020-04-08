import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`;

const InfoText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: ${props => props.theme[props.color] || props.theme.GREY};
`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <Wrapper>
                <InfoText marginTop={20}>
                    {'test'}
                </InfoText>
            </Wrapper>
        );
    }
}

export default AppPage;
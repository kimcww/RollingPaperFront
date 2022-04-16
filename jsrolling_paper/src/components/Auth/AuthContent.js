import React from 'react';
import styled from 'styled-components';
import oc from ' open-color';

const TItle = styled.div`
    font-size : 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const AuthContent = ({title,children}) => (
    <div>
        <title>{title}</title>
        {children}
    </div>
);

export default AuthContent;
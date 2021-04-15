import styled from 'styled-components';
   


 export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: transparent;
border:2px solid var(--lightBlue);
border-color:${props => (props.cartColor ? "var(--mainYellow)":"var(--lightBlue)")};
color: ${props => props.cartColor? "var(--lightBlue)":"var(--mainBlue)"}; var(--lightBlue);
border-radius: 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0; 
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cartColor ? "var(--mainYellow)":"var(--lightBlue)"};
    color:var(-mainBlue);
}
&:forcus{
    outline:none
}
`;

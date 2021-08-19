import styled from "@emotion/styled";

export const Button = styled.button `
    width: 100%;
    height: 32px;
    background: #FDFDFD;
    border: 1px solid #E4E4E4;
    border-radius: 5px;
    outline: none;
    fontSize: .9rem;
    color: #313131;
    cursor: pointer;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    & > p {
        text-align: center;
        margin-left: 10px;
    }
`
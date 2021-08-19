import styled from "@emotion/styled";

export const Buttonn = styled.button `
    width: 100%;
    height: 32px;
    background: #313131;
    border: none;
    border-radius: 5px;
    outline: none;
    fontSize: .9rem;
    color: #FDFDFD;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    & > p {
        text-align: center;
        margin-right: 10px;
    }
`
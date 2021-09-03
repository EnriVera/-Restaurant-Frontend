import styled from "@emotion/styled";

export const Section = styled.section(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Article = styled.article`
  background: #fdfdfd;
  width: 45vh;
  height: 80vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0 6.5px 15.5px 3px #e4e4e4;
  -moz-box-shadow: 0 6.5px 15.5px 3px #e4e4e4;
  box-shadow: 0 6.5px 15.5px 3px #e4e4e4;
  @media (max-width: 450px) {
    width: 100%;
    background: #fdfdfd;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form(() => ({
  width: "70%",
}));

export const DivFirstLast = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivSession = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: 1rem;
  & > p {
    font-size: 9px;
    color: #828282;
    a {
      color: #313131;
      cursor: pointer;
    }
  }
`;

export const ErrorInput = styled.span(() => ({
  fontSize: '9px',
  color: '#EA5454',
}))

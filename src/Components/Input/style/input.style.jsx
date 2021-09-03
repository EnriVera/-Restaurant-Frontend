import styled from "@emotion/styled";

export const Div = styled.div(({props}) => ({
    width: '100%',
    height: '3.5rem',
    margin: props || '1rem 0 0 0',
    display: "flex",
    flexDirection: 'column'
}))

export const InputText = styled.input(() => ({
    width: '98%',
    height: '32px',
    fontSize: '11px',
    outline: 'none',
    background: 'none',
    borderRadius: '.2rem',
    border: '1px solid #E4E4E4',
    color: '#828282'
}))

export const LabelText = styled.label(() => ({
    padding: '0 .25rem',
    backgroundColor: '#fff',
    color: '#313131',
    fontSize: '12px',
}))
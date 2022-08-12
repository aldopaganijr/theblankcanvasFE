import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    height: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 300px;
    font-family: 'Poppins', sans-serif;
`

export const PayNowButton = styled.button`
      margin-top: 2rem;
      border-radius: 16px;
      border: none;
      padding: 10px;
      min-height: 3rem;
      background-color: #A48F78;
      color: white;
      font-family: 'Poppins', sans-serif;

    @media (max-width: 500px){
        
    }
`
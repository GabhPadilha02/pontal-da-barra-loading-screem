import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h1{
    color: #000;
    font-size: 2rem;
    font-weight: 300;
  }
  span{
    color: #000;
    font-weight: 300;
    font-size: 2rem;
  }
`

export const SpinnerItem = styled.div`
    width: 50px;
    height: 50px;
    margin: 20px auto;
    border: 4px solid rgba(0, 0, 0, .1);
    border-left: 4px solid #000;
    border-right: 4px solid #000;
    animation: spinner 1s linear infinite forwards;
    -webkit-border-radius: 50%;
       -moz-border-radius: 50%;
         -o-border-radius: 50%;
        -ms-border-radius: 50%;
            border-radius: 50%;
    @keyframes spinner {
      0% {
        transform: rotate(0deg)
    }
    
    100% {
        transform: rotate(360deg)
    }
    }
`


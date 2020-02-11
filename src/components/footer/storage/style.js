import styled from "styled-components";

export const Section = styled.section`
  h4{
    color: #898989;
    font-size: .9em;
    padding: 2em 0;
  }
  .flags{
    margin-bottom: 5em;
    font-size: .8em;
    color: #fff;
    justify-content: space-between;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        flex-wrap:  wrap;
        font-size: .7em;
        margin-bottom: 0;
    }
    .row{
      margin-right: 2em;
      align-items: center;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        width: 45%;
        margin-right: 0;
        margin-bottom: 2em;
      }
    }
  }
  .gatsby-image-wrapper{
    width: 2em;
    margin-right: 1em;
  }
`;
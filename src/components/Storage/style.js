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
      transition: all .4s;
      &:hover{
        transform: translateY(-.5em);
      }
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        width: 45%;
        margin-right: 0;
        margin-bottom: 2em;
      }
    }
  }
  img{
    width: 2em;
    margin-right: 1em;
  }
`;

export const SectionMorePhotoIcon = styled.section`
    h3{
        color: #898989;
        font-size: .9em;
        margin: 2.5em 0;
    }
    .container{
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .store{
        width: 24%;
        position: relative;
        cursor: pointer;
        margin-bottom: 7%;
        &:before{
            content: '';
            width: 100%;
            height: 1px;
            background: #D9E7F8;
            position: absolute;
            top: 0;
            left: 0;
        }
        &:hover:before{
            background: #FF4B55;
            height: 2px;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
        }
    }
    .images{
        margin-top: auto;
        position: relative;
    }
    header{
        align-items: center;
        padding: 1em 1em 1.5em;
        img{
            height: 3em;
            margin-right: 1em;
        }
        h4{
            font-weight: 500;
            color: #393939;
            span{
                color: #005BE4;
                margin-left: .5em;
            }
        }
        p{
            color: #8E8E8E;
            font-size: .8em;
        }
    }
    .address{
        color: #565656;
        line-height: 2em;
        font-size: .9em;
        padding: 0 1em;
    }
    .phone{
        color: #005BE4;
        margin-bottom: 2em;
        font-size: .9em;
        padding: 0 1em;
        line-height: 2em;
    }
    .more-photo-icon{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        &-img{
            width: 3em;
            height: 3em;
            margin-left: auto;
        }
    }
    .react-multiple-carousel__arrow{
        top: 45%;
    }
`;
export const Popup = styled.div`
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    display: ${props => props.isActive ? 'flex' : 'none'};
    .wrapper{
        width: 60%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 80%;
        }
    }
`;
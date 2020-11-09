import styled from 'styled-components'

export const Title = styled.div`
    line-height: 0.4rem;
    height: 0.4rem;
    background-color: #ffffff;
    font-size: 0.13rem;
    padding-left: 0.1rem;
    color: #c0c0c0;
    margin-top: 0.1rem;
`;

export const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Dl = styled.dl`
    width: calc(50% - 0.1rem);
    background: #fff;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
    margin-bottom: 0.1rem;
    dt {
        img {
            width: 100%;
        }
    }
`;

export const Dd = styled.dd`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1rem;
    h3 {
        font-size: 0.16rem;
    }
    p {
        font-size: 0.12rem;
        color: #c0c0c0;
        margin-top: 0.08rem;
    }
`;
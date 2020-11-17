import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 0.44rem;
    background: #ee742f;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
        width: 1.4rem;
        height: 0.3rem;
        display: flex;
        position: relative;
        border: 1px solid #fff;
        z-index: 0;
        border-radius: 0.15rem;
        li {
            flex: 1;
            line-height: 0.3rem;
            text-align: center;
            color: #fff;
            &:last-child {
                position: absolute;
                width: 50%;
                height: 0.3rem;
                background: #fff;
                z-index: -1;
                border-radius: 0.15rem;
                transform: translate(0, 0);
                transition: all 0.4s ease-in;
                &.right {
                    transform: translate(100%, 0);
                }
            }
            &.active {
                color: #ee742f;
            }
        }
    }
`;

export const CateListContainer = styled.div`
    height: 100%;
    display: flex;
    > div:first-child {
        width: 0.9rem;
        > ul {
            height: 100%;
            overflow-y: scroll;
            li {
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
                background: #f3f3f3;
                &.active {
                    background: #fff;
                    span {
                        display: inline-block;
                        height: 100%;
                        border-bottom: 1px solid #ee742f;
                    }
                }
            }
        }
    }
    > div:last-child {
        flex: 1;
        background: #fff;
        padding: 0.2rem 0.1rem;
        > ul {
            display: flex;
            flex-wrap: wrap;
            overflow-y: scroll;
            height: 100%;
            align-content: flex-start;
            li {
                width: 33.3333%;
                text-align: center;
                height: 0.5rem;
                line-height: 0.5rem;
                color: #666;
            }
        }
    }
`;

export const CateContainer = styled.div`
    height: 100%;
    overflow: hidden;
`;

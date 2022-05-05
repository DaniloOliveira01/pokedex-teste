import styled from "styled-components";

export const PokeList = styled.ul`
    margin-top: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 30px;
    overflow-y: scroll;
    height: 60vh;
    gap: 10px;

    ::-webkit-scrollbar {
        width: 4.5px;
    }

    ::-webkit-scrollbar-track {
        background: #ffff;
        border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const PokeItem = styled.li`
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        text-decoration: underline #fff;
    }
`;
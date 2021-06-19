import styled, {css} from 'styled-components';

interface ButtonFilter {
    onCLick?: () => void;
    activeBtn: boolean;
}

export const TopbarContainer = styled.div`
    text-align: center;
    padding: 15px;
    z-index: 100;
    margin: 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 130px;
    background-color: rgb(172, 209, 222);
    box-shadow: 0 1px 6px #a0a0a0;
`;

export const SearchInput = styled.input`
    font-size: 20px;
    outline: none;
    border-radius: 8px;
    border: 2px solid #689cc5;
    width: 40%;
    padding: 10px;

    &::placeholder {
        font-size: 20px;
        transform: translateY(1px);
    }

    &:focus {
        border: 2px solid rgb(229, 70, 96);
    }

    @media (max-width: 590px) {
        width: 90%;
  }

`;

export const FilterAndSortingButtonWrapper = styled.div`
    padding-top: 10px;
`;

export const FilterAndSortingButton = styled.button<ButtonFilter>`
    padding: 8px;
    margin: 0 6px;
    background-color: ${props => props.activeBtn ? css`rgb(229, 70, 96)` : css`#689cc5`};
    color: white;
    border: none;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
    }
`;

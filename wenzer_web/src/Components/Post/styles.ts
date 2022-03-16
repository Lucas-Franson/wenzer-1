import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const ContainerPost = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 5px;

  background: ${(props) => props.theme.colors.secondary};
  border-radius: 8px;

  margin-top: 1.3rem;
  padding: 15px;
  box-sizing: border-box;

  > header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 15px;

    > .userInfo {
      > span {
        font-size:  0.7rem;
      }
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-align: left;

    > img {
        max-width: 80%;
        height: 100%;
        object-fit: cover;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    justify-content: space-around;

    > div {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px;
      border-radius: 8px;

      &:hover {
          background-color: ${(props) => props.theme.colors.tertiary};
          opacity: 0.9;
          cursor: pointer;
      }  
    }
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  transition: ease all .3s;

  &:hover {
    opacity: 0.8;
  }
`;
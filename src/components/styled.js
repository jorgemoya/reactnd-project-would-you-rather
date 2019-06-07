import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
`;

export const NavItem = styled.span`
  padding: 20px 10px;

  a {
    color: black;
    text-decoration: none;
  }

  a.active {
    color: blue;
  }
`;

export const UserNavItem = styled(NavItem)`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  span {
    margin-right: 20px;
  }
`;

export const Tabs = styled.div`
  padding: 20px 10px;

  span {
    display: inline-block;
    padding: 15px 15px;
    cursor: pointer;
  }

  span[data-isactive="true"] {
    color: blue;
  }

  span:hover {
    background-color: papayawhip;
  }
`;

export const PollContainer = styled.div`
  border: 1px solid grey;
  margin: 30px;
  padding: 30px;
`;

export const PollAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;

  img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const PollText = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  input {
    margin-right: 20px;
  }

  form {
    margin-top: 10px;
  }
`;

export const LeaderboardContainer = styled.table`
  text-align: center;
  border-spacing: 50px 25px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 300px;
  margin: -68px auto;
  top: 50vh;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

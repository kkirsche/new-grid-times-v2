import { Menu, Search, User } from "react-feather";
import styled from "styled-components";

import { FAMILIES, QUERIES } from "../../constants";

import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <TabletAndDownActionGroup>
            <button>
              <User size={24} />
            </button>
          </TabletAndDownActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopOnlyActionGroup>
        <SubscribeButton>Subscribe</SubscribeButton>
        <AlreadySubscribed href="#">Already a subscriber?</AlreadySubscribed>
      </DesktopOnlyActionGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: min(100%, calc(1200px + 32px * 2));
    margin-left: auto;
    margin-right: auto;
    padding-right: 32px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    color: var(--color-gray-900);
    background: revert;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const TabletAndDownActionGroup = styled(ActionGroup)`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopOnlyActionGroup = styled(ActionGroup)`
  display: none;


  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    gap: revert;
    align-items: center;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeButton = styled.button`
  padding: 10px 24px;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: white;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  font-family: ${FAMILIES.sansSerif};
`;

const AlreadySubscribed = styled.a`
  margin-top: 8px;
  text-decoration: underline;
  font-style: italic;
  font-family: ${FAMILIES.serif};
`;

export default Header;

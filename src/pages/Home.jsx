import React from "react";
import { data } from "../constants/data";
import { AnalyticsCard, Searchbar } from "../components";
import { SideBarContainer } from "../containers/SideBar/SideBar";
//to avoid unnecessary imports
import * as Styles from "./styles";

import Profile from "../assets/profile.svg";
import Divider from "../assets/divider.svg";
import SmSearchIcon from "../assets/search-sm.svg";
import SelectIcon from "../assets/select-icon.svg";
import Notification from "../assets/notification.svg";

const Home = () => {
  return (
    <Styles.Container>
      <SideBarContainer />
      <div className="grow">
        <div>
          <Styles.NavContainer>
            <Searchbar />
            <Styles.ProfileContainer>
              <Styles.ProfileNotificationContainer>
                <div className="w-[18px] h-[18px]">
                  <img
                    className="w-full h-full"
                    src={Notification}
                    alt="Notification icon"
                  />
                </div>
                <Styles.Notification>3</Styles.Notification>
              </Styles.ProfileNotificationContainer>
              <div className="basis-1/2 pl-5">
                <img src={Profile} alt="profile dummy icon" />
              </div>
            </Styles.ProfileContainer>
          </Styles.NavContainer>
          <Styles.LinkContainer>
            <ul className="flex ml-10">
              <Styles.Link className="!text-textPrimary border-b-2 border-b-secondary">
                Efficiency
              </Styles.Link>
              <Styles.Link>Volume</Styles.Link>
              <Styles.Link>Customer Satisfaction</Styles.Link>
              <Styles.Link>Backlog</Styles.Link>
            </ul>
          </Styles.LinkContainer>
          <Styles.Heading>
            <Styles.HeadingActive>Efficiency Analytics</Styles.HeadingActive>
            <div>
              <Styles.Searchsm
                icon={SmSearchIcon}
                className=""
                placeholder="Search"
              />
              <Styles.Select icon={SelectIcon}>
                <option value="Filter option">Filter Options</option>
                <option value="">Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
              </Styles.Select>
              <img src={Divider} alt="" className="inline-block" />
              <Styles.Button>Export</Styles.Button>
            </div>
          </Styles.Heading>
        </div>
        <div className="mx-40">
          {data?.map((each) => {
            return <AnalyticsCard key={each.id} data={each} />;
          })}
        </div>
      </div>
    </Styles.Container>
  );
};

export default Home;

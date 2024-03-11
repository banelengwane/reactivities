import { Tab, TabPane } from "semantic-ui-react"
import ProfilePhotos from "./ProfilePhotos"
import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import ProfileFollowings from "./ProfileFollowings";

interface Props{
  profile: Profile;
}

const ProfileContent = ({profile}: Props) => {
    const panes = [
        {menuItem: 'About', render: () => <TabPane>About Content</TabPane>},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: 'Events', render: () => <TabPane>Events Content</TabPane>},
        {menuItem: 'Followers', render: () => <ProfileFollowings />},
        {menuItem: 'Following', render: () => <ProfileFollowings />},

    ]
  return (
    <Tab
        menu={{fluid: true, vertical: true}}
        menuPosition="right"
        panes={panes}
    />
  )
}

export default observer(ProfileContent)
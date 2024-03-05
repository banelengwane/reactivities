import { observer } from "mobx-react-lite"
import { Button, Card, Grid, Header, Image, TabPane } from "semantic-ui-react"
import { Profile } from "../../app/models/profile"
import { useStore } from "../../app/stores/store";
import { useState } from "react";

interface Props {
    profile: Profile;
}
const ProfilePhotos = ({profile}: Props) => {
    const {profileStore: {isCurrentUser}} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
  return (
    <TabPane>
        <Grid>
            <Grid.Column width={16}>
                <Header icon='image' content='Photos' />
                {isCurrentUser && (
                    <Button floated="right" basic content={addPhotoMode ? 'Cancel' : 'Add'} onClick={() => setAddPhotoMode(!addPhotoMode)}/>
                )}
            </Grid.Column>
            <Grid.Column width={16}>
                {addPhotoMode ? (
                    <p>Photo widgets goes here</p>
                ) : (
                    <Card.Group itemsPerRow={5}>
                        {profile.photos?.map(photo => (
                            <Card key={photo.id}>
                            <Image src={photo.url} />
                            </Card>
                        ))}
                    </Card.Group>
                )}
            </Grid.Column>
        </Grid>
        
    </TabPane>
  )
}

export default observer(ProfilePhotos)
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
    return (
        <Box 
        flex={2} 
        p={2}
        sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed" width={270}>
                <Typography variant="h6">
                    Online friends
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar src="assets/person/1.jpg" />
                    <Avatar src="assets/person/2.jpg" />
                    <Avatar src="assets/person/3.jpg" />
                    <Avatar src="assets/person/4.jpg" />
                    <Avatar src="assets/person/5.jpg" />
                    <Avatar  />
                    <Avatar src="assets/person/6.jpg" />
                    <Avatar src="assets/person/7.jpg" />
                    <Avatar src="assets/person/8.jpg" />
                </AvatarGroup>
                <Typography variant="h6" mt={2}  >
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={115} gap={5} >
                    <ImageListItem>
                        <img src="assets/post/1.jpg"
                        alt='IMG' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="assets/post/2.jpg"
                        alt='IMG' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="assets/post/3.jpg"
                        alt='IMG' />
                    </ImageListItem>
                </ImageList>
                <Typography  fontWeight={100} variant="h6" mt={2} >
                    Latest Conversations
                </Typography>

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
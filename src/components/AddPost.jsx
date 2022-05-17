import React,{useState} from 'react';
import {Tooltip,Fab,Modal,Box,Typography,styled,Avatar, TextField, Stack, Button, ButtonGroup, CssBaseline}from "@mui/material";
import {Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
const AddPost = () => {
    const [open,setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })
    const UserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px"
    })
    return (
        <>
            <CssBaseline/>
            <Tooltip onClick={(e)=>setOpen(true)}
            title="Add" sx={{
                position:"fixed",
                bottom:20,
                left: {xs:"calc(50% - 25px)",md:140}
            }}  >
               <Fab color="primary">
                   <Add/>
               </Fab>
            </Tooltip>

            <StyledModal
            open={open}
            onClose={()=>setOpen(false)}
            arria-labelledby="modal-modal-title"
            arria-describedby="modal-modal-description ">
                <Box width={400} height={300} bgcolor={"background.default"}
                p={3} borderRadius={5}  >
                    <Typography variant="h6" textAlign="center"
                    color="gray">Create a post
                    </Typography>
                    <UserBox>
                        <Avatar src="assets/person/4.jpg" />
                        <Typography fontWeight={500}variant='span'>John Koffi</Typography>
                    </UserBox>
                    <TextField sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    variant="standard"
                    placeholder="Whats on your mind?"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="error"/>
                        <PersonAdd color="success"/>
                    </Stack>
                    <ButtonGroup fullWidth
                    variant="contained" mb={3}>
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default AddPost;
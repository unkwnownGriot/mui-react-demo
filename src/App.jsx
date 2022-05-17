import Rightbar from "./components/Rightbar";
import {useState} from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {Box,Stack,createTheme,ThemeProvider,CssBaseline} from '@mui/material'
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
const App = () => {
const [mode,setMode]= useState("light")
  const DarkTheme = createTheme({
      palette:{
        mode:mode
      }
  })

  return (
<ThemeProvider theme={DarkTheme} >
   <CssBaseline/>
  <Box bgColor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction="row"
    spacing={1} justifyContent='space-between'>
      <Sidebar setMode={setMode} mode={mode} />
      <Feed/>
      <Rightbar/>
    </Stack>
    <AddPost/> 
  </Box>
</ThemeProvider>
  );
};

export default App;
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const Menubar = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setOpenPannel(newOpen);
  };
const DrawerList = (
    <Box sx={{ maxwidth: 350 , backgroundColor: '#37140f', height: '100%' }} b role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <h1 className='text-[20px] pr-10 pl-5 w-[18rem] pt-2 font-bold flex justify-between'><img src="/logo.svg" alt="" /> <p className='text-[20px]  pr-5 pl-13 mt-4 font-[200] cursor-pointer' onClick={toggleDrawer(false)} ><IoMdCloseCircle color='white' size={28} /></p></h1>
        <div className='border-1 w-[350px] border-red-400  '></div>
        <div className='pt-10 pl-5 gap-5 flex flex-col'>
          <Link to='/feature'><p className=' text-white text-lg cursore-pointer  '>Feature</p></Link>
          <Link to='/learn'><p className=' text-white text-lg cursore-pointer  '>Learn</p></Link>
          <Link to='/courses'><p className=' text-white text-lg cursore-pointer  '>Courses</p></Link>
          <Link to='/tutorial'><p className=' text-white text-lg cursore-pointer  '>Tutorial</p></Link>
          <Link to='/pricing'><p className=' text-white text-lg cursore-pointer  '>Pricing</p></Link>
          </div>
      </List>
      <Divider />
      <List>
        <div className='flex flex-col justify-center items-center mt-10 gap-5'>
          <div className='w-70 h-10 bg-[#c02d28] flex justify-center items-center text-lg text-white rounded-2xl'>Login</div>
          <div className='w-70 h-10 bg-[#c95018] flex justify-center items-center text-lg text-white rounded-2xl'>Join Now</div>
        </div>
      </List>
      <Divider />
      <List>
       
      </List>
    </Box>
  );

  return (
    <>
      
      <Drawer open={props.openPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default Menubar

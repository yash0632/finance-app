import {useState} from 'react'
import { Outlet } from 'react-router';

import SideBar from '../sidebar/SideBar';
export default function Layout(){
    const [isCollapsed,setIsCollapsed] = useState(false);
    return (
        <div className="grid grid-cols-[auto_1fr] max-h-screen max-w-screen" 
            style={{
            "height": "100vh",
            "width":"100vw"
        }}>
          <SideBar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          
          <main className='w-full h-full '>
            <Outlet />
          </main>
        </div>
      );
      
}

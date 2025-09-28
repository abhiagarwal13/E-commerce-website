import React, { useEffect } from 'react'
import { useContext ,useState} from 'react'
import { shopContext } from '../Context/Shopcontext'

import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';
function Searchbar() {
    const {showSearch,Search,setshowSearch,setSearch}=useContext(shopContext);
    const location=useLocation();
    const [Visible, setVisible] = useState(false)
    useEffect(()=>{
        if(location.pathname.includes('Collection')){
            setVisible(true)
            
        }
        else{
            setVisible(false)
        }

    },[location])



  return showSearch && Visible? (
    <div>
        <div className='    flex justify-center items-center  w-[100%] m-5'>
            <div className='   p-5   flex justify-center items-center gap-3 border-t-2 border-b-2 bg-gray-50 border-gray-200 w-[75%] '>

            <input type="text" placeholder='SearchBar' className='border-2 border-gray-200 rounded-2xl sm:w-[50%] pl-4 ' onChange={(e)=>{setSearch(e.target.value)}} />
            <div>
                <img src={assets.cross_icon} alt="" className='w-[16px] cursor-pointer'  onClick={()=>{setshowSearch(false);

                }}/>
            </div>
            </div>


        </div>

    </div>
  ):
  null;
}

export default Searchbar
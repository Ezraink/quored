 import React from 'react'
 import AddIcon from '@mui/icons-material/Add';
import "../css/SidebarOption.css"
 
 function SidebarOption() {
     return <div className='SidebarOptions'>
                 <div className='SidebarOption'>
                   <img
                     src='https://www.vidyalai.com/blog/content/images/2020/10/Hist-2.png'
                     alt=''
                      />
                       <p>History</p>
                   </div>

                   <div className='SidebarOption'>
                      <img 
                         src='https://media.istockphoto.com/vectors/modern-color-thin-line-concept-of-geography-vector-id536680486'
                        alt=''
                       />
                        <p>Geography</p>
                     </div>
                     
                        <div className='SidebarOption'>
                            <img 
                            src='https://image.shutterstock.com/image-vector/science-icons-circle-frame-latters-260nw-632039597.jpg'
                            alt=''
                             />
                              <p>Science</p>
                          </div>
                            <div className='SidebarOption'>
                                <img 
                                 src='https://media.istockphoto.com/vectors/line-web-concept-for-computer-science-vector-id615749406'
                                  alt='' 
                                  />
                                         <p>ComputerScience/IT</p>
                            </div>
                               <div className='SidebarOption'>
                                <img 
                                src='https://static1.bigstockphoto.com/4/3/1/large2/134124536.jpg'
                                alt='' 
                              />
                                <p>Economics</p>
                             </div>
                              <div className='SidebarOption'>
                                <img 
                                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpi1QCJv0gU2KJAecDA7kxFzey45hKeKlWweScfwEwWZxM1HkgCTT8wA2Ja3cUI1AbOw&usqp=CAU'
                                    alt=''
                                  />
                                    <p>Psychology</p>
                                    </div>
                                      <div className='SidebarOption'>
                                        <AddIcon />
                                        <p className='text'>Discover Space</p>
                                         </div>
            </div>;
 }
 
 export default SidebarOption;
 
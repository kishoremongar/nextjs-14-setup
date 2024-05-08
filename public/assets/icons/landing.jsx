'use client';
import React from 'react';

import { CircleMenu, CircleMenuItem } from 'react-circular-menu';
const LandingPage = () => {
  const widgets = [
    {
      title: 'Widgets',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/equipmentIcon.svg',
    },
    {
      title: 'Daily Process',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/processIcon.svg',
    },
    {
      title: 'Personnel',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/personnelIcon.svg',
    },
    {
      title: 'TruTech Engine',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/engineIcon.svg',
    },
    {
      title: 'Configurations',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/configurationsIcon.svg',
    },
    {
      title: 'Alert List',
      description: 'Record significant events during a shift.',
      image: '/assets/icons/alertIcon.svg',
    },
  ];

  return (
    <div>
      <div className='bg-[#1E3E59] w-full  px-3  py-4 flex items-center justify-between  border-b  '>
        <div>
          <img src='/assets/icons/navIcon.svg' className=' cursor-pointer ' />
        </div>
        <div>
          <h1 className='text-white font-bold text-2xl '>TruPlant</h1>
        </div>
        <div className='flex gap-3'>
          <img
            src='/assets/icons/notificationIcon.svg'
            className=' cursor-pointer'
          />
          {/* <NotificationIcon
            fill='#1E3E59 '
            stroke='#fff'
            className=' cursor-pointer  bg-light-primary dark:bg-dark-primary'
          /> */}
          <img
            src='/assets/icons/bookmarkIcon.svg'
            className=' cursor-pointer mobile:hidden'
          />
          <img
            src='/assets/icons/profileIcon.svg'
            className=' cursor-pointer mobile:hidden'
          />
          <img
            src='/assets/icons/logoutIcon.svg'
            className=' cursor-pointer mobile:hidden'
          />
        </div>
      </div>

      <div className=' m-5 mobile:m-3'>
        <div className='flex gap-2 mobile:hidden'>
          <img
            src='/assets/icons/widgetsIcon.svg'
            className=' cursor-pointer'
          />
          <div></div>

          <div>
            <h1 className=' dark:text-dark-primary text-light-primary  font-bold text-xl'>
              Widgets
            </h1>
          </div>
        </div>
        <hr className=' border border-[#4E7DA6] mt-2 mobile:hidden' />
        <div className=''>
          <div className='grid grid-cols-6  mobile:grid-cols-2  mobile:gap-3 mt-5 mobile:m-0'>
            {widgets.map((widget, index) => (
              <div
                key={index}
                className={`flex items-center justify-center h-full w-full ${
                  index !== 2 ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <div className=' p-14 tablet:p-5 mb-4 mobile:p-2 flex flex-col items-center  justify-center mobile:shadow-xl mobile:rounded-xl   mobile:h-48 '>
                  {' '}
                  <img
                    src={widget.image}
                    className=' tablet:w-10 tablet:h-10'
                  />
                  <div className='text-center mobile:text-sm '>
                    <h1 className='text-lg dark:text-dark-primary   text-light-primary font-bold mb-1 mobile:text-sm tablet:text-sm'>
                      {widget.title}
                    </h1>
                    <p className='text-sm text-[#5E6F7F] mobile:text-xs  mobile:p-1  mobile:m-0 m-2 mt-0 tablet:text-xs'>
                      {widget.description}
                    </p>
                  </div>
                </div>{' '}
                {index !== widgets.length - 1 && (
                  <div className=' h-full mobile:hidden py-16 '>
                    {' '}
                    <hr className='w-0 h-full  border border-[#D7D7D7]' />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='mobile:relative mobile:mt-12   desktop:hidden tablet:hidden '>
            <div
              className=' border-[#44627F] p-2 
               border rounded-md'
              style={{
                background: `linear-gradient(to right, rgba(30, 62, 89, 0.5), rgba(255, 255, 255, 0.05))`,
              }}
            >
              <div className='text-xs flex items-center justify-between'>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    src='/assets/icons/personnelIcon.svg'
                    className='w-8 h-8'
                  />
                  <p className=' dark:text-dark-primary text-light-primary'>
                    Personnel
                  </p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <img
                    src='/assets/icons/equipmentIcon.svg'
                    className='w-8 h-8'
                  />
                  <p className=' dark:text-dark-primary text-light-primary'>
                    Equipment
                  </p>
                </div>
              </div>

              <div className='absolute top-[-50%]   border-b  border-[#44627F] left-40  rounded-full flex flex-col justify-center items-center bg-white p-2'>
                <div>
                  <CircleMenu
                    startAngle={-140}
                    rotationAngle={130}
                    itemSize={3}
                    radius={8}
                    rotationAngleInclusive={false}
                    // style={{backgroundColor:"red"}}
                  >
                    <CircleMenuItem
                      style={{ backgroundColor: '#44627F' }}
                      tooltip='Email'
                      tooltipPlacement='right'
                    >
                      <div className='flex flex-col justify-center items-center'>
                        <img
                          src='/assets/icons/configurationMobileIcon.svg'
                          className='w-18 h-18'
                        />
                        <p className=' text-white text-[8px]'>Personnel</p>
                      </div>
                    </CircleMenuItem>
                    <CircleMenuItem
                      tooltip='Help'
                      style={{ backgroundColor: '#44627F' }}
                    >
                      {/* <HelpOutlineIcon /> */}
                      <div className='flex flex-col justify-center items-center'>
                        {' '}
                        <img
                          src='/assets/icons/processMobileIcon.svg'
                          className='w-4 h-4'
                        />
                        <p className='text-[8px] text-white'> Daily process</p>
                      </div>
                    </CircleMenuItem>
                    <CircleMenuItem
                      tooltip='Location'
                      tooltipPlacement='top'
                      style={{ backgroundColor: '#44627F' }}
                    >
                      {/* <MapIcon /> */}
                      <div className='flex flex-col justify-center items-center'>
                        {' '}
                        <img
                          src='/assets/icons/engineMobileIcon.svg'
                          className='w-4 h-4'
                        />
                        <p className='text-[8px] text-white'> TruTech Engine</p>
                      </div>
                    </CircleMenuItem>
                    <CircleMenuItem
                      tooltip='Info'
                      style={{ backgroundColor: '#44627F' }}
                    >
                      <div className='flex flex-col justify-center items-center'>
                        {' '}
                        <img
                          src='/assets/icons/alertMobileIcon.svg'
                          className='w-4 h-4'
                        />
                        <p className='text-[8px] text-white'> Alert list</p>
                      </div>
                    </CircleMenuItem>
                  </CircleMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

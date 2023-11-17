import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const HowOrderStep = ({ iconBg, number, title, description }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {number}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {description}
        </p>
      </div>
    </VerticalTimelineElement>
  )
}
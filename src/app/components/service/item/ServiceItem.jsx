import Link from "next/link"

const ServiceItem = ({data, number}) => {
  return (
    <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
      <Link className='service-item-main h-full' href={'/services/service-details/[slug]'} as={`/services/service-details/${data.services_name.toLowerCase().replace(/ /g, '-')}`}>
      <div className='heading flex items-center justify-between'>
        <i className={`${data.icon} text-blue md:text-6x1 text-5x1`}></i>
        <div className="number heading3 text-placehover text-slate-400">
          {number + 1}
        </div>
      </div>
      <div className="heading6 hover:text-blue duration-300 mt-6">
        {data.services_name}
      </div>
        <div className="text-secondary mt-2">
          {data.services_short}
        </div>
      </Link>
    </div>
  )
}
export default ServiceItem
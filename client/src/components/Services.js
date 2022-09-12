import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ icon, color, title, subtitle }) => {
  return (
    <div className="mb-3">
      <div className="service-card">
        <div className="mr-3">
          <div
            className="icon-circle d-flex justify-content-center align-items-center"
            style={{ backgroundColor: `${color}` }}
          >
            {icon}
          </div>
        </div>
        <div className="w-100">
          <div className="t-18 mb-2">{title}</div>
          <div className="t-14">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col d-flex">
          <h1 className="title col-7">
            Services that we <br />
            continue to improve
          </h1>
          <div className="col-5">
            <ServiceCard
              icon={<BsShieldFillCheck className="service-icon" />}
              color={'#4287f5'}
              title={'Security Guaranteed'}
              subtitle={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt amet sapiente ab enim necessitatibus'
              }
            />
            <ServiceCard
              icon={<BiSearchAlt className="service-icon" />}
              color={'#5ad6c1'}
              title={'Best exchange rates'}
              subtitle={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt amet sapiente ab enim necessitatibus'
              }
            />
            <ServiceCard
              icon={<RiHeart2Fill className="service-icon" />}
              color={'#d65a7b'}
              title={'Fastest transaction'}
              subtitle={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt amet sapiente ab enim necessitatibus'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

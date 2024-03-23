import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import PropTypes from 'prop-types';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90EF] mr-4'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90EF]'>{job_type}</button>
                </div>
                <div className='flex gap-5'>
                    <p className="inline-flex gap-2 items-center"><CiLocationOn /> {location}</p>
                    <p className="inline-flex gap-2 items-center"><MdAttachMoney />{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;
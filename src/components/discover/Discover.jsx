/* eslint-disable react/prop-types */


const Discover  = ({one}) => {
    const {  img, name } = one;

    return (
        <div className="">
        <img className="rounded-md" src={img} alt={name} />
    </div>
    );
};

export default Discover ;
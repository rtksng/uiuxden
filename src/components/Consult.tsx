import PropTypes from 'prop-types';
import Container from './Container';
import Button from './Button';

const Consult = ({
    heading = "Unlock Your Product’s Potential with a",
    subheading = "",
    buttonText = "Consult Us Now",
    boldsubheading = "Free Audit",
}) => {
    return (
        <div className='bg-gradient-fill py-10 md:py-20 2xl:py-[156px]'>
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 flex flex-col items-center">
                        <p className='text-center font-semibold text-2xl md:text-4xl 2xl:text-6xl mb-2'>
                            {heading}
                        </p>
                        <h3 className='font-thin text-center 2xl:text-[84px] text-3xl md:text-5xl md:mb-12 mb-6 text-neutral-800'>
                            {subheading} <span className="font-black">{boldsubheading}</span>
                        </h3>
                        <Button variant='primary'>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Consult.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    buttonText: PropTypes.string,
    boldsubheading: PropTypes.string,
};

export default Consult;

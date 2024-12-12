import React from 'react'
import Container from './Container'
import Button from './Button'

const Consult = () => {
    return (
        
        <div className='bg-gradient-fill py-10 md:py-20 2xl:py-[156px]'>
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 flex flex-col items-center">
                        <p className='text-center font-semibold text-2xl md:text-4xl 2xl:text-6xl mb-2'>
                            Unlock Your Product’s Potential with a
                        </p>
                        <h3 className='font-black text-center 2xl:text-[84px] text-3xl md:text-5xl md:mb-12 mb-6'>
                            Free Audit
                        </h3>
                        <Button variant='primary' >
                            Consult Us Now
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Consult

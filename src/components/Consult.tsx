import React from 'react'
import Container from './Container'
import Button from './Button'

const Consult = () => {
    return (
        <div className='bg-gradient-fill py-[156px]'>
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 flex flex-col items-center">
                        <p className='text-center font-semibold text-6xl mb-2'>
                            Unlock Your Product’s Potential with a
                        </p>
                        <h3 className='font-black text-center text-[84px] mb-12'>
                            Free Audit
                        </h3>
                        <Button variant='primary' className='!text-[28px] font-medium !bg-black py-8 px-[110px] hover:!bg-transparent '>
                            Consult Us Now
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Consult

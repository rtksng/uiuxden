import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { IoEyeOutline } from "react-icons/io5";
import BlogWriter from "../assets/blog-writer-img.png";
import Button from "../components/Button";
import CardImg from "../assets/blog-card-img.png";
import { FaRegClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const BlogList = () => {
    const consultData = {
        heading: "Ready to Elevate Your",
        subheading: "User",
        boldsubheading: "Experience?",
        buttonText: "Schedule a Consultation",
    };

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main>
            <Navbar />
            <div
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                    }`}
            ></div>

            <div className="relative h-[auto] sm:h-[50vh] xl:h-[70vh] green-linear py-12">
                <Container>
                    <div className="text-center pt-[80px] sm:pt-[100px] xl:pt-[90px] flex flex-col items-center">
                        <h1 className="text-[34px] sm:text-[48px] max-w-[1400px] lg:text-[46px] xl:text-[56px]  2xl:text-[90px] text-black  font-semibold mb-base leading-[1.2]">
                            Where Every Story Sparks a New Perspective
                        </h1>
                    </div>

                    <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-8 xl:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img
                                src={rightLongArrow}
                                alt="arrow"
                                width={50}
                                className="hidden lg:block xl:mx-auto"
                            />
                            <div className="ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | Casestudy
                                </h6>
                            </div>

                        </div>
                    </div>

                </Container>
            </div>

            <section className="top-blog py-10 sm:py-16 xl:pt-[90px] xl:pb-[120px]">
                <Container>
                    <div>
                        <div className="grid grid-cols-12 gap-y-6 sm:gap-[40px] ">
                            <div className="col-span-12 xl:col-span-7">
                                <div className="h-full big-card-bg p-4 transition-all duration-300 hover:scale-[1.03]">
                                    <div className=" pt-5 pb-7 block xl:hidden">
                                        <h5 className="text-[24px] font-normal text-primary-dark2">
                                            UX Research
                                        </h5>
                                    </div>

                                    <div className="card-img-clip h-[250px] sm:h-[370px] w-full">
                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex justify-end items-center items-center">
                                            <FaRegClock className="text-[#67D17E]" />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                17 Aug 2023
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-center items-center">
                                            <IoEyeOutline className="text-[#67D17E] " />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                223
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis">
                                        Building Smarter Online Stores: Generative AI in E-commerce dsfert dftw53 dt45cv dft5et54545
                                    </h4>
                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-2 mt-3 mb-10">
                                        Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-end items-center">
                                            <div className="w-[48px] h-[48px] rounded-full border border-[2px] border-[#67D17E]">
                                                <img src={BlogWriter} alt="blog-writter" className=" w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Written by
                                                </p>
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Surbhi Sood
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                        >
                                            Read More
                                        </Button>

                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 xl:col-span-5">
                                <div className="h-full flex flex-col sm:flex-row xl:flex-col justify-between  gap-y-6 sm:gap-10 xl: gap-0">
                                    <div className=" sm:w-[50%] xl:w-auto lg:h-[48%] transition-all duration-300 hover:scale-[1.03]">
                                        <div className="xl:h-full big-card-bg p-4">
                                            <div className=" lg:pt-5 pb-7 block xl:hidden">
                                                <h5 className="text-[24px] font-normal text-primary-dark2">
                                                    UX Research
                                                </h5>
                                            </div>
                                            <div className="grid grid-cols-12 gap-7  ">
                                                <div className="col-span-12 xl:col-span-5">
                                                    <div className="w-full h-[250px] lg:h-[370px] xl:h-full rounded-[12px] overflow-hidden">
                                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-7">

                                                    <div className="flex justify-start items-center items-center">
                                                        <FaRegClock className="text-[#67D17E]" />
                                                        <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                            17 Aug 2023
                                                        </p>
                                                    </div>

                                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis mt-5">
                                                        Top Online UX Design Courses for Career Changer: Get
                                                    </h4>
                                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-3 mt-6 mb-7">
                                                        AI impacts user experiences by making digital products more responsive to individual user needs.AI impacts user experiences by making
                                                    </p>
                                                    <div className="flex justify-end items-center">
                                                        <Button
                                                            variant="primary"
                                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                                        >
                                                            Read More
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" sm:w-[50%] xl:w-auto lg:h-[48%] transition-all duration-300 hover:scale-[1.03]">
                                        <div className="xl:h-full big-card-bg p-4">
                                            <div className=" lg:pt-5 pb-7 block xl:hidden">
                                                <h5 className="text-[24px] font-normal text-primary-dark2">
                                                    UX Research
                                                </h5>
                                            </div>
                                            <div className="grid grid-cols-12 gap-7  ">
                                                <div className="col-span-12 xl:col-span-5">
                                                    <div className="w-full h-[250px] lg:h-[370px] xl:h-full rounded-[12px] overflow-hidden">
                                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-7">

                                                    <div className="flex justify-start items-center items-center">
                                                        <FaRegClock className="text-[#67D17E]" />
                                                        <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                            17 Aug 2023
                                                        </p>
                                                    </div>

                                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis mt-5">
                                                        Top Online UX Design Courses for Career Changer: Get
                                                    </h4>
                                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-3 mt-6 mb-7">
                                                        AI impacts user experiences by making digital products more responsive to individual user needs.AI impacts user experiences by making
                                                    </p>
                                                    <div className="flex justify-end items-center">
                                                        <Button
                                                            variant="primary"
                                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                                        >
                                                            Read More
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="top-blog pb-10 xl:pb-[96px]">
                <Container>
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-10 xl:mb-[60px]">
                            <h3 className="text-[48px] font-semibold text-primary-dark2 mb-5 sm:mb-0">
                                More Blogs
                            </h3>
                            <div className="flex items-center bg-[#F3F6F8] rounded-full  py-4 px-5">
                                <input type="text" className='w-full outline-none bg-[#F3F6F8] mr-1 placeholder-[#7F7F7F]' placeholder='Search on UiUx Den' />
                                <IoSettingsOutline className="text-[#49454F]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12  gap-y-6 sm:gap-10 xl:gap-[40px] ">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                                <div className="h-full other-card-bg p-4">
                                    <div className=" pt-0 pb-3 block xl:hidden">
                                        <h5 className="text-[24px] font-normal text-primary-dark2">
                                            UX Research
                                        </h5>
                                    </div>
                                    <div className="other-card-img-clip h-[270px] w-full">
                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex justify-end items-center items-center">
                                            <FaRegClock className="text-[#67D17E]" />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                17 Aug 2023
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-center items-center">
                                            <IoEyeOutline className="text-[#67D17E] " />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                223
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis">
                                        Building Smarter Online Stores: Generative AI in E-commerce dsfert dftw53 dt45cv dft5et54545
                                    </h4>
                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-2 mt-3 mb-10">
                                        Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-end items-center">
                                            <div className="w-[48px] h-[48px] rounded-full border border-[2px] border-[#67D17E]">
                                                <img src={BlogWriter} alt="blog-writter" className=" w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Written by
                                                </p>
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Surbhi Sood
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                        >
                                            Read More
                                        </Button>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                                <div className="h-full other-card-bg p-4">
                                    <div className=" pt-0 pb-3 block xl:hidden">
                                        <h5 className="text-[24px] font-normal text-primary-dark2">
                                            UX Research
                                        </h5>
                                    </div>
                                    <div className="other-card-img-clip h-[270px] w-full">
                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex justify-end items-center items-center">
                                            <FaRegClock className="text-[#67D17E]" />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                17 Aug 2023
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-center items-center">
                                            <IoEyeOutline className="text-[#67D17E] " />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                223
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis">
                                        Building Smarter Online Stores: Generative AI in E-commerce dsfert dftw53 dt45cv dft5et54545
                                    </h4>
                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-2 mt-3 mb-10">
                                        Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-end items-center">
                                            <div className="w-[48px] h-[48px] rounded-full border border-[2px] border-[#67D17E]">
                                                <img src={BlogWriter} alt="blog-writter" className=" w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Written by
                                                </p>
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Surbhi Sood
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                        >
                                            Read More
                                        </Button>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                                <div className="h-full other-card-bg p-4">
                                    <div className=" pt-0 pb-3 block xl:hidden">
                                        <h5 className="text-[24px] font-normal text-primary-dark2">
                                            UX Research
                                        </h5>
                                    </div>
                                    <div className="other-card-img-clip h-[270px] w-full">
                                        <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex justify-end items-center items-center">
                                            <FaRegClock className="text-[#67D17E]" />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                17 Aug 2023
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-center items-center">
                                            <IoEyeOutline className="text-[#67D17E] " />
                                            <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                223
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-[24px] font-semibold text-primary-dark2 truncate text-ellipsis">
                                        Building Smarter Online Stores: Generative AI in E-commerce dsfert dftw53 dt45cv dft5et54545
                                    </h4>
                                    <p className="text-[16px] font-normal text-primary-dark2 line-clamp-2 mt-3 mb-10">
                                        Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this Generative AI in ecommerce is bringing about several noteworthy shifts in the industry. More than just another fancy tool, this
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-end items-center">
                                            <div className="w-[48px] h-[48px] rounded-full border border-[2px] border-[#67D17E]">
                                                <img src={BlogWriter} alt="blog-writter" className=" w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Written by
                                                </p>
                                                <p className="text-[14px] font-medium text-primary-dark2 ">
                                                    Surbhi Sood
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[20px] 2xl:px-[30px]"
                                        >
                                            Read More
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer consultData={consultData} />
        </main>
    );
};

export default BlogList;

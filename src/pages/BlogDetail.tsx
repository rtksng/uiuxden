import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { FaRegClock } from "react-icons/fa";
import CardImg from "../assets/blog-card-img.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Button from "../components/Button";
import { RiUser3Line } from "react-icons/ri";


const BlogDetail = () => {
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

            <section className="relative pt-12 ">
                <div className="blog-detail-header mt-6">
                    <Container>
                        <div className="pt-[40px] sm:pt-[50px] xl:pt-[90px] flex flex-col items-center">
                            <h1 className="text-[34px] sm:text-[48px] lg:text-[46px] xl:text-[60px] text-black  font-semibold mb-base ">
                                Top AI Online Courses for UI/UX Designers: Boost Your Career
                            </h1>
                        </div>
                    </Container>
                </div>
            </section>
            <section className="top-blog py-10 sm:py-8 xl:pt-9 xl:pb-[120px]">
                <Container>
                    <div>
                        <div className="grid grid-cols-12 gap-8 xl:gap-[50px]">
                            <div className="col-span-12 lg:col-span-7 xl:col-span-8">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-10">
                                    <div className="flex items-center">
                                        <div className="flex items-center border-r-2 border-[#EDEDED]  pr-3">
                                            <div className="border border-[#CDCDCD] border-[1px] w-[48px] h-[48px] mr-3 overflow-hidden rounded-full">
                                                <img src={CardImg} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-[20px] text-primary-dark2 font-semibold">
                                                by Arushi Negi
                                            </p>
                                        </div>
                                        <div className="flex items-center pl-3">
                                            <FaRegClock className="text-[#67D17E] mr-2 text-xl" />
                                            <p className="text-[20px] text-primary-dark2 font-medium">
                                                17 Aug 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3 sm:mt-0 justify-end sm:justify-start">
                                        <IoEyeOutline className="text-[#67D17E] mr-2 text-xl" />
                                        <p className="text-[20px] text-primary-dark2 font-medium">
                                            207
                                        </p>
                                        <IoIosHeartEmpty className="text-primary-dark2 mx-4 text-xl" />
                                        <IoShareSocialOutline className="text-primary-dark2 text-xl" />
                                    </div>
                                </div>
                                <div className="card-img-clip h-[250px] sm:h-[550px] w-full rounded-[18px] overflow-hidden">
                                    <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                </div>
                                <div className="my-6 sm:my-11 border-b-[1px] border-[#CDCDCDAD] pb-10 sm:pb-20 xl:pl-8">
                                    <div>
                                        <h3 className="text-[40px] text-primary-dark2 font-semibold mb-4 sm:mb-8">
                                            Introduction
                                        </h3>
                                        <p className="text-[20px] text-primary-dark2 font-normal mb-8 sm:mb-12">
                                            Artificial intelligence (AI) is revolutionizing many industries, and design is no exception. As AI technology becomes more advanced, it is increasingly integrated into the workflows of UI and UX designers. Having a strong understanding of AI is no longer just a bonus but a necessity for designers who want to stay ahead of the curve in 2025.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-[40px] text-primary-dark2 font-semibold mb-4 sm:mb-8">
                                            Why Designers Should Learn AI in 2025
                                        </h3>
                                        <h5 className="text-[30px] text-primary-dark2 font-semibold mb-5">
                                            The Evolving Role of AI in Design
                                        </h5>
                                        <p className="text-[20px] text-primary-dark2 font-normal mb-10">
                                            Artificial intelligence has fundamentally changed how designers approach their work. From automating repetitive tasks to providing insights into user behavior, AI tools are becoming indispensable in the design industry. For instance, AI can help with generating design layouts, predicting user interactions, and even personalizing user experiences based on data analysis.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-[30px] text-primary-dark2 font-semibold mb-5">
                                            Benefits of Integrating AI into Your Design Process
                                        </h5>
                                        <p className="text-[20px] text-primary-dark2 font-normal mb-8">
                                            Artificial intelligence has fundamentally changed how designers approach their work.
                                        </p>
                                        <ul className="list-disc list-outside pl-7 sm:pl-20">
                                            <li className="text-[20px] text-primary-dark2 font-normal mb-4">
                                                <span className="font-semibold">
                                                    Enhanced Creativity:
                                                </span>

                                                AI tools can generate new design ideas, concepts, and content, pushing the boundaries of what’s possible

                                            </li>
                                            <li className="text-[20px] text-primary-dark2 font-normal mb-4">
                                                <span className="font-semibold">
                                                    Enhanced Creativity:
                                                </span>

                                                AI tools can generate new design ideas, concepts, and content, pushing the boundaries of what’s possible

                                            </li>
                                            <li className="text-[20px] text-primary-dark2 font-normal mb-4">
                                                <span className="font-semibold">
                                                    Enhanced Creativity:
                                                </span>

                                                AI tools can generate new design ideas, concepts, and content, pushing the boundaries of what’s possible

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-[#F3F6F8AD] rounded-[18px] p-5 sm:p-8 xl:p-[60px]">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="border border-[#CDCDCD] border-[2px] min-w-[100px] w-[100px] h-[100px] overflow-hidden rounded-full">
                                            <img src={CardImg} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="grow">
                                            <div className="border-b-[1px] border-[#CDCDCDAD] pb-4 mb-4">
                                                <h6 className="text-[24px] text-primary-dark2 font-normal">
                                                    Arushi Negi
                                                </h6>
                                                <p className="text-[16px] text-primary-dark2 font-medium">
                                                    Designer
                                                </p>
                                            </div>
                                            <p className="text-[20px] text-primary-dark2 font-normal">
                                                Hi, I'm Gayatri Munda, a passionate UI Designer and Logo Designer with a keen eye for detail and a deep love for crafting visually engaging and user-centered designs. I specialize in creating seamless and intuitive user interfaces that enhance the overall user experience, ensuring every design is not only functional but also visually appealing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex  items-center gap-4 mt-11 sm:mt-[100px] mb-7">
                                        <h3 className="text-[40px] font-semibold text-primary-dark2">
                                            Comments
                                        </h3>
                                        <div className="h-[1px] bg-[#CCCCCCAD] grow">
                                        </div>
                                    </div>
                                    <div className="bg-[#F3F6F8AD] rounded-[18px] p-5 sm:p-8 xl:p-[60px]">
                                        <div className="grid grid-cols-12 gap-4 sm:gap-[50px]">
                                            <div className="col-span-12 xl:col-span-6">
                                                <div>
                                                    <label className=" text-[18px] sm:text-[20px] font-medium text-primary-dark2     ">
                                                        First Name
                                                    </label>
                                                    <div className="flex items-center bg-white px-4 outline-1 -outline-offset-1 border border-[#CBCBCB] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600  rounded-[12px] mt-2">
                                                        <input
                                                            id="price"
                                                            name="price"
                                                            type="text"
                                                            placeholder="Enter your first name"
                                                            className="block min-w-0 grow py-3 sm:py-4 text-base text-gray-900 placeholder:text-secondary-dark focus:outline-none sm:text-[18px]"
                                                        />
                                                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"><RiUser3Line className="text-primary-dark2 text-xl" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 xl:col-span-6">
                                                <div>
                                                    <label className=" text-[18px] sm:text-[20px] font-medium text-primary-dark2     ">
                                                        Email Id
                                                    </label>
                                                    <div className="flex items-center bg-white px-4 outline-1 -outline-offset-1 border border-[#CBCBCB] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600  rounded-[12px] mt-2">
                                                        <input
                                                            id="price"
                                                            name="price"
                                                            type="text"
                                                            placeholder="Enter you email"
                                                            className="block min-w-0 grow py-3 sm:py-4 text-base text-gray-900 placeholder:text-secondary-dark focus:outline-none sm:text-[18px]"
                                                        />
                                                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"><RiUser3Line className="text-primary-dark2 text-xl" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 xl:col-span-12">
                                                <div>
                                                    <label className=" text-[18px] sm:text-[20px] font-medium text-primary-dark2     ">
                                                        Comments
                                                    </label>
                                                    <textarea
                                                        id="price"
                                                        name="price"
                                                        rows={5}
                                                        className="block min-w-0 grow py-3 sm:py-4 text-base text-gray-900 placeholder:text-secondary-dark focus:outline-none sm:text-[18px] border border-[#CBCBCB] rounded-[12px] px-4 w-full mt-2"
                                                    />
                                                </div>
                                                <div className="flex justify-start items-center mt-7 sm:mt-12">
                                                    <Button
                                                        variant="primary"
                                                        className="!hover:bg-transparent py-[10px] 2xl:py-4 px-4 xl:px-[50px]"
                                                    >
                                                        Submit
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                                <div className="xl:pt-16">
                                    <div className="flex  items-center gap-4 mb-8">
                                        <h3 className="text-[30px] font-semibold text-primary-dark2">
                                            Related Blog
                                        </h3>
                                        <div className="h-[1px] bg-[#CCCCCCAD] grow">
                                        </div>
                                    </div>
                                    <div className="xl:h-full blog-detail-related-card-bg p-4">
                                        <div className="grid grid-cols-12 gap-4 xl:gap-7  ">
                                            <div className="col-span-5 sm:col-span-4 xl:col-span-5">
                                                <div className="w-full h-full  rounded-[12px] overflow-hidden">
                                                    <img src={CardImg} alt="blogcard" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <div className="col-span-7 sm:col-span-8 xl:col-span-7">

                                                <div className="flex justify-start items-center items-center">
                                                    <FaRegClock className="text-[#67D17E]" />
                                                    <p className="text-[16px] font-medium text-primary-dark2 ml-2">
                                                        17 Aug 2023
                                                    </p>
                                                </div>

                                                <h4 className="text-[18px] font-semibold text-primary-dark2 line-clamp-2 sm:line-clamp-3 lg:line-clamp-2 mt-5 xl:mt-3 mb-5">
                                                    Top Online UX Design Courses for Career Changer: Get Top Online UX Design Course Top Online UX Design Course Top Online UX Design Course
                                                </h4>
                                                <div className="flex justify-start items-center pb-5 ">
                                                    <Button
                                                        variant="primary"
                                                        className="!hover:bg-transparent py-[10px] 2xl:py-2 px-4 xl:px-[16px]"
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
                </Container>
            </section>
            <Footer consultData={consultData} />
        </main >
    );
};

export default BlogDetail;

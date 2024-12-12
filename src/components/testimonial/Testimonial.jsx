import React from "react";
const testimonials = [
    {
        quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        name: "John Doe",
        position: "CEO at Company",
        image: "data:image/jpeg;base64,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",
    },
    {
        quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware",
        name: "Jane Smith",
        position: "Marketing Director",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbas08UYW2sVrbCAa1NiALP1zQBUEME-oBw&s",
    },
    {
        quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware",
        name: "Bob Johnson",
        position: "Product Manager",
        image: "https://media.gettyimages.com/id/1469706271/photo/code-asian-man-and-reflection-in-glasses-focus-and-programming-for-cyber-security-hacking-and.jpg?s=612x612&w=gi&k=20&c=SRCF56fDMXJr_q4b1y3ocP-Tj-HtB2IHStX7K-anQjg=",
    },
];

const Testimonial = () => {
    return (

        <>
            <div>
                <section className="text-gray-600 body-font mb-10">
                    <div className="container px-5 py-10 mx-auto">
                        <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                        <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>
                        <div className="">

                            <div className="flex items-center mb-4">
                                {testimonials.map((item, index) => {
                                    const { image, name, position, quote } = item
                                    return (
                                        <div key={index} className="p-4 w-full ">
                                            <div className="h-full border  rounded-xl overflow-hidden shadow-sm cursor-pointer  flex flex-col items-center">
                                                <img
                                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                                    src={image}
                                                    alt={`${name}'s profile`}
                                                />
                                                <div className="ml-4">
                                                <p className="text-gray-700 italic leading-relaxed ">"{quote}"</p>
                                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4 text-center items-center" />
                                                    <h4 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase text-center">{name}</h4>
                                                    <p className="text-gray-500 text-center">{position}</p>
                                                    
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Testimonial;

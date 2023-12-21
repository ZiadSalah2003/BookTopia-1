import React from "react";
import Image from "next/image";
import ziad from "../public/ziad.jpeg";
import hazem from "../public/Hazem.jpg";
import ahmed from "../public/Ahmed.jpeg";
import yousef from "../public/Yousef.jpeg";
import sherif from "../public/Sherif.jpeg";
import shahd from "../public/Shahd.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const teamMembers = [
    { id: 1, name: "Ziad Salah", role: ["Frontend Developer"], image: ziad },
    { id: 2, name: "Hazem Helal", role: ["Frontend Developer"], image: hazem },
    { id: 3, name: "Ahmed Mohamed", role: ["UI/UX Designer"], image: ahmed },
    { id: 5, name: "Youssef Medhat", role: ["Backend Developer"], image: yousef },
    { id: 6, name: "Sherif Khairy", role: ["Backend Developer"], image: sherif },
    { id: 4, name: "Shahd Osman", role: ["Backend Developer"], image: shahd },
    // Add other team members as needed
];

const Mid = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center rounded overflow-hidden shadow-lg m-5 ">
                {teamMembers.map((member) => (
                    <div key={member.id} className="w-60 m-2 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                        <div className="h-60 w-full relative">
                            <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <div className="p-2">
                            <h2 className="font-bold text-lg mb-2 text-center">{member.name}</h2>

                            <div className="m-2">
                                <p role="button" href="#" className="text-white bg-gray-700 px-3 py-1 rounded-md hover:bg-black text-center">
                                    {member.role}
                                </p>
                            </div>
                            <div className="flex gap-5 pb-1 justify-center">
                                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                                <FaGithub className="text-2xl cursor-pointer hover:text-gray-600" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Mid;

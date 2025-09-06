"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function ContactPage() {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-[#0D0816] relative overflow-hidden ">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64,64,64,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64,64,64,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-2xl mx-auto">
          {/* Contact Card */}
          <div className="relative rounded-3xl p-12 text-center  ">
            {/* Header Text */}
            <div className="mb-8">
              <h1 style={{
                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                WebkitBackgroundClip: "text",
              }} className="heading text-transparent bg-clip-text mb-2">Let's Connect</h1>
              <p className="text-gray-500 subheadline">Click Below</p>
            </div>

            {/* Avatar Group */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Left Avatar - Yellow */}
              <div onClick={() => setShowForm(true)} className="cursor-pointer w-40 h-40 rounded-full bg-[#5eead4] border-4 border-black flex items-center justify-center relative z-10">
                <div className="w-30 h-30 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-2xl"><img src="/contact1.jpg" className="rounded-full" alt="" /></span>
                </div>
              </div>

              {/* Middle Avatar - Purple (Clickable) */}
              <button
                onClick={() => setShowForm(true)}

                className="w-45 h-45 rounded-full bg-white border-4 border-black flex items-center justify-center relative z-20 -mx-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="w-35 h-35 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl"><img src="/triplelogo.png" alt="" /></span>
                </div>
                {/* Cursor pointer indicator */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </button>

              {/* Right Avatar - Green */}
              <div onClick={() => setShowForm(true)} className=" cursor-pointer w-40 h-40 rounded-full bg-green-300 border-4 border-black flex items-center justify-center relative z-10">
                <div className="w-30 h-30 rounded-full bg-green-400 flex items-center justify-center">
                  <span className="text-2xl"><img src="/contact2.jpg" className="rounded-full" alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-700 ${showForm ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setShowForm(false)}
      >
        <div
          className={`border border-gray-600/50 rounded-3xl p-8 w-full max-w-2xl transform transition-all duration-700 shadow-2xl ${showForm ? "scale-100 translate-y-0 rotate-0" : "scale-90 translate-y-12 rotate-1"
            }`}
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Form Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white text-2xl font-bold    ">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-sm mt-1">Let's start a conversation</p>
            </div>
            <button
              onClick={() => setShowForm(false)}
              className=" cursor-pointer text-gray-400 hover:text-white transition-all duration-300 p-2 hover:bg-gray-700/50 rounded-full"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1  gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full   border border-gray-600/50 text-white placeholder-gray-500 
                      outline-none
                     rounded-xl h-12 px-4 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full   border border-gray-700 text-white placeholder-gray-500 
                      outline-none
                     rounded-xl h-12 px-4 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full border border-gray-700 text-white placeholder-gray-500 
                   outline-none
                   rounded-xl p-4 resize-none transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button className="cursor-pointer buttonfont w-full sm:w-auto border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white   px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                    Mend Message
                  </button>
                </div>
              </form>
            </div>


            {/* Address & Contact Info */}
            <div className="space-y-6">
              <div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-700 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300 text-sm">
                        123 Business Street
                        <br />
                        Suite 100
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-700 transition-colors duration-300">
                    <FaPhoneAlt className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-700 transition-colors duration-300">
                    <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300 text-sm">sarah@example.com</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}
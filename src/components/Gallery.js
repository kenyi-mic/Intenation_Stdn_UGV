import React from "react";
import galleryData from "./data.json";

function Gallery() {
  return (
    <div className="container mx-auto">
      <div className=" w-full h-2/4 md:pb-40 bg-gray-400 border border-gray-500 border-t-0 mb-2">
        <h1 className="text-center max-w-5xl mx-auto text-5xl py-5 text-cyan-500">
          Our best times and memories in University of global village(UGV)
        </h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-row-dense md:grid-col m-3 grid-cols-4">
          <div className="">
            <img
              className="w-60 h-80"
              src={galleryData.hosam.image0}
              alt="Hosam Nafez"
            />
            <div className="relative">
              <h5 className="z-10 absolute bottom-20  text-xl  text-white inline-flex">
                {galleryData.hosam.title}
              </h5>
              <p>{galleryData.hosam.desc0}</p>
            </div>
          </div>

          <div>
            <img
              className="w-60 h-80"
              src={galleryData.michael.image0}
              alt="michael Henry"
            />
            <h5>{galleryData.michael.title}</h5>
            <p>{galleryData.michael.desc0}</p>
          </div>

          <div>
            <img
              className="w-60 h-80"
              src={galleryData.luka.image0}
              alt="luka garang"
            />
            <h5>{galleryData.luka.title}</h5>
            <p>{galleryData.luka.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.emma.image0}
              alt="emmanuel abbe"
            />
            <h5>{galleryData.emma.title}</h5>
            <p>{galleryData.emma.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.abuka.image0}
              alt="marilin abuka"
            />
            <h5>{galleryData.abuka.title}</h5>
            <p>{galleryData.abuka.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.Baha.image0}
              alt="baha alhout"
            />
            <h5>{galleryData.Baha.title}</h5>
            <p>{galleryData.Baha.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.duol.image0}
              alt="duol jock"
            />
            <h5>{galleryData.duol.title}</h5>
            <p>{galleryData.duol.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.ben.image0}
              alt="agolbeny malual"
            />
            <h5>{galleryData.ben.title}</h5>
            <p>{galleryData.ben.desc0}</p>
          </div>
          <div>
            <img
              className="w-60 h-80"
              src={galleryData.tigo.image0}
              alt="lawrence tigo"
            />
            <h5>{galleryData.tigo.title}</h5>
            <p>{galleryData.tigo.desc0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

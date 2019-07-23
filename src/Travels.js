import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: "Tokyo",
        country: "Japan",
        photo: "https://red-point.fr/wp-content/uploads/2017/02/tokyo-mud-bath-bar-mudbath0716.jpg",
        distance: "9 710 km"
    },
    {
        destination:"New York",
        country: "USA",
        photo: "https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg",
        distance: "5 834 km"
  },
    {
        destination: "Reims",
        country: "France",
        photo: "https://img.aws.la-croix.com/2018/07/20/1200956532/cathedrale-Notre-Dame-Reims-simpose-81-metres-place-Cardinal-Lucon_2_729_486.jpg",
        distance: "1 km"
  },
    {
        destination: "Paris",
        country: "France",
        photo: "https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_410,w_800,f_auto/s3/public/prod/2019-02/Paris.jpg",
        distance: "120 km"
    },
    {
        destination: "London",
        country: "England",
        photo: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
        distance: "500 km"
    },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel {...travel} />
    ))}
  </div>
);

export default Travels;
import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Trang phục thường ngày",
    description:
      "Chào mừng bạn đến với cửa hàng của chúng tôi! Chúng tôi cung cấp các bộ sưu tập thời trang đa dạng, từ những thiết kế tinh tế đến những phong cách năng động, giúp bạn thể hiện cá tính và phong cách riêng.",
  },
  {
    id: 2,
    img: Img2,
    title: "Áo sơ mi in",
    description:
      "Chúng tôi cung cấp những sản phẩm thời trang chất lượng cao, thiết kế độc đáo và phù hợp với mọi nhu cầu của bạn, mang lại sự thoải mái và phong cách tối ưu.",
  },
  {
    id: 3,
    img: Img3,
    title: "Áo sơ mi nữ",
    description:
      "Chúng tôi mang đến những bộ sưu tập thời trang đa dạng, kết hợp giữa phong cách hiện đại và sự thoải mái, giúp bạn tỏa sáng trong mọi hoàn cảnh.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
          Sản phẩm được đánh giá cao nhất dành cho bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Sản phẩm tốt nhất
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Chúng tôi cung cấp những sản phẩm chất lượng, với thiết kế hiện đại và phù hợp với xu hướng thời trang, mang lại sự thoải mái và phong cách cho bạn.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Đặt hàng nagy bây giờ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

// @flow strict
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      {blog.cover_image ? (
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={blog.cover_image}
            height={1080}
            width={1920}
            alt={blog.title || "Certification Image"}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        </div>
      ) : (
        <div className="h-44 lg:h-52 bg-[#2c3656] flex items-center justify-center rounded-t-lg text-white text-sm italic">
          No Image Provided
        </div>
      )}
      <div className="p-2 sm:p-3 flex flex-col">
        <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
          {blog.title}
        </p>

        <p className="mb-2 text-sm text-[#16f2b3] flex items-center gap-2">
          <FaCalendarAlt className="text-base" />
          {blog.reading_time_minutes}
        </p>

        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;

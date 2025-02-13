import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaComment, FaCalendarAlt } from "react-icons/fa";

function Posttime({ author = "By admin", comments = "Comments (05)", date = "October 19, 2022", hideauthor = false,className, hidecomments = false, postclass }) {
  return (
    <div className={`flex eading-8  ${className}`}>
      {!hideauthor &&  author && (
        <div className="flex items-center">
          <span className="mr-2">
            <IoPerson className="text-blue" />
          </span>
          <a href="#" className={`text-black hover:text-blue duration-300 font-rubik ${postclass}`} >{author}</a>
        </div>
      )}

      {!hidecomments &&comments && (
        <div className="flex items-center">
          <span className="mr-2">
            <FaComment className="text-blue" />
          </span>
          <a href="#" className={`text-black hover:text-blue duration-300 font-rubik ${postclass}`}>{comments}</a>
        </div>
      )}

      {date && (
        <div className="flex items-center">
          <span className="mr-2">
            <FaCalendarAlt className="text-blue" />
          </span>
          <a href="#" className={`text-black hover:text-blue duration-300 font-rubik ${postclass}`}>{date}</a>
        </div>
      )}
    </div>
  );
}

export default Posttime;

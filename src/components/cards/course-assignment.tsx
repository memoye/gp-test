import { students } from "../../lib/data";

export default function CourseAssignment() {
  return (
    <div
      className="bg-card p-6 space-y-1.5
text-white drop-shadow-custom rounded-lg"
    >
      <div className="flex flex-col-reverse">
        <div>
          <h2 className="font-medium text-lg tracking-wider">Exam - Unit 5</h2>
          <p className="text-white/70 text-sm font-light">
            Spanish for beginners
          </p>
        </div>
        <h3 className="text-xs mb-2.5 filter-[drop-shadow(0_10px_10px_10px_black)]">
          <span className="text-[#D9D9D9] drop-shadow-custom">DEADLINE</span>{" "}
          <span>12:00</span>
        </h3>
      </div>

      <div className="">
        <ul className="flex mt-4 -space-x-3 [&>li]:box-content [&>li]:rounded-full [&>li]:border-4 [&>li]:border-card [&>li]:size-7 ">
          {students.map((avi, idx) => (
            <li
              key={idx}
              className="bg-card cursor-pointer hover:drop-shadow-sm"
            >
              <img
                className="aspect-square object-cover"
                src={avi}
                alt={`User ${idx}`}
              />
            </li>
          ))}
          <li className="hover:drop-shadow-sm cursor-pointer bg-[#F8F8FA] text-primary flex items-center justify-center text-xs font-medium">
            +99
          </li>
        </ul>
      </div>
    </div>
  );
}

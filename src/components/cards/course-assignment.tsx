import { students } from '../../lib/data';

export default function CourseAssignment() {
  return (
    <div className="flex h-full flex-col justify-between space-y-1.5 rounded-lg bg-card p-6 text-white drop-shadow-custom">
      <div className="flex flex-col-reverse">
        <div>
          <h2 className="text-lg font-medium tracking-wider">Exam - Unit 5</h2>
          <p className="text-sm font-light text-white/70">
            Spanish for beginners
          </p>
        </div>
        <h3 className="filter-[drop-shadow(0_10px_10px_10px_black)] mb-2.5 text-xs">
          <span className="text-[#D9D9D9] drop-shadow-custom">DEADLINE</span>{' '}
          <span>12:00</span>
        </h3>
      </div>

      <div className="">
        <ul className="mt-4 flex -space-x-3 [&>li]:box-content [&>li]:size-7 [&>li]:rounded-full [&>li]:border-4 [&>li]:border-card">
          {students.map((avi, idx) => (
            <li
              key={idx}
              className="cursor-pointer bg-card hover:drop-shadow-sm"
            >
              <img
                className="aspect-square object-cover"
                src={avi}
                alt={`User ${idx}`}
              />
            </li>
          ))}
          <li className="flex cursor-pointer items-center justify-center bg-[#F8F8FA] text-xs font-medium text-primary hover:drop-shadow-sm">
            +99
          </li>
        </ul>
      </div>
    </div>
  );
}
